!function(){function t(t){test.mode(t,e,Array.prototype.slice.call(arguments,1))}function a(t){test.mode(t,r,Array.prototype.slice.call(arguments,1))}var e=CodeMirror.getMode({indentUnit:2},"jsx");t("selfclose","[keyword var] [def x] [operator =] [bracket&tag <] [tag foo] [bracket&tag />] [operator +] [number 1];"),t("openclose","([bracket&tag <][tag foo][bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),t("openclosefragment","([bracket&tag <><][tag foo][bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag ></>][operator ++])"),t("attr","([bracket&tag <][tag foo] [attribute abc]=[string 'value'][bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),t("braced_attr","([bracket&tag <][tag foo] [attribute abc]={[number 10]}[bracket&tag >]hello [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),t("braced_text","([bracket&tag <][tag foo][bracket&tag >]hello {[number 10]} [atom &amp;][bracket&tag </][tag foo][bracket&tag >][operator ++])"),t("nested_tag","([bracket&tag <][tag foo][bracket&tag ><][tag bar][bracket&tag ></][tag bar][bracket&tag ></][tag foo][bracket&tag >][operator ++])"),t("nested_jsx","[keyword return] (","  [bracket&tag <][tag foo][bracket&tag >]","    say {[number 1] [operator +] [bracket&tag <][tag bar] [attribute attr]={[number 10]}[bracket&tag />]}!","  [bracket&tag </][tag foo][bracket&tag >][operator ++]",")"),t("preserve_js_context","[variable x] [operator =] [string-2 `quasi${][bracket&tag <][tag foo][bracket&tag />][string-2 }quoted`]"),t("string_interpolation","[variable x] [operator =] [string-2 `quasi<code>${] [number 10] [string-2 }</code>`]"),t("line_comment","([bracket&tag <][tag foo] [comment // hello]","   [bracket&tag ></][tag foo][bracket&tag >][operator ++])"),t("line_comment_not_in_tag","([bracket&tag <][tag foo][bracket&tag >] // hello","  [bracket&tag </][tag foo][bracket&tag >][operator ++])"),t("block_comment","([bracket&tag <][tag foo] [comment /* hello]","[comment    line 2]","[comment    line 3 */] [bracket&tag ></][tag foo][bracket&tag >][operator ++])"),t("block_comment_not_in_tag","([bracket&tag <][tag foo][bracket&tag >]/* hello","    line 2","    line 3 */ [bracket&tag </][tag foo][bracket&tag >][operator ++])"),t("missing_attr","([bracket&tag <][tag foo] [attribute selected][bracket&tag />][operator ++])"),t("indent_js","([bracket&tag <][tag foo][bracket&tag >]","    [bracket&tag <][tag bar] [attribute baz]={[keyword function]() {","        [keyword return] [number 10]","      }}[bracket&tag />]","  [bracket&tag </][tag foo][bracket&tag >])"),t("spread","([bracket&tag <][tag foo] [attribute bar]={[meta ...][variable baz] [operator /][number 2]}[bracket&tag />])"),t("tag_attribute","([bracket&tag <][tag foo] [attribute bar]=[bracket&tag <][tag foo][bracket&tag />/>][operator ++])");var r=CodeMirror.getMode({indentUnit:2},"text/typescript-jsx");a("tsx_react_integration","[keyword interface] [def Props] {","  [property foo]: [type string];","}","[keyword class] [def MyComponent] [keyword extends] [type React].[type Component] [operator <] [type Props], [type any] [operator >] {","  [property render]() {","    [keyword return] [bracket&tag <][tag span][bracket&tag >]{[keyword this].[property props].[property foo]}[bracket&tag </][tag span][bracket&tag >]","  }","}",'[bracket&tag <][tag MyComponent] [attribute foo]=[string "bar"] [bracket&tag />]; [comment //ok]',"[bracket&tag <][tag MyComponent] [attribute foo]={[number 0]} [bracket&tag />]; [comment //error]")}();