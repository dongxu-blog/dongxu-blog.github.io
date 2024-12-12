import{_ as t,E as p,c as h,m as s,a as i,J as n,w as e,V as l,o as d}from"./chunks/framework.__fMkWnK.js";const q=JSON.parse('{"title":"文本属性","description":"","frontmatter":{},"headers":[],"relativePath":"guide/css/text.md","filePath":"guide/css/text.md","lastUpdated":1733754322000}'),r={name:"guide/css/text.md"},c=l(`<h1 id="文本属性" tabindex="-1">文本属性 <a class="header-anchor" href="#文本属性" aria-label="Permalink to &quot;文本属性&quot;">​</a></h1><h2 id="color-文本颜色" tabindex="-1">color 文本颜色 <a class="header-anchor" href="#color-文本颜色" aria-label="Permalink to &quot;color 文本颜色&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="details custom-block"><summary>color属性值</summary><ul><li>支持颜色名、<code>rgb</code>/<code>rgba</code>、<code>HEX</code>/<code>HEXA</code>（十六进制）、<code>HSL</code>/<code>HSLA</code>。</li><li>开发中常用的是：<code>rgb/rgba</code> 或 <code>HEX/HEXA</code>（十六进制）。</li></ul></details><h2 id="letter-spacing-字母间距" tabindex="-1">letter-spacing 字母间距 <a class="header-anchor" href="#letter-spacing-字母间距" aria-label="Permalink to &quot;letter-spacing 字母间距&quot;">​</a></h2><p>属性值为像素（px），正值增大间距，负值缩小间距。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  letter-spacing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 增加字母间距 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="word-spacing-单词间距" tabindex="-1">word-spacing 单词间距 <a class="header-anchor" href="#word-spacing-单词间距" aria-label="Permalink to &quot;word-spacing 单词间距&quot;">​</a></h2><p>单词间距通过空格识别，属性值同为像素（px）。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  word-spacing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 增加单词间距 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="text-decoration-文本修饰" tabindex="-1">text-decoration 文本修饰 <a class="header-anchor" href="#text-decoration-文本修饰" aria-label="Permalink to &quot;text-decoration 文本修饰&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-decoration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">overline</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> green</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dotted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 上划绿色虚线 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-decoration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">underline</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> red</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wavy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 下划红色波浪线 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-decoration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">line-through</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 删除线 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-decoration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 无装饰线 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><details class="details custom-block"><summary>text-decoration属性值</summary><ul><li><code>none</code> ：无装饰线（默认值）</li><li><code>underline</code> ：下划线 （链接a自带下划线）</li><li><code>overline</code> ：上划线</li><li><code>line-through</code> ：删除线</li></ul></details><h2 id="text-indent-文本缩进" tabindex="-1">text-indent 文本缩进 <a class="header-anchor" href="#text-indent-文本缩进" aria-label="Permalink to &quot;text-indent 文本缩进&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-indent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 文本首行缩进 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>单位：可以使用 <code>px</code> 单位，也可以使用 <code>em</code> 单位。正值向右缩进，负值向左缩进，通常与方向有关。</p><blockquote><p>em 是一个相对单位，就是当前元素（font-size) 1 个文字的大小，如果当前元素没有设置大小，则会按照父元素的 1 个文字大小。</p></blockquote></div><h2 id="text-align-文本对齐" tabindex="-1">text-align 文本对齐 <a class="header-anchor" href="#text-align-文本对齐" aria-label="Permalink to &quot;text-align 文本对齐&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 文本居中对齐 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="details custom-block"><summary>text-align属性值</summary><ul><li><code>left</code> ：靠左（默认值）</li><li><code>right</code> ：靠右</li><li><code>center</code> ：居中</li><li><code>justify</code> ：两端对齐</li></ul></details><h2 id="line-height-行间距" tabindex="-1">line-height 行间距 <a class="header-anchor" href="#line-height-行间距" aria-label="Permalink to &quot;line-height 行间距&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 行间距基于字体大小的倍数 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="details custom-block"><summary>line-height属性值</summary><ol><li>normal ：由浏览器根据文字大小决定的一个默认值。</li><li>像素（px）</li><li>数字：参考自身 <code>font-size</code> 的倍数（推荐）</li><li>百分比：参考自身 <code>font-size</code> 的百分比</li></ol><blockquote><p>由于字体设计原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响观感。</p></blockquote></details><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li><p>行高过小可能导致文字重叠，最小值为0，不能为负数。</p></li><li><p>行高可以继承，推荐使用数值以更好地呈现文字。</p></li><li><p>设置了<code>height</code>的元素，高度就是<code>height</code>的值；未设置时，高度为<code>line-height * 行数</code>。</p></li></ul></div><h2 id="vertical-align-垂直对齐方式" tabindex="-1">vertical-align 垂直对齐方式 <a class="header-anchor" href="#vertical-align-垂直对齐方式" aria-label="Permalink to &quot;vertical-align 垂直对齐方式&quot;">​</a></h2><p>用于同一行元素之间或表格单元格内文字的垂直对齐。</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  vertical-align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">middle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 垂直居中对齐 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,26),k={class:"details custom-block"},o=s("summary",null,"vertical-align属性值",-1),u=s("thead",null,[s("tr",null,[s("th",null,"属性值"),s("th",null,"说明")])],-1),E=s("tr",null,[s("td",null,"baseline"),s("td",null,"默认值，使元素的基线与父元素的基线对齐。")],-1),g=s("td",null,"top",-1),b=s("td",null,"middle",-1),m=s("td",null,"bottom",-1),y=s("ul",null,[s("li",null,"基线：浏览器文字类型元素排版中存在用于对齐的基线。"),s("li",null,"浏览器处理行内元素和行内块元素时，默认按照文字的特点去解析，基于基线对齐。"),s("li",null,[i("vertical-align用于处理"),s("strong",null,"行内块"),i("和文字对齐，或者行内块和行内块对齐，或转为块元素。")]),s("li",null,"多数用于图片和文字对齐。")],-1),v=l('<div class="warning custom-block"><p class="custom-block-title">解决的问题</p><ul><li>文本框和表单按钮对齐问题。</li><li><code>input</code>和<code>img</code>对齐问题。</li><li><code>div</code>中的文本框贴顶问题。</li><li><code>div</code>不设高度由<code>img</code>标签撑开时的间隙问题。</li><li>使用<code>line-height</code>让<code>img</code>标签垂直居中问题。</li></ul></div>',1);function C(_,F,x,A,D,f){const a=p("font");return d(),h("div",null,[c,s("details",k,[o,s("table",null,[u,s("tbody",null,[E,s("tr",null,[g,s("td",null,[i("使元素的"),n(a,{color:"red"},{default:e(()=>[i("顶部")]),_:1}),i("与其"),n(a,{color:"red"},{default:e(()=>[i("所在行的顶部")]),_:1}),i("对齐")])]),s("tr",null,[b,s("td",null,[i("使元素的"),n(a,{color:"red"},{default:e(()=>[i("中部")]),_:1}),i("与"),n(a,{color:"red"},{default:e(()=>[i("父元素的基线")]),_:1}),i("加上父元素"),n(a,{color:"red"},{default:e(()=>[i("字母x的一半")]),_:1}),i("对齐")])]),s("tr",null,[m,s("td",null,[i("使元素的"),n(a,{color:"red"},{default:e(()=>[i("底部")]),_:1}),i("与其"),n(a,{color:"red"},{default:e(()=>[i("所在行的底部")]),_:1}),i("对齐")])])])]),y]),v])}const w=t(r,[["render",C]]);export{q as __pageData,w as default};