!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("go",function(t){function n(e,t){var n=e.next();if('"'==n||"'"==n||"`"==n)return t.tokenize=r(n),t.tokenize(e,t);if(/[\d\.]/.test(n))return"."==n?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==n?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(n))return u=n,null;if("/"==n){if(e.eat("*"))return t.tokenize=i,i(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(d.test(n))return e.eatWhile(d),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var o=e.current();return f.propertyIsEnumerable(o)?(("case"==o||"default"==o)&&(u="case"),"keyword"):s.propertyIsEnumerable(o)?"atom":"variable"}function r(e){return function(t,r){for(var i,o=!1,a=!1;null!=(i=t.next());){if(i==e&&!o){a=!0;break}o=!o&&"`"!=e&&"\\"==i}return(a||!o&&"`"!=e)&&(r.tokenize=n),"string"}}function i(e,t){for(var r,i=!1;r=e.next();){if("/"==r&&i){t.tokenize=n;break}i="*"==r}return"comment"}function o(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function a(e,t,n){return e.context=new o(e.indented,t,n,null,e.context)}function c(e){if(e.context.prev){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}}var u,l=t.indentUnit,f={"break":!0,"case":!0,chan:!0,"const":!0,"continue":!0,"default":!0,defer:!0,"else":!0,fallthrough:!0,"for":!0,func:!0,go:!0,"goto":!0,"if":!0,"import":!0,"interface":!0,map:!0,"package":!0,range:!0,"return":!0,select:!0,struct:!0,"switch":!0,type:!0,"var":!0,bool:!0,"byte":!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,"int":!0,uint:!0,uintptr:!0,error:!0,rune:!0},s={"true":!0,"false":!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,"delete":!0,imag:!0,len:!0,make:!0,"new":!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},d=/[+\-*&^%:=<>!|\/]/;return{startState:function(e){return{tokenize:null,context:new o((e||0)-l,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context;if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"case"==r.type&&(r.type="}")),e.eatSpace())return null;u=null;var i=(t.tokenize||n)(e,t);return"comment"==i?i:(null==r.align&&(r.align=!0),"{"==u?a(t,e.column(),"}"):"["==u?a(t,e.column(),"]"):"("==u?a(t,e.column(),")"):"case"==u?r.type="case":"}"==u&&"}"==r.type?c(t):u==r.type&&c(t),t.startOfLine=!1,i)},indent:function(t,r){if(t.tokenize!=n&&null!=t.tokenize)return e.Pass;var i=t.context,o=r&&r.charAt(0);if("case"==i.type&&/^(?:case|default)\b/.test(r))return t.context.type="}",i.indented;var a=o==i.type;return i.align?i.column+(a?0:1):i.indented+(a?0:l)},electricChars:"{}):",closeBrackets:"()[]{}''\"\"``",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-go","go")});