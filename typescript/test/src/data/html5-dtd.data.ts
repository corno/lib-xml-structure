
type StringType2 =
    | ['oentity',
        {
            'data': string | string[]
        }]
type AttributeType =
    | ['aentity',
        {
            'data': Attributes
        }]
type ElementType =
    | ['eentity',
        {
            'data': string | string[]
        }]

function sref($: string): StringType {
    return ['reference', $]
}
function attdef($2: StringType, $3:
    | ['default', string]
    | ['implied', null]
    | ['required', null]
    | ['fixed', string]
    | ['ref', string]

): null {
    return null
}

type StringType =
    | ['idrefs', null]
    | ['idref', null]
    | ['cdata', null]
    | ['nmtoken', null]
    | ['choice', { [key: string]: null }]
    | ['id', null]
    | ['reference', string]

function IDREFS(): StringType {
    return ['idrefs', null]
}

function IDREF(): StringType {
    return ['idref', null]
}

function CDATA(): StringType {
    return ['cdata', null]
}

function NMTOKEN(): StringType {
    return ['nmtoken', null]
}

function ID(): StringType {
    return ['id', null]
}

function choice($: { [key: string]: null }): StringType {
    return ['choice', $]
}

function default_($: string): ['default', string] {
    return ['default', $]
}

function attribute(attributeRefs: AttributeRefs, b: Attributes): AttributeType {
    return ['aentity',
        {
            'data': b,
        }]
}

function elementtype(b: ElementContent
): ElementType {
    return ['eentity',
        {
            'data': "",
        }]
}
function string(b: StringType): StringType2 {
    return ['oentity',
        {
            'data': "",
        }]
}

function implied(): ['implied', null] {
    return ['implied', null]
}

function required(): ['required', null] {
    return ['required', null]
}

function fixed($: string): ['fixed', string] {
    return ['fixed', $]
}

function ref($: string): ['ref', string] {
    return ['ref', $]
}

type AttributeRefs = { [key: string]: null }
type Attributes = { [key: string]: null }

function element(content: ElementContent, attributeRefs: AttributeRefs, attributes: Attributes): Element {
    return {
        'content': content,
        'attributes': attributes,
    }
}

type Element = {
    'content': ElementContent
    'attributes': Attributes
}

type ElementContent =
    | ['empty', null]
    | ['choice', string]

function empty(): ElementContent {
    return ['empty', null]
}
function sequence($: string): ElementContent {
    return ['choice', $]
}
function echoice($: string): ElementContent {
    return ['choice', $]
}
function eref($: string): ElementContent {
    return ['choice', $]
}

type Definitions = {
    'types': {
        'string': { [key: string]: StringType2 }
        'attributes': { [key: string]: AttributeType }
        'elements': { [key: string]: ElementType }
    },
    'elements': { [key: string]: Element }
}

//####################################################################################################################

/*
   HTML 5 DTD

   This is the same as HTML 4 Transitional except for
   updates for the HTML 5 specication.
*/

//================ Character mnemonic entities =========================

// <!ENTITY % HTMLlat1 PUBLIC
//    "-//W3C//ENTITIES Latin 1 for XHTML//EN"
//    "html5-lat1.ent">
// %HTMLlat1;

// <!ENTITY % HTMLsymbol PUBLIC
//    "-//W3C//ENTITIES Symbols for XHTML//EN"
//    "html5-symbol.ent">
// %HTMLsymbol;

// <!ENTITY % HTMLspecial PUBLIC
//    "-//W3C//ENTITIES Special for XHTML//EN"
//    "html5-special.ent">
// %HTMLspecial;

//================== Imported Names ====================================

