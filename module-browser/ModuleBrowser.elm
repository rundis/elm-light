module ModuleBrowser (..) where

import Html exposing (Html, text, ul, li, div, input, p)
import Html.Attributes exposing (value, style, class, type', placeholder)
import Html.Events exposing (on, onClick, onWithOptions, targetValue, keyCode)
import StartApp
import Effects exposing (Effects, Never)
import String
import Json.Decode as Json
import List.Extra as ListX
import Dict
import Signal
import Task


type alias Model =
  { allModules : List Modul
  , filteredModules : List Modul
  , searchStr : String
  , selected : Maybe Modul
  }


type alias Modul =
  { name : String
  , file : String
  , packageName : String
  , version : String
  }


init : ( Model, Effects Action )
init =
  ( Model [] [] "" Nothing
  , Effects.none
  )


type Action
  = NoOp
  | Filter String
  | Prev
  | Next
  | Select
  | ClickSelect String
  | Close
  | Refresh (List Modul)


update : Action -> Model -> ( Model, Effects Action )
update action model =
  case action of
    NoOp ->
      ( model, Effects.none )

    Filter str ->
      let
        filtered =
          filterModules str model.allModules

        sel =
          List.head filtered
      in
        ( { model
            | searchStr = str
            , filteredModules = filtered
            , selected = sel
          }
        , Effects.none
        )

    Prev ->
      ( { model | selected = prevModule model }
      , notifyChangeSelection
      )

    Next ->
      ( { model | selected = nextModule model }
      , notifyChangeSelection
      )

    Select ->
      case model.selected of
        Nothing ->
          ( model, Effects.none )

        Just x ->
          ( model
          , notifySelect x.file
          )

    ClickSelect file ->
      ( model
      , notifySelect file
      )

    Close ->
      ( model, notifyClose )

    Refresh modules ->
      ( Model modules modules "" (List.head modules)
      , Effects.none
      )


filterModules : String -> List Modul -> List Modul
filterModules searchStr modules =
  let
    filtr mod =
      String.startsWith (String.toLower searchStr) (String.toLower mod.name)
  in
    List.filter filtr modules


prevModule : Model -> Maybe Modul
prevModule model =
  let
    prev i =
      if (i > 0) then
        ListX.getAt model.filteredModules (i - 1)
      else
        model.selected
  in
    selectModule prev model


nextModule : Model -> Maybe Modul
nextModule model =
  let
    nxt i
      = if (i < (List.length model.filteredModules) - 1) then
          ListX.getAt model.filteredModules (i + 1)
        else
          model.selected
  in
   selectModule nxt model


selectModule : (Int -> Maybe Modul) -> Model -> Maybe Modul
selectModule selFn model =
  let
    pipeM = flip Maybe.andThen

    selIndex sel =
      ListX.elemIndex sel model.filteredModules
  in
    model.selected |> pipeM selIndex |> pipeM selFn


notifySelect : String -> Effects Action
notifySelect file =
  Signal.send selectMailbox.address file
    |> Effects.task
    |> Effects.map (\_ -> NoOp)


notifyChangeSelection : Effects Action
notifyChangeSelection =
  Signal.send changeSelectionMailbox.address ()
    |> Effects.task
    |> Effects.map (\_ -> NoOp)


notifyClose : Effects Action
notifyClose =
  Signal.send closeMailbox.address ()
    |> Effects.task
    |> Effects.map (\_ -> NoOp)


-- VIEW


view : Signal.Address Action -> Model -> Html
view address model =
  div
    [ class "filter-list" ]
    [ searchInputView address model
    , ul
        []
        (List.map (\m -> itemView address m model) model.filteredModules)
    ]


searchInputView : Signal.Address Action -> Model -> Html
searchInputView address model =
  let
    options =
      { preventDefault = True, stopPropagation = False }

    keyActions =
      Dict.fromList [ ( 38, Prev ), ( 40, Next ), ( 13, Select ), ( 27, Close ) ]

    dec =
      (Json.customDecoder
        keyCode
        (\k ->
          if Dict.member k keyActions then
            Ok k
          else
            Err "not handling that key"
        )
      )

    handleKeydown k =
      Maybe.withDefault NoOp (Dict.get k keyActions) |> Signal.message address
  in
    input
      [ value model.searchStr
      , class "search"
      , type' "text"
      , placeholder "search"
      , on "input" targetValue (\str -> Signal.message address (Filter str))
      , onWithOptions "keydown" options dec handleKeydown
      ]
      []


itemView : Signal.Address Action -> Modul -> Model -> Html
itemView address mod model =
  let
    pipeM =
      flip Maybe.andThen

    itemClass =
      model.selected
        |> pipeM
            (\sel ->
              if (sel == mod) then
                Just "selected"
              else
                Nothing
            )
        |> Maybe.withDefault ""
  in
    li
      [ class itemClass
      , onClick address (ClickSelect mod.file)
      ]
      [ p [] [ text mod.name ]
      , p [ class "binding" ] [ text (mod.packageName ++ " - " ++ mod.version) ]
      ]



-- START-APP WIRING


app : StartApp.App Model
app =
  StartApp.start
    { init = init
    , update = update
    , view = view
    , inputs = [ modzSignal ]
    }


main : Signal Html
main =
  app.html



-- PORTS


port tasks : Signal (Task.Task Never ())
port tasks =
  app.tasks



-- Inbound

modzSignal : Signal Action
modzSignal =
  Signal.map Refresh modzPort


port modzPort : Signal (List Modul)



-- Outbound

selectMailbox : Signal.Mailbox String
selectMailbox =
  Signal.mailbox ""


port select : Signal String
port select =
  selectMailbox.signal


changeSelectionMailbox : Signal.Mailbox ()
changeSelectionMailbox =
  Signal.mailbox ()


port changeSelection : Signal ()
port changeSelection =
  changeSelectionMailbox.signal


closeMailbox : Signal.Mailbox ()
closeMailbox =
  Signal.mailbox ()


port close : Signal ()
port close =
  closeMailbox.signal


