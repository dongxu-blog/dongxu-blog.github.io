import{_ as s,c as a,o as i,V as e}from"./chunks/framework.__fMkWnK.js";const E=JSON.parse('{"title":"引擎","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/7-作用域/引擎.md","filePath":"guide/javascript/es/7-作用域/引擎.md","lastUpdated":1732283740000}'),n={name:"guide/javascript/es/7-作用域/引擎.md"},t=e(`<h1 id="引擎" tabindex="-1">引擎 <a class="header-anchor" href="#引擎" aria-label="Permalink to &quot;引擎&quot;">​</a></h1><h2 id="查找变量" tabindex="-1">查找变量 <a class="header-anchor" href="#查找变量" aria-label="Permalink to &quot;查找变量&quot;">​</a></h2><h3 id="lhs" tabindex="-1">LHS <a class="header-anchor" href="#lhs" aria-label="Permalink to &quot;LHS&quot;">​</a></h3><blockquote><p>当变量出现在赋值操作的左侧时进行LHS查询</p><p>如果查找的目的是对变量进行赋值，那么就会使用LHS查询</p></blockquote><p>LHS查询是试图找到变量的容器本身，从而可以对其赋值</p><p>非严格模式下：LHS查询找不到目标变量，会自动隐式地在全局作用域中就会创建一个具有该名称的变量，并将其返回给引擎。</p><p>严格模式下：LHS查询找不到目标变量时，引擎会抛出ReferenceError异常。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dancy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.name);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="rhs" tabindex="-1">RHS： <a class="header-anchor" href="#rhs" aria-label="Permalink to &quot;RHS：&quot;">​</a></h3><blockquote><p>当变量出现在赋值操作的右侧时进行RHS查询</p><p>如果目的是获取变量的值，那么就会使用RHS查询。</p></blockquote><p>RHS查询与简单地查找某个变量的值别无二致，可以理解成取到它的原值，得到某某的值。</p><p>RHS查询找不到所需的变量，引擎会抛出ReferenceError异常。</p>`,12),l=[t];function p(r,h,o,c,d,k){return i(),a("div",null,l)}const _=s(n,[["render",p]]);export{E as __pageData,_ as default};