export const $: Definitions = {
    'types': {
        'string': {
            "ContentType": string(CDATA()), // media type, as per [RFC2045} 

            "ContentTypes": string(CDATA()), // comma-separated list of media types, as per [RFC2045} 

            "Charset": string(CDATA()), // a character encoding, as per [RFC2045} 

            "Charsets": string(CDATA()), // a space separated list of character encodings, as per [RFC2045} 

            "LanguageCode": string(NMTOKEN()), // a language code, as per [RFC3066} 

            "Character": string(CDATA()), // a single character, as per section 2.2 of [XML} 

            "Number": string(CDATA()), // one or more digits 

            "Date": string(CDATA()), // one or more digits 

            "LinkTypes": string(choice( // space-separated list of link types
                {
                    "alternate": null,
                    "archives": null,
                    "author": null,
                    "bookmark": null,
                    "contact": null,
                    "external": null,
                    "first": null,
                    "help": null,
                    "icon": null,
                    "index": null,
                    "last": null,
                    "license": null,
                    "next": null,
                    "nofollow": null,
                    "noreferrer": null,
                    "pingback": null,
                    "prefetch": null,
                    "prev": null,
                    "search": null,
                    "stylesheet": null,
                    "sidebar": null,
                    "tag": null,
                    "up": null,
                })),

            "MediaDesc": string(choice({
                "all": null,
                "braille": null,
                "embossed": null,
                "handheld": null,
                "print": null,
                "projection": null,
                "screen": null,
                "speech": null,
                "tty": null,
                "tv": null
            })), // single or comma-separated list of media descriptors 

            "URI": string(CDATA()), // a Uniform Resource Identifier, see [RFC2396} 

            "UriList": string(CDATA()), // a space separated list of Uniform Resource Identifiers 

            "Datetime": string(CDATA()), // date and time information. ISO date format 

            "Script": string(CDATA()), // script expression 

            "StyleSheet": string(CDATA()), // style sheet data 

            "Text": string(CDATA()), // used for titles etc. 

            "FrameTarget": string(choice({
                "blank": null,
                "_parent": null,
                "_self": null,
                "_top": null,
            })),
            // render in this frame 

            "Length": string(CDATA()),
            // nn for pixels or nn% for percentage length 

            "MultiLength": string(CDATA()),
            // pixel, percentage, or relative 

            "Pixels": string(CDATA()),
            // integer representing length in pixels 

            "Boolean": string(choice({
                "true": null,
                "false": null
            })),

            "OlType": string(choice({
                "1": null,
                "a": null,
                "A": null,
                "i": null,
                "I": null,
            })),
            // ol type attribute 

            // these are used for image maps 

            "Shape": string(choice({
                "rect": null,
                "circle": null,
                "poly": null,
                "default": null,

            })),

            "Coords": string(CDATA()),
            // comma separated list of lengths 

            // a color using sRGB: #RRGGBB as Hex values 
            "Color": string(CDATA()),

            /*
            There are also 16 widely known color names with their sRGB values:
            
                Black  = #000000    Green  = #008000
                Silver = #C0C0C0    Lime   = #00FF00
                Gray   = #808080    Olive  = #808000
                White  = #FFFFFF    Yellow = #FFFF00
                Maroon = #800000    Navy   = #000080
                Red    = #FF0000    Blue   = #0000FF
                Purple = #800080    Teal   = #008080
                Fuchsia= #FF00FF    Aqua   = #00FFFF
            */
            // Scope is simpler than headers attribute for common tables 
            "Scope": string(choice({
                "row": null,
                "col": null,
                "rowgroup": null,
                "colgroup": null,

            })),
            "InputType": string(choice({
                "button": null,
                "checkbox": null,
                "color": null,
                "date": null,
                "datetime": null,
                "datetime-local": null,
                "email": null,
                "file": null,
                "hidden": null,
                "image": null,
                "month": null,
                "number": null,
                "password": null,
                "radio": null,
                "range": null,
                "reset": null,
                "submit": null,
                "tel": null,
                "text": null,
                "time": null,
                "url": null,
                "week": null,
            })),

            "LAlign": string(choice({
                "top": null,
                "bottom": null,
                "left": null,
                "right": null,

            })),
        },
        'attributes': {

            //=================== Generic Attributes ===============================

            /*
            core attributes common to most elements
              id       document-wide unique id
              class    space separated list of classes
              style    associated style info
              title    advisory title/amplification
            */

            "coreattrs": attribute(
                {},
                {
                    "id": attdef(ID(), implied()),
                    "class": attdef(CDATA(), implied()),
                    "style": attdef(sref("StyleSheet"), implied()),
                    "title": attdef(sref("Text"), implied()),
                }
            ),

            /*
            internationalization attributes
              lang        language code (backwards compatible),
              xml:lang    language code (as per XML 1.0 spec),
              dir         direction for weak/neutral text
            */
            "i18n": attribute(
                {},
                {
                    "lang": attdef(sref("LanguageCode"), implied()),
                    "xml:lang": attdef(sref("LanguageCode"), implied()),
                    "dir": attdef(choice({
                        "ltr": null,
                        "rtl": null,

                    }), implied()),
                }
            ),

            /*
            attributes for common UI events
              onclick     a pointer button was clicked
              ondblclick  a pointer button was double clicked
              onmousedown a pointer button was pressed down
              onmouseup   a pointer button was released
              onmousemove a pointer was moved onto the element
              onmouseout  a pointer was moved away from the element
              onkeypress  a key was pressed and released
              onkeydown   a key was pressed down
              onkeyup     a key was released
            */

            "events": attribute(
                {},
                {
                    "onclick": attdef(sref("Script"), implied()),
                    "ondblclick": attdef(sref("Script"), implied()),
                    "onmousedown": attdef(sref("Script"), implied()),
                    "onmouseup": attdef(sref("Script"), implied()),
                    "onmouseover": attdef(sref("Script"), implied()),
                    "onmousemove": attdef(sref("Script"), implied()),
                    "onmouseout": attdef(sref("Script"), implied()),
                    "onkeypress": attdef(sref("Script"), implied()),
                    "onkeydown": attdef(sref("Script"), implied()),
                    "onkeyup": attdef(sref("Script"), implied()),
                    // // HTML 5 Mouse Events - Events triggered by a mouse, or similar user actions: 
                    "ondrag": attdef(sref("Script"), implied()), // Script to be run when an element is dragged 
                    "ondragend": attdef(sref("Script"), implied()), // Script to be run at the end of a drag operation 
                    "ondragenter": attdef(sref("Script"), implied()), // Script to be run when an element has been dragged to a valid drop target 
                    "ondragleave": attdef(sref("Script"), implied()), // Script to be run when an element leaves a valid drop target 
                    "ondragover": attdef(sref("Script"), implied()), // Script to be run when an element is being dragged over a valid drop target 
                    "ondragstart": attdef(sref("Script"), implied()), // Script to be run at the start of a drag operation 
                    "ondrop": attdef(sref("Script"), implied()), // Script to be run when dragged element is being dropped 
                    "onmousewheel": attdef(sref("Script"), implied()), // Script to be run when the mouse wheel is being rotated 
                    "onscroll": attdef(sref("Script"), implied()), // Script to be run when an element's scrollbar is being scrolled 
                }
            ),

            /*
            attributes for elements that can get the focus
              accesskey   accessibility key character
              tabindex    position in tabbing order
              onfocus     the element got the focus
              onblur      the element lost the focus
            */
            "%focus": attribute(
                {},
                {
                    "accesskey": attdef(sref("Character"), implied()),
                    "tabindex": attdef(sref("Number"), implied()),
                    "onfocus": attdef(sref("Script"), implied()),
                    "onblur": attdef(sref("Script"), implied()),
                }
            ),

            // HTML 5 core attributes 
            "%html5attrs": attribute(
                {},
                {
                    "contenteditable": attdef(sref("Boolean"), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    "draggable": attdef(choice({
                        "true": null,
                        "false": null,
                        "auto": null,
                    }), implied()),
                    "hidden": attdef(choice({ "hidden": null }), implied()),
                    "item": attdef(CDATA(), implied()),
                    "itemprop": attdef(CDATA(), implied()),
                    "spellcheck": attdef(sref("Boolean"), implied()),
                    "subject": attdef(ID(), implied()),
                    /*
                    WHY IS THIS DUPLICATED????
                    "contextmenu": attdef(ID(), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    "contextmenu": attdef(ID(), implied()),
                    */
                }
            ),

            /*
            Media Events - Events triggered by medias like videos, images and audio.
                 Applies to all HTML 5 elements, but is most common in media elements, such
                 as audio, embed, img, object, and video.
            */
            "html5mediaevents": attribute(
                {},
                {
                    "onabort": attdef(sref("Script"), implied()),  // Script to be run on an abort event 
                    "oncanplay": attdef(sref("Script"), implied()), // Script to be run when media can start play, but might has to stop for buffering 
                    "oncanplaythrough": attdef(sref("Script"), implied()), // Script to be run when media can be played to the end, without stopping for buffering 
                    "ondurationchange": attdef(sref("Script"), implied()), // Script to be run when the length of the media is changed 
                    "onemptied": attdef(sref("Script"), implied()), // Script to be run when a media resource element suddenly becomes empty (network errors, errors on load etc.) 
                    "onended": attdef(sref("Script"), implied()), // Script to be run when media has reach the end 
                    "onerror": attdef(sref("Script"), implied()), // Script to be run when an error occurs during the loading of an element 
                    "onloadeddata": attdef(sref("Script"), implied()), // Script to be run when media data is loaded 
                    "onloadedmetadata": attdef(sref("Script"), implied()), // Script to be run when the duration and other media data of a media element is loaded 
                    "onloadstart": attdef(sref("Script"), implied()), // Script to be run when the browser starts to load the media data 
                    "onpause": attdef(sref("Script"), implied()), // Script to be run when media data is paused 
                    "onplay": attdef(sref("Script"), implied()), // Script to be run when media data is going to start playing 
                    "onplaying": attdef(sref("Script"), implied()), // Script to be run when media data has start playing 
                    "onprogress": attdef(sref("Script"), implied()), // Script to be run when the browser is fetching the media data 
                    "onratechange": attdef(sref("Script"), implied()), // Script to be run when the media data's playing rate has changed 
                    "onreadystatechange": attdef(sref("Script"), implied()), // Script to be run when the ready-state changes 
                    "onseeked": attdef(sref("Script"), implied()), // Script to be run when a media element's seeking attribute is no longer true, and the seeking has ended 
                    "onseeking": attdef(sref("Script"), implied()), // Script to be run when a media element's seeking attribute is true, and the seeking has begun 
                    "onstalled": attdef(sref("Script"), implied()), // Script to be run when there is an error in fetching media data (stalled) 
                    "onsuspend": attdef(sref("Script"), implied()), // Script to be run when the browser has been fetching media data, but stopped before the entire media file was fetched 
                    "ontimeupdate": attdef(sref("Script"), implied()), // Script to be run when media changes its playing position 
                    "onvolumechange": attdef(sref("Script"), implied()), // Script to be run when media changes the volume, also when volume is set to "mute" 
                    "onwaiting": attdef(sref("Script"), implied()), // Script to be run when media has stopped playing, but is expected to resume 
                }
            ),

            "%attrs": attribute(
                {
                    "coreattrs": null,
                    "i18n": null,
                    "events": null,
                    "html5attrs": null,

                },
                {
                }
            ),
        },
        'elements': {
            //=================== Text Elements ====================================

            "special.extra": elementtype(echoice("object | img | map | iframe")),

            "special.basic": elementtype(echoice("br | span | bdo")),

            "special": elementtype(echoice("%special.basic; | %special.extra;")),

            "fontstyle.basic": elementtype(echoice("small | i | b | u")),

            "fontstyle": elementtype(echoice("%fontstyle.basic;")),

            "phrase.extra": elementtype(echoice("sub | sup")),
            "phrase.basic": elementtype(echoice("em | strong | dfn | code | q | samp | kbd | var | cite | abbr | acronym")),

            "phrase": elementtype(echoice("%phrase.basic; | %phrase.extra;")),

            "inline.forms": elementtype(echoice("input | output | select | textarea | label | button |    datetime | datetime-local | data | month | week | time | number | range | email | url | menu |  datalist")),

            // these can occur at block or inline level 
            "misc.inline": elementtype(echoice("ins | del | script")),

            // these can only occur at block level 
            "misc": elementtype(echoice("noscript | %misc.inline;")),

            "inline": elementtype(echoice("a | %special; | %fontstyle; | %phrase; | %inline.forms;")),

            // %Inline; covers inline or "text-level" elements 
            "Inline": elementtype(sequence("(#PCDATA | %inline; | %misc.inline;)*")),

            //================== Block level elements ==============================

            "heading": elementtype(echoice("h1|h2|h3|h4|h5|h6")),
            "lists": elementtype(echoice("ul | ol | dl")),
            "blocktext": elementtype(echoice("pre | hr | blockquote | address | article | aside |  summary | mark")),

            "block": elementtype(echoice("p | %heading; | div | %lists; | %blocktext; | fieldset | table |    header | footer | section | hgroup | main | nav | dialog | figure |  datagrid | canvas | audio | video | source | embed | keygen |  progress | ruby")),

            // %Flow; mixes block and inline and is used for list items etc. 
            "Flow": elementtype(echoice("(#PCDATA | %block; | form | %inline; | %misc;)*")),

            //================== Content models for exclusions =====================

            // a elements use %Inline; excluding a 

            "a.content": elementtype(sequence("(#PCDATA | %special; | %fontstyle; | %phrase; | %inline.forms; | %misc.inline;)*")),

            // pre uses %Inline excluding img, object, big, small 

            "pre.content": elementtype(sequence("(#PCDATA | a | %special.basic; | %fontstyle.basic; | %phrase.basic; |  %inline.forms; | %misc.inline;)*")),

            // form uses %Flow; excluding form 

            "form.content": elementtype(sequence("(#PCDATA | %block; | %inline; | %misc;)*")),

            // button uses %Flow; but excludes a, form, form controls, iframe 

            "button.content": elementtype(sequence("(#PCDATA | p | %heading; | div | %lists; | %blocktext; |  table | datagrid | br | span | bdo | object | img | map | %fontstyle; | %phrase; | %misc;)*")),

            "head.misc": elementtype(sequence("(script|style|meta|link|object)*")), //Document Head


        },
    },
    'elements': {
        //================ Document Structure ==================================

        // the namespace URI designates the document profile 

        "html": element(
            sequence("(head, body)"),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
                "xmlns": attdef(sref("URI"), fixed("http://www.w3.org/1999/xhtml")),
                // HTML 5 attributes 
                "manifest": attdef(sref("URI"), implied()),
            }
        ),

        //================ Document Head =======================================

        /*
        content model is %head.misc; combined with a single
             title and an optional base element in any order
        */

        "head": element(
            sequence("(%head.misc((title, %head.misc;, (base, %head.misc;)?) |(base, %head.misc;, (title, %head.misc;))))"),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
                "profile": attdef(sref("URI"), implied()),
            }
        ),

        /* The title element is not considered part of the flow of text.
               It should be displayed, for example as the page header or
               window title. Exactly one title is required per document.
            */
        "title": element(
            sequence("(#PCDATA)"),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
            }
        ),

        // document base URI 

        "base": element(
            empty(),
            {},
            {
                "id": attdef(ID(), implied()),
                "href": attdef(sref("URI"), implied()),
                "target": attdef(sref("FrameTarget"), implied()),
            }
        ),

        // generic metainformation 
        "meta": element(
            empty(),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
                "http-equiv": attdef(CDATA(), implied()),
                "name": attdef(CDATA(), implied()),
                "content": attdef(CDATA(), required()),
                //HTML 5 attributes 
                "charset": attdef(sref("Charset"), implied()),
            }
        ),

        /*
          Relationship values can be used in principle:
        
           a) for document specific toolbars/menus when used
              with the link element in document head e.g.
                start, contents, previous, next, index, end, help
           b) to link to a separate style sheet (rel="stylesheet"),
           c) to make a link to a script (rel="script"),
           d) by stylesheets to control how collections of
              html nodes are rendered into printed documents
           e) to make a link to a printable version of this document
              e.g. a PostScript or PDF version (rel="alternate" media="print"),
        */

        "link": element(
            empty(),
            {
                "attrs": null
            },
            {
                "href": attdef(sref("URI"), implied()),
                "hreflang": attdef(sref("LanguageCode"), implied()),
                "type": attdef(sref("ContentType"), implied()),
                "rel": attdef(sref("LinkTypes"), implied()),
                "media": attdef(sref("MediaDesc"), implied()),
                // HTML 5 attributes 
                "sizes": attdef(sref("Number"), implied()),
            }
        ),

        // style info, which may include CDATA sections 
        "style": element(
            sequence("(#PCDATA)"),
            {
                "i18n": null,
            },
            {
                "id": attdef(ID(), implied()),
                "type": attdef(choice({ "text/css": null }), required()),
                "media": attdef(sref("MediaDesc"), implied()),
                // HTML 5 attributes 
                "scoped": attdef(choice({ "scoped": null }), implied()),
            }
        ),

        // script statements, which may include CDATA sections 
        "script": element(
            sequence("(#PCDATA)"),
            {},
            {
                "id": attdef(ID(), implied()),
                "charset": attdef(sref("Charset"), implied()),
                "type": attdef(choice({ "text/javascript": null }), required()),
                "language": attdef(CDATA(), implied()),
                "src": attdef(sref("URI"), implied()),
                "defer": attdef(choice({ "defer": null }), implied()),
                // HTML 5 attributes 
                "async": attdef(choice({ "async": null }), implied()),
            }
        ),

        // alternate content container for non script-based rendering 

        "noscript": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {}
        ),

        //======================= Frames =======================================

        // inline subwindow 

        "iframe": element(
            eref("Flow"),
            {
                "coreattrs": null,
                "html5attrs": null,
            },
            {
                "name": attdef(NMTOKEN(), implied()),
                "src": attdef(sref("URI"), implied()),
                "height": attdef(sref("Length"), implied()),
                "width": attdef(sref("Length"), implied()),
                // HTML 5 attributes 
                "sandbox": attdef(choice({
                    "allow-forms": null,
                    "allow-same-origin": null,
                    "allow-scripts": null,
                }), implied()),
                "seamless": attdef(CDATA(), implied()),
                "srcdoc": attdef(CDATA(), implied()),
            }
        ),

        //=================== Document Body ====================================

        "body": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "onload": attdef(sref("Script"), implied()),
                "onunload": attdef(sref("Script"), implied()),
                // // HTML 5 Window Event Attributes 
                "onafterprint": attdef(sref("Script"), implied()), // Script to be run after the document is printed 
                "onbeforeprint": attdef(sref("Script"), implied()), // Script to be run before the document is printed 
                "onbeforeonload": attdef(sref("Script"), implied()), // Script to be run before the document loads 
                "onerror": attdef(sref("Script"), implied()), // Script to be run when an error occur 
                "onhaschange": attdef(sref("Script"), implied()), // Script to be run when the document has change 
                "onmessage": attdef(sref("Script"), implied()), // Script to be run when the message is triggered 
                "onoffline": attdef(sref("Script"), implied()), // Script to be run when the document goes offline 
                "ononline": attdef(sref("Script"), implied()), // Script to be run when the document comes online 
                "onpagehide": attdef(sref("Script"), implied()), // Script to be run when the window is hidden 
                "onpageshow": attdef(sref("Script"), implied()), // Script to be run when the window becomes visible 
                "onpopstate": attdef(sref("Script"), implied()), // Script to be run when the window's history changes 
                "onredo": attdef(sref("Script"), implied()), // Script to be run when the document performs a redo 
                "onresize": attdef(sref("Script"), implied()), // Script to be run when the window is resized 
                "onstorage": attdef(sref("Script"), implied()), // Script to be run when a document loads 
                "onundo": attdef(sref("Script"), implied()), // Script to be run when a document performs an undo 
                /* WHY IS THIS DUPLICATED
                "onunload": attdef(sref("Script"), implied()), // Script to be run when the user leaves the document 
                */
            }
        ),

        "div": element( // generic language/style container 
            eref("Flow"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Paragraphs =======================================

        "p": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Headings =========================================

        /*
          There are six levels of headings from h1 (the most important),
          to h6 (the least important).
        */

        "h1 ": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        "h2": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        "h3": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        "h4": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        "h5": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),
        "h6": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Lists ============================================


        // Unordered list 

        "ul": element(
            sequence("(li)+"),
            {
                "attrs": null
            },
            {}
        ),

        // Ordered (numbered) list 

        "ol": element(
            sequence("(li)+"),
            {
                "attrs": null
            },
            {
                "type": attdef(sref("OlType"), implied()),
                "start": attdef(sref("Number"), implied()),
                // HTML 5 attributes 
                "reversed": attdef(choice({ "reversed": null }), implied()),
            }
        ),

        // list item 

        "li": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "value": attdef(sref("Number"), implied()),
            }
        ),

        // definition lists - dt for term, dd for its definition 

        "dl": element(
            sequence("(dt|dd)+"),
            {
                "attrs": null
            },
            {}
        ),

        "dt": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        "dd": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Address ==========================================

        // information on author 

        "address": element(
            sequence("(#PCDATA | %inline; | %misc.inline; | p)*"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Horizontal Rule ==================================

        "hr": element(
            empty(),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Preformatted Text ================================

        /*
         content is %Inline; excluding 
                "img|object|small|sub|sup"
        */

        "pre": element(
            eref("pre.content"),
            {
                "attrs": null
            },
            {}
        ),

        //=================== Block-like Quotes ================================

        "blockquote": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "cite": attdef(sref("URI"), implied()),
            }
        ),

        //=================== Inserted/Deleted Text ============================

        /*
          ins/del are allowed in block and inline content, but its
          inappropriate to include block content within an ins element
          occurring in inline content.
        */
        "ins": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "cite": attdef(sref("URI"), implied()),
                "datetime": attdef(sref("Datetime"), implied()),
            }
        ),

        "del": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "cite": attdef(sref("URI"), implied()),
                "datetime": attdef(sref("Datetime"), implied()),
            }
        ),

        //================== The Anchor Element ================================

        // content is %Inline; except that anchors shouldn't be nested 

        "a": element(
            eref("a.content"),
            {
                "attrs": null,
                "focus": null,
            },
            {
                "href": attdef(sref("URI"), implied()),
                "hreflang": attdef(sref("LanguageCode"), implied()),
                "rel": attdef(sref("LinkTypes"), implied()),
                "target": attdef(sref("FrameTarget"), implied()),
                // HTML 5 attributes 
                "media": attdef(CDATA(), implied()),
                "ping": attdef(sref("URI"), implied()),
                "type": attdef(sref("ContentType"), implied()),
            }
        ),

        //===================== Inline Elements ================================

        "span": element( // generic language/style container 
            eref("Inline"),
            {
                "attrs": null
            },
            {}
        ),

        "bdo": element( // I18N BiDi over-ride
            eref("Inline"),
            {
                "coreattrs": null,
                "html5attrs": null,
                "events": null,
            },
            {
                "lang": attdef(sref("LanguageCode"), implied()),
                "xml:lang": attdef(sref("LanguageCode"), implied()),
                "dir": attdef(choice({
                    "ltr": null,
                    "rtl": null,

                }), required()),
            }
        ),

        "br": element( // forced line break 
            empty(),
            {

                "coreattrs": null,
                "html5attrs": null,
            },
            {
            }
        ),

        "em": element( // emphasis
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "strong": element( // strong emphasis
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "dfn": element( // definitional
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "code": element( // program code
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "samp": element( // sample
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "kbd": element( // something user would type
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "var": element( // variable
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "cite": element( // citation
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "abbr": element(// abbreviation
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "q": element( // inlined quote
            eref("Inline"),
            { "attrs": null },
            {
                "cite": attdef(sref("URI"), implied()),
            }
        ),

        "sub": element( // subscript
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "sup": element( // superscript
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "i": element( // italic font
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "b": element( // bold font
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        "small": element( // smaller font
            eref("Inline"),
            { "attrs": null },
            {}
        ),

        //==================== Object ======================================
        /*
          object is used to embed objects as part of HTML pages.
          param elements should precede other content. Parameters
          can also be expressed as attribute/value pairs on the
          object element itself when brevity is desired.
        */

        "object": element(
            sequence("(#PCDATA | param | %block; | form | %inline; | %misc;)*"),
            {
                "attrs": null,
                "html5mediaevents": null
            },
            {
                "data": attdef(sref("URI"), implied()),
                "type": attdef(sref("ContentType"), implied()),
                "height": attdef(sref("Length"), implied()),
                "width": attdef(sref("Length"), implied()),
                "usemap": attdef(sref("URI"), implied()),
                "name": attdef(NMTOKEN(), implied()),
                "tabindex": attdef(sref("Number"), implied()),
                // HTML 5 attributes 
                "form": attdef(CDATA(), implied()),
            }
        ),

        /*
          param is used to supply a named property value.
          In XML it would seem natural to follow RDF and support an
          abbreviated syntax where the param elements are replaced
          by attribute value pairs on the object start tag.
        */
        "param": element(
            empty(),
            {},
            {
                "id": attdef(ID(), implied()),
                "name": attdef(CDATA(), required()),
                "value": attdef(CDATA(), implied()),
            }
        ),

        //=================== Images ===========================================

        /*
           To avoid accessibility problems for people who aren't
           able to see the image, you should provide a text
           description using the alt and longdesc attributes.
           In addition, avoid the use of server-side image maps.
        */

        "img": element(
            empty(),
            {
                "attrs": null,
                "html5mediaevents": null
            },
            {
                "src": attdef(sref("URI"), required()),
                "alt": attdef(sref("Text"), required()),
                "name": attdef(NMTOKEN(), implied()),
                "longdesc": attdef(sref("URI"), implied()),
                "height": attdef(sref("Length"), implied()),
                "width": attdef(sref("Length"), implied()),
                "usemap": attdef(sref("URI"), implied()),
                "ismap": attdef(choice({ "ismap": null }), implied()),
            }
        ),

        /* usemap points to a map element which may be in this document
          or an external document, although the latter is not widely supported */

        //================== Client-side image maps ============================

        /* These can be placed in the same document or grouped in a
             separate document although this isn't yet widely supported */

        "map": element(
            sequence("((%block; | form | %misc;)+ | area+)"),
            {
                "i18n": null,
                "events": null,
            },
            {
                "id": attdef(ID(), required()),
                "class": attdef(CDATA(), implied()),
                "style": attdef(sref("StyleSheet"), implied()),
                "title": attdef(sref("Text"), implied()),
                "name": attdef(CDATA(), implied()),
            }
        ),

        "area": element(
            empty(),
            {
                "attrs": null,
                "focus": null,
            },
            {
                "shape": attdef(sref("Shape"), default_("rect")),
                "coords": attdef(sref("Coords"), implied()),
                "href": attdef(sref("URI"), implied()),
                "alt": attdef(sref("Text"), required()),
                "target": attdef(sref("FrameTarget"), implied()),
                // HTML 5 attributes 
                "hreflang": attdef(sref("LanguageCode"), implied()),
                "media": attdef(CDATA(), implied()),
                "ping": attdef(sref("URI"), implied()),
                "rel": attdef(sref("LinkTypes"), implied()),
                "type": attdef(CDATA(), implied()),
            }
        ),

        //================ Forms ===============================================

        "form": element(
            eref("form.content"), // forms shouldn't be nested 
            {
                "attrs": null,
            },
            {
                "action": attdef(sref("URI"), required()),
                "method": attdef(choice({
                    "get": null,
                    "post": null,

                }), default_("get")),
                "name": attdef(NMTOKEN(), implied()),
                "enctype": attdef(sref("ContentType"), default_("application/x-www-form-urlencoded")),
                "onsubmit": attdef(sref("Script"), implied()),
                "accept-charset": attdef(sref("Charset"), implied()),
                "target": attdef(sref("FrameTarget"), implied()),
                //HTML 5 Attributes 
                "autocomplete": attdef(choice({
                    "on": null,
                    "off": null,

                }), implied()),
                "novalidate": attdef(CDATA(), implied()),
                //HTML 5 Form Events
                //  Applies to all HTML 5 elements, but is most common in form elements:
                "oncontextmenu": attdef(sref("Script"), implied()),
                "onformchange": attdef(sref("Script"), implied()),
                "onforminput": attdef(sref("Script"), implied()),
                /* WHY IS THIS DUPLICATED
                "onforminput": attdef(sref("Script"), implied()),
                */
                "oninput": attdef(sref("Script"), implied()),
                /* WHY IS THIS DUPLICATED
                "onforminput": attdef(sref("Script"), implied()),
                */
                "oninvalid": attdef(sref("Script"), implied()),
            }
        ),

        /*
          Each label must not contain more than ONE field
          Label elements shouldn't be nested.
        */
        "label": element(
            eref("Inline"),
            {
                "attrs": null
            },
            {
                "for": attdef(IDREF(), implied()),
                //HTML 5 attributes 
                "form": attdef(CDATA(), implied()),
            }
        ),

        // the name attribute is required for all but submit & reset 

        "input": element( // form control 
            empty(),
            {
                "attrs": null,
                "focus": null,
            },
            {
                "type": attdef(sref("InputType"), ref("text")),
                "name": attdef(CDATA(), implied()),
                "value": attdef(CDATA(), implied()),
                "checked": attdef(choice({ "checked": null }), implied()),
                "disabled": attdef(choice({ "disabled": null }), implied()),
                "readonly": attdef(choice({ "readonly": null }), implied()),
                "maxlength": attdef(sref("Number"), implied()),
                "src": attdef(sref("URI"), implied()),
                "alt": attdef(CDATA(), implied()),
                "usemap": attdef(sref("URI"), implied()),
                "onselect": attdef(sref("Script"), implied()),
                "onchange": attdef(sref("Script"), implied()),
                "accept": attdef(sref("ContentTypes"), implied()),
                // HTML 5 attributes 
                "autocomplete": attdef(choice({
                    "on": null,
                    "off": null,
                    "name": null,
                    "honorific-prefix": null,
                    "given-name": null,
                    "additional-name": null,
                    "family-name": null,
                    "honorific-suffix": null,
                    "nickname": null,
                    "email": null,
                    "username": null,
                    "new-password": null,
                    "current-password": null,
                    "organization-title": null,
                    "organization": null,
                    "street-address": null,
                    "address-line1": null,
                    "address-line2": null,
                    "address-line3": null,
                    "address-level4": null,
                    "address-level3": null,
                    "address-level2": null,
                    "address-level1": null,
                    "country": null,
                    "country-name": null,
                    "postal-code": null,
                    "cc-name": null,
                    "cc-given-name": null,
                    "cc-additional-name": null,
                    "cc-family-name": null,
                    "cc-number": null,
                    "cc-exp": null,
                    "cc-exp-month": null,
                    "cc-exp-year": null,
                    "cc-csc": null,
                    "cc-type": null,
                    "transaction-currency": null,
                    "transaction-amount": null,
                    "language": null,
                    "bday": null,
                    "bday-day": null,
                    "bday-month": null,
                    "bday-year": null,
                    "sex": null,
                    "tel": null,
                    "tel-country-code": null,
                    "tel-national": null,
                    "tel-area-code": null,
                    "tel-local": null,
                    "tel-extension": null,
                    "impp": null,
                    "url": null,
                    "photo": null,

                }), implied()),
                "autofocus": attdef(CDATA(), implied()),
                "form": attdef(CDATA(), implied()),
                "formaction": attdef(sref("URI"), implied()),
                "formemctype": attdef(choice({
                    "application/x-www-form-urlencoded": null,
                    "multipart/form-data": null,
                    "text/plain": null,

                }), implied()),
                "formmethod": attdef(choice({
                    "delete": null,
                    "get": null,
                    "post": null,
                    "put": null,

                }), implied()),
                "formvalidate": attdef(CDATA(), implied()),
                "formtarget": attdef(choice({
                    "_blank": null,
                    "_self": null,
                    "_parent": null,
                    "_top": null,

                }), implied()),
                "height": attdef(sref("Pixels"), implied()),
                "list": attdef(ID(), implied()),
                "max": attdef(sref("Number"), implied()),
                "min": attdef(sref("Number"), implied()),
                "multiple": attdef(CDATA(), implied()),
                "pattern": attdef(CDATA(), implied()),
                "placeholder": attdef(CDATA(), implied()),
                "required": attdef(CDATA(), implied()),
                "step": attdef(sref("Number"), implied()),
                "width": attdef(sref("Pixels"), implied()),
            }
        ),

        "select": element(
            sequence("(optgroup|option)+"), // option selector 
            {
                "attrs": null,
            },
            {
                "name": attdef(CDATA(), implied()),
                "multiple": attdef(choice({ "multiple": null }), implied()),
                "disabled": attdef(choice({ "disabled": null }), implied()),
                "tabindex": attdef(sref("Number"), implied()),
                "onfocus": attdef(sref("Script"), implied()),
                "onblur": attdef(sref("Script"), implied()),
                "onchange": attdef(sref("Script"), implied()),
                // HTML 5 attributes 
                "autofocus": attdef(choice({ "autofocus": null }), implied()),
                "form": attdef(CDATA(), implied()),
            }
        ),

        "optgroup": element(
            sequence("(option)+"), // option group 
            {
                "attrs": null,
            },
            {
                "disabled": attdef(choice({ "disabled": null }), implied()),
                "label": attdef(sref("Text"), required()),
            }
        ),

        "option": element(
            sequence("(#PCDATA)"), // selectable choice 
            {
                "attrs": null,
            },
            {
                "selected": attdef(choice({ "selected": null }), implied()),
                "disabled": attdef(choice({ "disabled": null }), implied()),
                "label": attdef(sref("Text"), implied()),
                "value": attdef(CDATA(), implied()),
            }
        ),

        "textarea": element(
            sequence("(#PCDATA)"), // multi-line text field 
            {
                "attrs": null,
                "focus": null,
            },
            {
                "name": attdef(CDATA(), implied()),
                "rows": attdef(sref("Number"), required()),
                "cols": attdef(sref("Number"), required()),
                "disabled": attdef(choice({ "disabled": null }), implied()),
                "readonly": attdef(choice({ "readonly": null }), implied()),
                "onselect": attdef(sref("Script"), implied()),
                "onchange": attdef(sref("Script"), implied()),
                // HTML 5 attributes 
                "autofocus": attdef(CDATA(), implied()),
                /* WHY IS THIS DUPLICATED
                "cols": attdef(sref("Number"), implied()),
                */
                "form": attdef(CDATA(), implied()),
                "maxlength": attdef(sref("Number"), implied()),
                "placeholder": attdef(CDATA(), implied()),
                "required": attdef(CDATA(), implied()),
                "wrap": attdef(choice({
                    "hard": null,
                    "soft": null,

                }), default_("soft")),
            }
        ),

        /*
          The fieldset element is used to group form fields.
          Only one legend element should occur in the content
          and if present should only be preceded by whitespace.
        */
        "fieldset": element(
            sequence("(#PCDATA | legend | %block; | form | %inline; | %misc;)*"),
            {
                "attrs": null,
            },
            {
                // HTML 5 attributes 
                "disabled": attdef(CDATA(), implied()),
                "form": attdef(CDATA(), implied()),
                "name": attdef(CDATA(), implied()),
            }
        ),

        "legend": element( // fieldset label
            eref("Inline"),
            {
                "attrs": null,
            },
            {
                "accesskey": attdef(sref("Character"), implied()),
            }
        ),

        /*
         Content is %Flow; excluding a, form, form controls, iframe
        */
        "button": element( // push button
            eref("button.content"),
            {
                "attrs": null,
                "focus": null,
            },
            {
                "name": attdef(CDATA(), implied()),
                "value": attdef(CDATA(), implied()),
                "type": attdef(choice({
                    "button": null,
                    "submit": null,
                    "reset": null,

                }), default_("submit")),
                "disabled": attdef(choice({ "disabled": null }), implied()),
                // HTML 5 attributes 
                "autofocus": attdef(CDATA(), implied()),
                "form": attdef(CDATA(), implied()),
                "formaction": attdef(sref("URI"), implied()),
                "formemctype": attdef(choice({
                    "application/x-www-form-urlencoded": null,
                    "multipart/form-data": null,
                    "text/plain": null,
                }), implied()),
                "formmethod": attdef(choice({
                    "delete": null,
                    "get": null,
                    "post": null,
                    "put": null,
                }), implied()),
                "formvalidate": attdef(CDATA(), implied()),
                "formtarget": attdef(choice({
                    "blank": null,
                    "_self": null,
                    "_parent": null,
                    "_top": null,
                }), implied()),
            }
        ),

        //======================= Tables =======================================

        // Derived from IETF HTML table standard, see [RFC1942} 

        "table": element(
            sequence("(caption?, (col*|colgroup*), thead?, tfoot?, (tbody+|tr+))"),
            {
                "attrs": null,
            },
            {
                "summary": attdef(sref("Text"), implied()),
            }
        ),
        "caption": element(
            eref("Inline"),
            {
                "attrs": null,
            },
            {}
        ),

        /*
            Use thead to duplicate headers when breaking table
            across page boundaries, or for static headers when
            tbody sections are rendered in scrolling panel.
    
            Use tfoot to duplicate footers when breaking table
            across page boundaries, or for static footers when
            tbody sections are rendered in scrolling panel.
    
            Use multiple tbody sections when rules are needed
            between groups of table rows.
        */
        "thead": element(
            sequence("(tr)+"),
            {
                "attrs": null
            },
            {}
        ),
        "tfoot": element(
            sequence("(tr)+"),
            {
                "attrs": null
            },
            {}
        ),
        "tbody": element(
            sequence("(tr)+"),
            {
                "attrs": null
            },
            {}
        ),
        /*
        colgroup groups a set of col elements. It allows you to group
        several semantically related columns together.
        */
        "colgroup": element(
            sequence("(col)*"),
            {
                "attrs": null
            },
            {
                "span": attdef(sref("Number"), default_("1")),
            }
        ),

        /*
         col elements define the alignment properties for cells in
         one or more columns.
    
         The span attribute causes the attributes of one
         col element to apply to more than one column.
        */
        "col": element(
            empty(),
            {
                "attrs": null
            },
            {
                "span": attdef(sref("Number"), default_("1")),
            }
        ),

        "tr": element(
            sequence("(th|td)+"),
            {
                "attrs": null
            },
            {
            }
        ),
        //th is for headers, td for data and for cells acting as both 
        "th": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "colspan": attdef(sref("Number"), default_("1")),

                "headers": attdef(IDREFS(), implied()),
                "rowspan": attdef(sref("Number"), default_("1")),
                "scope": attdef(sref("Scope"), implied()),
            }
        ),
        "td": element(
            eref("Flow"),
            {
                "attrs": null
            },
            {
                "colspan": attdef(sref("Number"), default_("1")),
                "headers": attdef(IDREFS(), implied()),
                "rowspan": attdef(sref("Number"), default_("1")),
            }
        ),

        //======================= HTML 5 new elements ===========================

        // HTML 5 sections 

        "article": element(
            sequence("(#PCDATA)"),
            {
                "attrs": null,
            },
            {
                "cite": attdef(sref("URI"), implied()),
                "pubdate": attdef(sref("Date"), implied()),
            }
        ),

        "aside": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "dialog": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "figcaption": element(
            empty(),
            { "attrs": null },
            {}
        ),

        "figure": element(
            sequence("(#PCDATA | figcaption)"),
            { "attrs": null },
            {}
        ),

        "footer": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "header": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "hgroup": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "main": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "nav": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "section": element(
            sequence("(#PCDATA)"),
            {
                "attrs": null,
            },
            {
                "cite": attdef(sref("URI"), implied()),
            }
        ),

        "summary": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),


        // HTML 5 media controls 

        "audio": element(
            empty(),
            {
                "attrs": null,
                "html5mediaevents": null,

            },
            {
                "autoplay": attdef(CDATA(), implied()),
                "controls": attdef(CDATA(), implied()),
                "preload": attdef(CDATA(), implied()),
                "src": attdef(sref("URI"), implied()),
            }
        ),

        "source": element(
            empty(),
            {
                "attrs": null,
                "html5mediaevents": null,
            },
            {
                "media": attdef(CDATA(), implied()),
                "src": attdef(sref("URI"), implied()),
                "type": attdef(sref("Number"), implied()),
            }
        ),

        "video": element(
            empty(),
            {
                "attrs": null,
                "html5mediaevents": null,
            },
            {
                "autoplay": attdef(CDATA(), implied()),
                "controls": attdef(CDATA(), implied()),
                "height": attdef(sref("Pixels"), implied()),
                "loop": attdef(CDATA(), implied()),
                "preload": attdef(CDATA(), implied()),
                "src": attdef(sref("URI"), implied()),
                "width": attdef(sref("Pixels"), implied()),
            }
        ),

        "embed": element(
            empty(),
            {
                "attrs": null,
                "html5mediaevents": null,

            },
            {
                "height": attdef(sref("Pixels"), implied()),
                "src": attdef(sref("URI"), implied()),
                "type": attdef(CDATA(), implied()),
                "width": attdef(sref("Pixels"), implied()),
            }
        ),

        "canvas": element(
            empty(),
            {
                "attrs": null,
            },
            {
                "height": attdef(sref("Pixels"), implied()),
                "width": attdef(sref("Pixels"), implied()),
            }
        ),


        // HTML 5 form input controls 

        "datetime": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "datetime-local": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "date": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "month": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "week": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "time": element(
            sequence("(#PCDATA)"),
            {
                "attrs": null,
            },
            {
                "datetime": attdef(sref("Date"), implied()),
            }
        ),

        "number": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "range": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "email": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "url": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        // HTML 5 miscellaneous 

        "keygen": element(
            empty(),
            { "attrs": null },
            {
                "autofocus": attdef(choice({ "disabled": null }), implied()),
                "challenge": attdef(CDATA(), implied()),
                "disabled": attdef(CDATA(), implied()),
                "form": attdef(CDATA(), implied()),
                "keytype": attdef(choice({ "rsa": null }), implied()),
                "name": attdef(CDATA(), implied()),
            }
        ),

        "mark": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "meter": element(
            empty(),
            { "attrs": null },
            {
                "high": attdef(sref("Number"), implied()),
                "low": attdef(sref("Number"), implied()),
                "max": attdef(sref("Number"), default_("1")),
                "min": attdef(sref("Number"), default_("0")),
                "optimum": attdef(sref("Number"), implied()),
                "value": attdef(sref("Number"), implied()),
            }
        ),

        "menu": element(
            sequence("(#PCDATA | command)"),
            {
                "attrs": null
            },
            {
                "label": attdef(CDATA(), implied()),
                "type": attdef(choice({
                    "context": null,
                    "toolbar": null,
                    "list": null,

                }), default_("list")),

            }
        ),


        "command": element(
            empty(),
            {
                "attrs": null
            },
            {
                "checked": attdef(CDATA(), implied()),
                "disabled": attdef(CDATA(), implied()),
                "icon": attdef(sref("URI"), implied()),
                "label": attdef(CDATA(), implied()),
                "radiogroup": attdef(CDATA(), implied()),
                "type": attdef(choice({
                    "checkbox": null,
                    "command": null,
                    "radio": null,

                }), default_("command")),
            }
        ),

        "datagrid": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "datalist": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {},
        ),

        "details": element(
            sequence("(#PCDATA)"),
            {
                "attrs": null
            },
            {
                "open": attdef(CDATA(), implied()),
            }
        ),

        "datatemplate": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "rule": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "nest": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),

        "event-source": element(
            sequence("(#PCDATA)"),
            {
                "attrs": null
            },
            {}
        ),

        "output": element(
            empty(),
            {
                "attrs": null
            },
            {
                "for": attdef(ID(), implied()),
                "form": attdef(CDATA(), implied()),
                "name": attdef(CDATA(), implied()),
            }
        ),

        "progress": element(
            sequence("(#PCDATA)"),
            {
                "attrs": null
            },
            {
                "max": attdef(sref("Number"), implied()),
                "value": attdef(sref("Number"), implied()),
            }
        ),
        "ruby": element(
            sequence("(rt+|rp+)"),
            { "attrs": null },
            {}
        ),
        "rt": element(
            sequence("(#PCDATA | rp)"),
            { "attrs": null },
            {}
        ),
        "rp": element(
            sequence("(#PCDATA)"),
            { "attrs": null },
            {}
        ),
    }
}