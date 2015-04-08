/**
 * Full HTML5 compatibility rule set
 * Loosened and extended ruleset. Allows more freedom on user side
 * These rules define which tags and CSS classes are supported and which tags should be specially treated.
 */

var wysihtml5ParserRulesDefaults = {
    "blockLevelEl": {
        "keep_styles": {
            "textAlign": /^((left)|(right)|(center)|(justify))$/i,
            "float": 1
        },
        "add_style": {
            "align": "align_text"
        },
        "check_attributes": {
            "id": "any"
        }
    },

    "makeDiv": {
        "rename_tag": "div",
        "one_of_type": {
            "alignment_object": 1
        },
        "remove_action": "unwrap",
        "keep_styles": {
            "textAlign": 1,
            "float": 1
        },
        "add_style": {
            "align": "align_text"
        },
        "check_attributes": {
            "id": "any"
        }
    }
};

var wysihtml5ParserRules = {

    "type_definitions": {
        
        "alignment_object": {
            "styles": {
                "float": ["left", "right"],
                "text-align": ["left", "right", "center"]
            }
        },
        
        "valid_image_src": {
            "attrs": {
                "src": /^[^data\:]/i
            }
        },
        
        "text_color_object": {
          "styles": {
            "color": true,
            "background-color": true
          }
        },
        
        "text_fontsize_object": {
          "styles": {
            "font-size": true
          }
        }
        
    },
    
    /**
     * Tag list
     *
     * The following options are available:
     *
     *    - add_class:        converts and deletes the given HTML4 attribute (align, clear, ...) via the given method to a css class
     *                        The following methods are implemented in wysihtml5.dom.parse:
     *                          - align_text:  converts align attribute values (right/left/center/justify) to their corresponding css class "wysiwyg-text-align-*")
     *                            <p align="center">foo</p> ... becomes ... <p> class="wysiwyg-text-align-center">foo</p>
     *                          - clear_br:    converts clear attribute values left/right/all/both to their corresponding css class "wysiwyg-clear-*"
     *                            <br clear="all"> ... becomes ... <br class="wysiwyg-clear-both">
     *                          - align_img:    converts align attribute values (right/left) on <img> to their corresponding css class "wysiwyg-float-*"
     *                          
     *    - remove:             removes the element and its content
     *
     *    - unwrap              removes element but leaves content
     *
     *    - rename_tag:         renames the element to the given tag
     *
     *    - set_class:          adds the given class to the element (note: make sure that the class is in the "classes" white list above)
     *
     *    - set_attributes:     sets/overrides the given attributes
     *
     *    - check_attributes:   checks the given HTML attribute via the given method
     *                            - url:            allows only valid urls (starting with http:// or https://)
     *                            - src:            allows something like "/foobar.jpg", "http://google.com", ...
     *                            - href:           allows something like "mailto:bert@foo.com", "http://google.com", "/foobar.jpg"
     *                            - alt:            strips unwanted characters. if the attribute is not set, then it gets set (to ensure valid and compatible HTML)
     *                            - numbers:        ensures that the attribute only contains numeric (integer) characters (no float values or units)
     *                            - dimension:      for with/height attributes where floating point numbrs and percentages are allowed
     *                            - any:            allows anything to pass 
     */
    "tags": {
        "tr": {
            "add_style": {
                "align": "align_text"
            },
            "check_attributes": {
                "id": "any"
            }
        },
        "strike": {
            "unwrap": 1
        },
        "form": {
            "unwrap": 1
        },
        "rt": {
            "rename_tag": "span"
        },
        "code": {},
        "acronym": {
            "rename_tag": "span"
        },
        "br": {
            "add_class": {
                "clear": "clear_br"
            }
        },
        "details": {
            "unwrap": 1
        },
        "h4": wysihtml5ParserRulesDefaults.blockLevelEl,
        "em": {},
        "title": {
            "remove": 1
        },
        "multicol": {
            "unwrap": 1
        },
        "figure": {
            "unwrap": 1
        },
        "xmp": {
            "unwrap": 1
        },
        "small": {
            "rename_tag": "span",
            "set_class": "wysiwyg-font-size-smaller"
        },
        "area": {
            "remove": 1
        },
        "time": {
            "unwrap": 1
        },
        "dir": {
            "rename_tag": "ul"
        },
        "bdi": {
            "unwrap": 1
        },
        "command": {
            "unwrap": 1
        },
        "ul": {
            "check_attributes": {
                "id": "any"
            }
        },
        "progress": {
            "rename_tag": "span"
        },
        "dfn": {
            "unwrap": 1
        },
        "iframe": {
            "check_attributes": {
                "src": "any",
                "width": "any",
                "height": "any",
                "frameborder": "any",
                "style": "any",
                "id": "any"
            }
        },
        "figcaption": {
            "unwrap": 1
        },
        "a": {
            "check_attributes": {
                "href": "href", // if you compiled master manually then change this from 'url' to 'href'
                "rel": "any",
                "target": "any",
                "id": "any"
            }
        },
        "img": {
            "check_attributes": {
                "width": "dimension",
                "alt": "alt",
                "src": "any", // if you compiled master manually then change this from 'url' to 'src'
                "height": "dimension",
                "id": "any"
            },
            "add_class": {
                "align": "align_img"
            }
        },
        "rb": {
            "unwrap": 1
        },
        "footer": wysihtml5ParserRulesDefaults.makeDiv,
        "noframes": {
            "remove": 1
        },
        "abbr": {
            "unwrap": 1
        },
        "u": {},
        "bgsound": {
            "remove": 1
        },
        "sup": {},
        "address": {
            "unwrap": 1
        },
        "basefont": {
            "remove": 1
        },
        "nav": {
            "unwrap": 1
        },
        "h1": wysihtml5ParserRulesDefaults.blockLevelEl,
        "head": {
            "unwrap": 1
        },
        "tbody": wysihtml5ParserRulesDefaults.blockLevelEl,
        "dd": {
            "unwrap": 1
        },
        "s": {
            "unwrap": 1
        },
        "li": {},
        "td": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers",
                "valign": "any",
                "align": "any",
                "id": "any",
                "class": "any"
            },
            "keep_styles": {
                "backgroundColor": 1,
                "width": 1,
                "height": 1
            },
            "add_style": {
                "align": "align_text"
            }
        },
        "object": {
            "remove": 1
        },
        
        "div": {
            "one_of_type": {
                "alignment_object": 1
            },
            "remove_action": "unwrap",
            "keep_styles": {
                "background-color": 1,
				"textAlign": 1,
				"float": 1,
				"border": 1,
				"border-top": 1,
				"border-bottom": 1,
				"border-left": 1,
				"border-right": 1,
				"margin": 1,
				"margin-top": 1,
				"margin-bottom": 1,
				"margin-left": 1,
				"margin-right": 1,
				"padding": 1,
				"padding-top": 1,
				"padding-bottom": 1,
				"padding-left": 1,
				"padding-right": 1,
				"background": 1,
				"top": 1,
				"bottom": 1,
				"left": 1,
				"right": 1,
				"font-size": 1,
				"font-family": 1,
				"font-weight": 1,
				"height": 1,
				"width": 1,
				"clear": 1,
				"color": 1				
            },
            "add_style": {
                "align": "align_text"
            },
            "check_attributes": {
                "id": "any",
                "contenteditable": "any"
            }
        },
        
        "option": {
            "remove":1
        },
        "select": {
            "remove":1
        },
        "i": {},
        "track": {
            "remove": 1
        },
        "wbr": {
            "remove": 1
        },
        "fieldset": {
            "unwrap": 1
        },
        "big": {
            "rename_tag": "span",
            "set_class": "wysiwyg-font-size-larger"
        },
        "button": {
            "unwrap": 1
        },
        "noscript": {
            "remove": 1
        },
        "svg": {
            "remove": 1
        },
        "input": {
            "remove": 1
        },
        "table": {
            "keep_styles": {
                "width": 1,
                "textAlign": 1,
                "float": 1
            },
            "check_attributes": {
                "id": "any"
            }
        },
        "keygen": {
            "remove": 1
        },
        "h5": wysihtml5ParserRulesDefaults.blockLevelEl,
        "meta": {
            "remove": 1
        },
        "map": {
            "remove": 1
        },
        "isindex": {
            "remove": 1
        },
        "mark": {
            "unwrap": 1
        },
        "caption": wysihtml5ParserRulesDefaults.blockLevelEl,
        "tfoot": wysihtml5ParserRulesDefaults.blockLevelEl,
        "base": {
            "remove": 1
        },
        "video": {
            "remove": 1
        },
        "strong": {},
        "canvas": {
            "remove": 1
        },
        "output": {
            "unwrap": 1
        },
        "marquee": {
            "unwrap": 1
        },
        "b": {},
        "q": {
            "check_attributes": {
                "cite": "url",
                "id": "any"
            }
        },
        "applet": {
            "remove": 1
        },
        "span": {
            "one_of_type": {
                "text_color_object": 1,
                "text_fontsize_object": 1
            },
            "keep_styles": {
                "background-color": 1,
				"textAlign": 1,
				"float": 1,
				"border": 1,
				"border-top": 1,
				"border-bottom": 1,
				"border-left": 1,
				"border-right": 1,
				"margin": 1,
				"margin-top": 1,
				"margin-bottom": 1,
				"margin-left": 1,
				"margin-right": 1,
				"padding": 1,
				"padding-top": 1,
				"padding-bottom": 1,
				"padding-left": 1,
				"padding-right": 1,
				"background": 1,
				"top": 1,
				"bottom": 1,
				"left": 1,
				"right": 1,
				"font-size": 1,
				"font-family": 1,
				"font-weight": 1,
				"height": 1,
				"width": 1,
				"clear": 1,
				"color": 1
            },
            "remove_action": "unwrap",
            "check_attributes": {
                "id": "any"
            }
        },
        "rp": {
            "unwrap": 1
        },
        "spacer": {
            "remove": 1
        },
        "source": {
            "remove": 1
        },
        "aside": wysihtml5ParserRulesDefaults.makeDiv,
        "frame": {
            "remove": 1
        },
        "section": wysihtml5ParserRulesDefaults.makeDiv,
        "body": {
            "unwrap": 1
        },
        "ol": {},
        "nobr": {
            "unwrap": 1
        },
        "html": {
            "unwrap": 1
        },
        "summary": {
            "unwrap": 1
        },
        "var": {
            "unwrap": 1
        },
        "del": {
            "unwrap": 1
        },
        "blockquote": {
            "keep_styles": {
                "textAlign": 1,
                "float": 1
            },
            "add_style": {
                "align": "align_text"
            },
            "check_attributes": {
                "cite": "url",
                "id": "any"
            }
        },
        "style": {
            "remove": 1
        },
        "device": {
            "remove": 1
        },
        "meter": {
            "unwrap": 1
        },
        "h3": wysihtml5ParserRulesDefaults.blockLevelEl,
        "textarea": {
            "unwrap": 1
        },
        "embed": {
            "remove": 1
        },
        "hgroup": {
            "unwrap": 1
        },
        "font": {
            "rename_tag": "span",
            "add_class": {
                "size": "size_font"
            }
        },
        "tt": {
            "unwrap": 1
        },
        "noembed": {
            "remove": 1
        },
        "thead": {
            "add_style": {
                "align": "align_text"
            },
            "check_attributes": {
                "id": "any"
            }
        },
        "blink": {
            "unwrap": 1
        },
        "plaintext": {
            "unwrap": 1
        },
        "xml": {
            "remove": 1
        },
        "h6": wysihtml5ParserRulesDefaults.blockLevelEl,
        "param": {
            "remove": 1
        },
        "th": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers",
                "valign": "any",
                "align": "any",
                "id": "any"
            },
            "keep_styles": {
                "backgroundColor": 1,
                "width": 1,
                "height": 1
            },
            "add_style": {
                "align": "align_text"
            }
        },
        "legend": {
            "unwrap": 1
        },
        "hr": {},
        "label": {
            "unwrap": 1
        },
        "dl": {
            "unwrap": 1
        },
        "kbd": {
            "unwrap": 1
        },
        "listing": {
            "unwrap": 1
        },
        "dt": {
            "unwrap": 1
        },
        "nextid": {
            "remove": 1
        },
        "pre": {},
        "center": wysihtml5ParserRulesDefaults.makeDiv,
        "audio": {
            "remove": 1
        },
        "datalist": {
            "unwrap": 1
        },
        "samp": {
            "unwrap": 1
        },
        "col": {
            "remove": 1
        },
        "article": wysihtml5ParserRulesDefaults.makeDiv,
        "cite": {},
        "link": {
            "remove": 1
        },
        "script": {
            "remove": 1
        },
        "bdo": {
            "unwrap": 1
        },
        "menu": {
            "rename_tag": "ul"
        },
        "colgroup": {
            "remove": 1
        },
        "ruby": {
            "unwrap": 1
        },
        "h2": wysihtml5ParserRulesDefaults.blockLevelEl,
        "ins": {
            "unwrap": 1
        },
        "sub": {},
        "comment": {
            "remove": 1
        },
        "frameset": {
            "remove": 1
        },
        "optgroup": {
            "unwrap": 1
        },
        "header": wysihtml5ParserRulesDefaults.makeDiv
    }
};


