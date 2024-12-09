import{_ as s,c as a,o as i,V as n}from"./chunks/framework.__fMkWnK.js";const o=JSON.parse('{"title":"XML","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/14-网络请求/ajax/xml简介.md","filePath":"guide/javascript/es/14-网络请求/ajax/xml简介.md","lastUpdated":1732283740000}'),e={name:"guide/javascript/es/14-网络请求/ajax/xml简介.md"},t=n(`<h1 id="xml" tabindex="-1">XML <a class="header-anchor" href="#xml" aria-label="Permalink to &quot;XML&quot;">​</a></h1><p>最开始Ajax进行数据交换的时候所使用的格式就是XML，服务器端给客户浏览器返回XML格式的字符串，前端js对拿到结果进行解析并把数据提取出来然后进行处理。</p><p>现在进行Ajax应用时使用的是JSON格式，JSON格式相对于XML格式更加简洁，而且数据转换也更加容易，可以借助一些JSON的API，快速将字符串转成js对象，灵活度要远胜于XML。</p><h2 id="xml简介" tabindex="-1">XML简介 <a class="header-anchor" href="#xml简介" aria-label="Permalink to &quot;XML简介&quot;">​</a></h2><p>XML可扩展标记语言</p><p>XML被设计用来传输和存储数据</p><p>XML和HTML类似，不同的是HTML中都是预定义标签，而XML中没有预定义标签，全部都是自定义标签，用来表示一些数据。</p><p>例如：用XML表示这个数据 <code>name=&quot;钢铁侠&quot;; age=30; gender=&quot;男&quot;;</code></p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;钢铁侠&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;30&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;男&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">gender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>现在已经被JSON取代了</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;钢铁侠&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;gender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;男&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11),l=[t];function p(h,k,r,d,E,c){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{o as __pageData,u as default};
