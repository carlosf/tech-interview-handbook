(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1011],{2122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8283:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return m},toc:function(){return l},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={id:"dynamic-programming",title:"Dynamic Programming"},m={unversionedId:"algorithms/dynamic-programming",id:"algorithms/dynamic-programming",isDocsHomePage:!1,title:"Dynamic Programming",description:"Study links",source:"@site/../contents/algorithms/dynamic-programming.md",sourceDirName:"algorithms",slug:"/algorithms/dynamic-programming",permalink:"/tech-interview-handbook/algorithms/dynamic-programming",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/dynamic-programming.md",version:"current",lastUpdatedBy:"PranavPuranik",lastUpdatedAt:1577792576,formattedLastUpdatedAt:"12/31/2019",frontMatter:{id:"dynamic-programming",title:"Dynamic Programming"},sidebar:"docs",previous:{title:"Binary",permalink:"/tech-interview-handbook/algorithms/binary"},next:{title:"Geometry",permalink:"/tech-interview-handbook/algorithms/geometry"}},l=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"study-links"},"Study links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.freecodecamp.org/demystifying-dynamic-programming-3efafb8d4296"},"Demystifying Dynamic Programming")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/nikolaotasevic/dynamic-programming--7-steps-to-solve-any-dp-interview-problem-3870"},"Dynamic Programming \u2013 7 Steps to Solve any DP Interview Problem"))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"Dynamic Programming (DP) is usually used to solve optimization problems. The only way to get better at DP is to practice. It takes some amount of practice to be able to recognize that a problem can be solved by DP."),(0,a.kt)("p",null,"Sometimes you do not need to store the whole DP table in memory, the last two values or the last two rows of the matrix will suffice."),(0,a.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0/1 Knapsack"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/climbing-stairs/"},"Climbing Stairs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/coin-change/"},"Coin Change")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-increasing-subsequence/"},"Longest Increasing Subsequence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-common-subsequence/"},"Longest Common Subsequence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/word-break/"},"Word Break Problem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/combination-sum-iv/"},"Combination Sum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/house-robber/"},"House Robber")," and ",(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/house-robber-ii/"},"House Robber II")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/decode-ways/"},"Decode Ways")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/unique-paths/"},"Unique Paths")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/jump-game/"},"Jump Game"))))}s.isMDXComponent=!0}}]);