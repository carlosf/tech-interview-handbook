(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3825],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5970:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"hash-table",title:"Hash Table"},l={unversionedId:"algorithms/hash-table",id:"algorithms/hash-table",isDocsHomePage:!1,title:"Hash Table",description:"Sample questions",source:"@site/../contents/algorithms/hash-table.md",sourceDirName:"algorithms",slug:"/algorithms/hash-table",permalink:"/tech-interview-handbook/algorithms/hash-table",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/hash-table.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"hash-table",title:"Hash Table"},sidebar:"docs",previous:{title:"Graph",permalink:"/tech-interview-handbook/algorithms/graph"},next:{title:"Heap",permalink:"/tech-interview-handbook/algorithms/heap"}},s=[{value:"Sample questions",id:"sample-questions",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"sample-questions"},"Sample questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Describe an implementation of a least-used cache, and big-O notation of it."),(0,i.kt)("li",{parentName:"ul"},"A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists."),(0,i.kt)("li",{parentName:"ul"},"Implement data structure ",(0,i.kt)("inlineCode",{parentName:"li"},"Map")," storing pairs of integers (key, value) and define following member functions in O(1) runtime: ",(0,i.kt)("inlineCode",{parentName:"li"},"void insert(key, value)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"void delete(key)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"int get(key)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"int getRandomKey()"),". ",(0,i.kt)("a",{parentName:"li",href:"http://blog.gainlo.co/index.php/2016/08/14/uber-interview-question-map-implementation/"},"(Solution)"))))}c.isMDXComponent=!0}}]);