(function() {
    // Paste cleanup rules universal for all rules (also applied to content copied from editor)
    var commonRules = wysihtml5.lang.object(wysihtml5ParserRules).clone(true);
    commonRules.comments    = false;
    commonRules.selectors   = { "a u": "unwrap"};
    commonRules.tags.style  = { "remove": 1 };
    commonRules.tags.script = { "remove": 1 };
    commonRules.tags.head = { "remove": 1 };
    
    // Paste cleanup for unindentified source
    var universalRules = wysihtml5.lang.object(commonRules).clone(true);
    universalRules.tags.div.one_of_type.alignment_object = 1;
    universalRules.tags.div.remove_action = "unwrap";
    universalRules.tags.div.check_attributes.style = false;
    universalRules.tags.div.keep_styles = {
        "textAlign": /^((left)|(right)|(center)|(justify))$/i,
        "float": 1
    };
    universalRules.tags.span.keep_styles = false;

    // Paste cleanup for MS Office
    // TODO: should be extended to stricter ruleset, as current set will probably not cover all Office bizarreness
    var msOfficeRules = wysihtml5.lang.object(universalRules).clone(true);
    msOfficeRules.classes = {};

    window.wysihtml5ParserPasteRulesets = [
        {
            condition: /<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument|class="OutlineElement|id="?docs\-internal\-guid\-/i,
            set: msOfficeRules
        },{
            condition: /<meta name="copied-from" content="wysihtml5">/i,
            set: commonRules
        },{
            set: universalRules
        }
    ];

})();