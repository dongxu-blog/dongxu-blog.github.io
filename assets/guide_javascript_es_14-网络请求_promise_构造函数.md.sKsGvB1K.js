import{_ as s,c as i,o as a,V as e}from"./chunks/framework.__fMkWnK.js";const g=JSON.parse('{"title":"构造函数","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/14-网络请求/promise/构造函数.md","filePath":"guide/javascript/es/14-网络请求/promise/构造函数.md","lastUpdated":1732283740000}'),n={name:"guide/javascript/es/14-网络请求/promise/构造函数.md"},l=e(`<h1 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h1><p>它主要用于封装尚未支持 Promise 的基于回调的 API。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>语法：<code>new Promise(executor)</code></p><p>参数：executor函数（执行器）： <code>(resolve, reject) =&gt; {}</code></p><ul><li>resolve函数：内部定义成功时我们调用的函数</li><li>reject函数：内部定义失败时我们调用的函数</li></ul><p>返回值：当通过 <code>new</code> 关键字调用 <code>Promise</code> 构造函数时，它会返回一个 Promise 对象。</p><p>注意：</p><ol><li><p><code>Promise()</code> 只能通过 <code>new</code> 运算符来构造。如果尝试在没有使用 <code>new</code> 的情况下调用它，会抛出 <code>TypeError</code> 异常。</p></li><li><p>executor 会在 Promise 内部立即同步调用，异步操作在执行器中执行</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;111&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;222&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 执行结果</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 111</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 222</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ol></div>`,3),p=[l];function t(r,h,o,c,k,d){return a(),i("div",null,p)}const u=s(n,[["render",t]]);export{g as __pageData,u as default};
