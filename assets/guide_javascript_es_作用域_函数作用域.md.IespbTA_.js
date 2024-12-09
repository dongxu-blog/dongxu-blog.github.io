import{_ as s,c as i,o as a,V as n}from"./chunks/framework.__fMkWnK.js";const g=JSON.parse('{"title":"最小特权原则","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/作用域/函数作用域.md","filePath":"guide/javascript/es/作用域/函数作用域.md","lastUpdated":1732283740000}'),e={name:"guide/javascript/es/作用域/函数作用域.md"},l=n(`<p>函数作用域：属于这个函数的全部变量都可以在整个函数的范围内使用及复用。</p><p>函数是 JavaScript中最常见的作用域单元。本质上，声明在一个函数内部的变量或函数会在所处的作用域中“隐藏”起来，这是有意为之的良好软件的设计原则。</p><h1 id="最小特权原则" tabindex="-1">最小特权原则 <a class="header-anchor" href="#最小特权原则" aria-label="Permalink to &quot;最小特权原则&quot;">​</a></h1><p>最小授权或最小暴露原则</p><p>这个原则指在软件设计中，应该最小限度地暴露必要内容，而将其他内容都“隐藏”起来。</p><h2 id="函数声明和函数表达式" tabindex="-1">函数声明和函数表达式 <a class="header-anchor" href="#函数声明和函数表达式" aria-label="Permalink to &quot;函数声明和函数表达式&quot;">​</a></h2><p>区分函数声明和表达式：如果 function 是声明中的第一个词，那就就是一个函数声明，否则就是一个函数表达式。</p><p>函数声明和函数表达式之间最重要的区别就是它们的名称标识符将会绑定在何处。</p><h2 id="匿名和具名" tabindex="-1">匿名和具名 <a class="header-anchor" href="#匿名和具名" aria-label="Permalink to &quot;匿名和具名&quot;">​</a></h2><p>函数表达式可以是匿名的，而函数声明则不可以省略函数名。</p><p>匿名的缺点：</p><ol><li>匿名函数在栈追踪中不会显示有意义的函数名，使得调试很困难。</li><li>如果没有函数名，当函数需要引用自身时只能使用已经过期的 <code>arguments.callee</code> 引用</li><li>匿名函数省略了对于代码的可读性/可理解性很重要的函数名。</li></ol><h2 id="立即执行函数表达式" tabindex="-1">立即执行函数表达式 <a class="header-anchor" href="#立即执行函数表达式" aria-label="Permalink to &quot;立即执行函数表达式&quot;">​</a></h2><p>立即执行函数表达式（Immediately Invoked Function Expression，IIFE）</p><p>将函数包含在一对 <code>()</code> 内部，因此成为了一个表达式，通过在末尾加上另外一个 <code>()</code> 可以立即执行这个函数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IIFE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;IIFE&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>函数名对 IIFE 不是必须的，IIFE 最常见的用法就是使用一个匿名函数表达式。</p><blockquote><p>建议使用“具名”表达式，虽然并不常见，但是具有匿名表达式的所有优势，是值得推广的实践。</p></blockquote><p>相较于传统的IIFE形式，还有一种改进形式：将调用的 <code>()</code> 括号引入到包装的 <code>()</code> 括号中，两种形式在功能上是一致的。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IIFE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;IIFE&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>IIFE的进阶用法：</p><ol><li><p>把它们当作函数调用并传递参数进去。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IIFE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})(window)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>解决undefined标识符的默认值被错误覆盖导致的异常（不常见）。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将参数命名为undefined，但是在对应位置不传入任何参数，这样就保证代码块中的 undefined标识符 的值是真的 undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IIFE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>倒置代码的运行顺序。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IIFE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">def</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  def</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> def</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol>`,22),p=[l];function t(h,k,r,d,E,c){return a(),i("div",null,p)}const u=s(e,[["render",t]]);export{g as __pageData,u as default};
