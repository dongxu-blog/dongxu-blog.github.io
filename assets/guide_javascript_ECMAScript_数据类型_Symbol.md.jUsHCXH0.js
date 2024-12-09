import{_ as a,c as e,o as s,V as i}from"./chunks/framework.__fMkWnK.js";const y=JSON.parse('{"title":"Symbol","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/ECMAScript/数据类型/Symbol.md","filePath":"guide/javascript/ECMAScript/数据类型/Symbol.md","lastUpdated":1732283740000}'),l={name:"guide/javascript/ECMAScript/数据类型/Symbol.md"},t=i(`<h1 id="symbol" tabindex="-1">Symbol <a class="header-anchor" href="#symbol" aria-label="Permalink to &quot;Symbol&quot;">​</a></h1><p>ES6新增的数据类型。一种实例是唯一且不可改变的数据类型。</p><h2 id="符号的基本用法" tabindex="-1">符号的基本用法 <a class="header-anchor" href="#符号的基本用法" aria-label="Permalink to &quot;符号的基本用法&quot;">​</a></h2><p>符号需要使用 <code>Symbol()</code> 函数初始化。因为符号本身是原始类型，所以 <code>typeof</code> 操作符对符号返回 <code>symbol</code>。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sym </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sym); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// symbol</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="使用全局符号注册表" tabindex="-1">使用全局符号注册表 <a class="header-anchor" href="#使用全局符号注册表" aria-label="Permalink to &quot;使用全局符号注册表&quot;">​</a></h2><h2 id="使用符号作为属性" tabindex="-1">使用符号作为属性 <a class="header-anchor" href="#使用符号作为属性" aria-label="Permalink to &quot;使用符号作为属性&quot;">​</a></h2><h2 id="常用内置符号" tabindex="-1">常用内置符号 <a class="header-anchor" href="#常用内置符号" aria-label="Permalink to &quot;常用内置符号&quot;">​</a></h2><h2 id="symbol-asynciterator" tabindex="-1">Symbol.asyncIterator <a class="header-anchor" href="#symbol-asynciterator" aria-label="Permalink to &quot;Symbol.asyncIterator&quot;">​</a></h2><h2 id="symbol-hasinstance" tabindex="-1">Symbol.hasInstance <a class="header-anchor" href="#symbol-hasinstance" aria-label="Permalink to &quot;Symbol.hasInstance&quot;">​</a></h2><h2 id="symbol-isconcatspreadable" tabindex="-1">Symbol.isConcatSpreadable <a class="header-anchor" href="#symbol-isconcatspreadable" aria-label="Permalink to &quot;Symbol.isConcatSpreadable&quot;">​</a></h2><h2 id="symbol-iterator" tabindex="-1">Symbol.iterator <a class="header-anchor" href="#symbol-iterator" aria-label="Permalink to &quot;Symbol.iterator&quot;">​</a></h2><h2 id="symbol-match" tabindex="-1">Symbol.match <a class="header-anchor" href="#symbol-match" aria-label="Permalink to &quot;Symbol.match&quot;">​</a></h2><h2 id="symbol-replace" tabindex="-1">Symbol.replace <a class="header-anchor" href="#symbol-replace" aria-label="Permalink to &quot;Symbol.replace&quot;">​</a></h2><h2 id="symbol-search" tabindex="-1">Symbol.search <a class="header-anchor" href="#symbol-search" aria-label="Permalink to &quot;Symbol.search&quot;">​</a></h2><h2 id="symbol-species" tabindex="-1">Symbol.species <a class="header-anchor" href="#symbol-species" aria-label="Permalink to &quot;Symbol.species&quot;">​</a></h2><h2 id="symbol-split" tabindex="-1">Symbol.split <a class="header-anchor" href="#symbol-split" aria-label="Permalink to &quot;Symbol.split&quot;">​</a></h2><h2 id="symbol-toprimitive" tabindex="-1">Symbol.toPrimitive <a class="header-anchor" href="#symbol-toprimitive" aria-label="Permalink to &quot;Symbol.toPrimitive&quot;">​</a></h2><h2 id="symbol-tostringtag" tabindex="-1">Symbol.toStringTag <a class="header-anchor" href="#symbol-tostringtag" aria-label="Permalink to &quot;Symbol.toStringTag&quot;">​</a></h2><h2 id="symbol-unscopables" tabindex="-1">Symbol.unscopables <a class="header-anchor" href="#symbol-unscopables" aria-label="Permalink to &quot;Symbol.unscopables&quot;">​</a></h2>`,20),o=[t];function r(h,n,b,c,m,d){return s(),e("div",null,o)}const u=a(l,[["render",r]]);export{y as __pageData,u as default};
