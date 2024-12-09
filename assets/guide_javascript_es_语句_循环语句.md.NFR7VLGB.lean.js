import{_ as h,E as e,c as t,m as s,a as i,J as n,w as l,V as p,o as k}from"./chunks/framework.__fMkWnK.js";const w=JSON.parse('{"title":"循环语句","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/语句/循环语句.md","filePath":"guide/javascript/es/语句/循环语句.md","lastUpdated":1732283740000}'),r={name:"guide/javascript/es/语句/循环语句.md"},d=s("h1",{id:"循环语句",tabindex:"-1"},[i("循环语句 "),s("a",{class:"header-anchor",href:"#循环语句","aria-label":'Permalink to "循环语句"'},"​")],-1),E=s("p",null,[i("所谓循环就是指"),s("strong",null,"某段代码被重复执行"),i("的过程。")],-1),g=s("p",null,"循环的本质就是以某个变量为起始值，然后不断产生变化量，慢慢靠近终止条件的过程。所以，循环需要具备三要素：",-1),c=s("ol",null,[s("li",null,"变量起始值"),s("li",null,"终止条件（没有终止条件，循环会一直执行，造成死循环）"),s("li",null,"变化量（用自增或者自减）")],-1),o=p("",52),y=s("code",null,"break",-1),b=s("li",null,[s("code",null,"continue"),i(" 也用于立即退出循环，但会再次从循环顶部开始执行。（结束本次循环，继续下次循环）")],-1),u=p("",10);function F(m,v,A,D,C,f){const a=e("font");return k(),t("div",null,[d,E,g,c,s("p",null,[i("注意："),n(a,{color:"red"},{default:l(()=>[i("循环内的弹窗有断点的效果")]),_:1}),i("。")]),o,s("ul",null,[s("li",null,[y,i(" 语句用于立即退出循环，强制执行循环后的下一条语句（"),n(a,{color:"red"},{default:l(()=>[i("循环体内 break后面的语句不再执行")]),_:1}),i("）。")]),b]),u,n(a,{color:"red"},{default:l(()=>[i("`with` 语句影响性能且难于调试其中的代码，通常不推荐在产品代码中使用 `with` 语句。")]),_:1})])}const j=h(r,[["render",F]]);export{w as __pageData,j as default};
