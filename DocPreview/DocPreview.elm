module DocPreview (..) where


import Html exposing (Html, text, div, span, h1)
import Html.Attributes exposing (class)
import StartApp
import Effects exposing (Effects, Never)
import Docs.Package
import Docs.Entry
import String
import Regex
import Dict
import Json.Decode as Dec
import Utils.Markdown as Markdown
import Parse.Type
import Docs.Type
import Docs.Name
import Set


type alias Model =
  { selModule : Maybe Docs.Package.Module
  , package : Docs.Package.Package }


init : (Model, Effects Action)
init =
  (Model Nothing Dict.empty, Effects.none)



type Action
  = NoOp
  | RefreshModules String
  | SelectModule String


update : Action -> Model -> ( Model, Effects Action )
update action model =
  case action of
    NoOp ->
      ( model, Effects.none )

    RefreshModules rawModules ->
      let
        res =
          Dec.decodeString Docs.Package.decodePackage rawModules
      in
        case res of
          Result.Err v ->
            Debug.crash "Error decoding package docs"

          Result.Ok r ->
            ( { model | package = r
                      , selModule =  Dict.values r |> List.head
              }
            , Effects.none
            )

    SelectModule name ->
      ( { model | selModule = Dict.get name model.package }
      , Effects.none
      )




--  View module docs

view : Signal.Address Action -> Model -> Html
view address model =
  case model.selModule of
    Nothing ->
      div [] [text "NO SELECTED MODULE"]
    Just mod ->
      let
        chunks = toChunks mod
        --nameDict =   toNameDict model.package
        --newChunks = List.map (chunkMap stringToType) chunks
      in
        div [ class "entry-list" ] <|
          h1 [class "entry-list-title"] [text mod.name]
          :: List.map (viewChunk Docs.Entry.stringView) chunks
          --:: List.map (viewChunk (Docs.Entry.typeView nameDict)) newChunks


viewChunk : (Docs.Entry.Model tipe -> Html) -> Chunk tipe -> Html
viewChunk entryView chunk =
  case chunk of
    Markdown md ->
        span [class "markdown-entry"] [ Markdown.block md ]

    Entry entry ->
        entryView entry


type Chunk tipe
    = Markdown String
    | Entry (Docs.Entry.Model tipe)


toNameDict : Docs.Package.Package -> Docs.Name.Dictionary
toNameDict pkg =
  Dict.map (\_ modul -> Set.fromList (Dict.keys modul.entries)) pkg



chunkMap : (a -> b) -> Chunk a -> Chunk b
chunkMap func chunk =
  case chunk of
    Markdown md ->
      Markdown md

    Entry entry ->
      Entry (Docs.Entry.map func entry)



-- parsing fails for some reason when in LT (native issue ?)
stringToType : String -> Docs.Type.Type
stringToType str =
  let
    _ = Debug.log "String to type for:" str
  in
    case Parse.Type.parse str of
      Ok tipe ->
        let
          _ = Debug.log "type after parse: " tipe
        in
          tipe

      Err err ->
        let
          _ = Debug.log "Shit while parsing" err
        in
          Docs.Type.Var str


toChunks : Docs.Package.Module -> List (Chunk String)
toChunks moduleDocs =
  case String.split "\n@docs " moduleDocs.comment of
    [] ->
        Debug.crash "Expecting some documented functions in this module!"

    firstChunk :: rest ->
        Markdown firstChunk
        :: List.concatMap (subChunks moduleDocs) rest


subChunks : Docs.Package.Module -> String -> List (Chunk String)
subChunks moduleDocs postDocs =
    subChunksHelp moduleDocs (String.split "," postDocs)


subChunksHelp : Docs.Package.Module -> List String -> List (Chunk String)
subChunksHelp moduleDocs parts =
  case parts of
    [] ->
        []

    rawPart :: remainingParts ->
        let
          part =
            String.trim rawPart
        in
          case isValue part of
            Just valueName ->
              toEntry moduleDocs valueName
              :: subChunksHelp moduleDocs remainingParts

            Nothing ->
              let
                trimmedPart =
                  String.trimLeft rawPart
              in
                case String.words trimmedPart of
                  [] ->
                      [ Markdown (String.join "," parts) ]

                  token :: _ ->
                      case isValue token of
                        Just valueName ->
                          [ toEntry moduleDocs valueName
                          , Markdown (String.dropLeft (String.length token) trimmedPart)
                          ]

                        Nothing ->
                          [ Markdown (String.join "," parts) ]

var : Regex.Regex
var =
  Regex.regex "^[a-zA-Z0-9_']+$"


operator : Regex.Regex
operator =
  Regex.regex "^\\([^a-zA-Z0-9]+\\)$"


isValue : String -> Maybe String
isValue str =
  if Regex.contains var str then
    Just str

  else if Regex.contains operator str then
    Just (String.dropLeft 1 (String.dropRight 1 str))

  else
    Nothing


toEntry : Docs.Package.Module -> String -> Chunk String
toEntry moduleDocs name =
  case Dict.get name moduleDocs.entries of
    Nothing ->
        Debug.crash ("docs have been corrupted, could not find " ++ name)

    Just entry ->
        Entry entry


-- START-APP WIRING


app : StartApp.App Model
app =
  StartApp.start
    { init = init
    , update = update
    , view = view
    , inputs = [ modulesSignal, selectModuleSignal ]
    }


main : Signal Html
main =
  app.html


-- Inbound

modulesSignal : Signal Action
modulesSignal =
  Signal.map RefreshModules modules


port modules : Signal String


selectModuleSignal : Signal Action
selectModuleSignal =
  Signal.map SelectModule selectModule


port selectModule : Signal String
