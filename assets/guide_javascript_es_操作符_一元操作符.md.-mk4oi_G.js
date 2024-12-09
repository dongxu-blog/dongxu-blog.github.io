import{_ as n,E as l,c as p,m as s,a as i,J as t,w as r,V as a,o as h}from"./chunks/framework.__fMkWnK.js";const v=JSON.parse('{"title":"一元运算符","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/操作符/一元操作符.md","filePath":"guide/javascript/es/操作符/一元操作符.md","lastUpdated":1732283740000}'),k={name:"guide/javascript/es/操作符/一元操作符.md"},d=a(`<h1 id="一元运算符" tabindex="-1">一元运算符 <a class="header-anchor" href="#一元运算符" aria-label="Permalink to &quot;一元运算符&quot;">​</a></h1><p>只操作一个值的操作符叫<strong>一元操作符</strong>（unary operator）。</p><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete" target="_blank" rel="noreferrer"><code>delete</code></a></p><p><code>delete</code> 运算符用来删除对象的属性。</p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void" target="_blank" rel="noreferrer"><code>void</code></a></p><p><code>void</code> 运算符表示表达式放弃返回值。</p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof" target="_blank" rel="noreferrer"><code>typeof</code></a></p><p><code>typeof</code> 运算符用来判断给定对象的类型。</p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus" target="_blank" rel="noreferrer"><code>+</code></a></p><p>一元加运算符将操作转换为 Number 类型。</p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation" target="_blank" rel="noreferrer"><code>-</code></a></p><p>一元减运算符将操作转换为 Number 类型并取反。</p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT" target="_blank" rel="noreferrer"><code>~</code></a></p><p>按位非运算符。</p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_NOT" target="_blank" rel="noreferrer"><code>!</code></a></p><p>逻辑非运算符。</p></li></ul><h2 id="递增-递减操作符" tabindex="-1">递增/递减操作符 <a class="header-anchor" href="#递增-递减操作符" aria-label="Permalink to &quot;递增/递减操作符&quot;">​</a></h2><h3 id="前置操作" tabindex="-1">前置操作 <a class="header-anchor" href="#前置操作" aria-label="Permalink to &quot;前置操作&quot;">​</a></h3><p>前置操作会在表达式最先执行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n);	</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n);	</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n;	</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里++n会在最先执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num);	</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 19</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>++n 就是 n=n+1的简写形式。</p><h3 id="后置操作" tabindex="-1">后置操作 <a class="header-anchor" href="#后置操作" aria-label="Permalink to &quot;后置操作&quot;">​</a></h3><p>后置操作会在表达式最后执行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里n++会在最后执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 18</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11),o=a(`<ul><li>如果++在前，会执行先自增，然后使用自增后的的值进行运算。</li><li>如果++在后，会使用原来的值先参与运行，然后自身在进行自增。</li></ul><p>这4个操作符可以作用于任何值，意思是不限于整数，字符串、布尔值、浮点值，设置对象都可以。递增和递减操作符遵循如下规则：</p><ul><li>对于字符串 <ul><li>如果是有效数值形式，则转换为数值再应用改变。<strong>变量类型从字符串变成数值</strong>。</li><li>如果不是有效数值形式，则将变量的值设置为 NaN。<strong>变量类型从字符串变成数值</strong>。</li></ul></li><li>对于布尔值 <ul><li>如果是false，则转换为0再应用改变。<strong>变量类型从布尔值变成数值</strong>。</li><li>如果是true，则转换为1再应用改变。<strong>变量类型从布尔值变成数值</strong>。</li></ul></li><li>对于浮点值：加1或减1。</li><li>对于对象：调用其 <code>valueOf()</code> 方法取得可以操作的值，对得到的值应用上述规则。如果是 NaN，则调用 <code>toString()</code> 并再次应用其他规则。<strong>变量类型从对象编程数值</strong>。</li></ul><h2 id="一元加和减" tabindex="-1">一元加和减 <a class="header-anchor" href="#一元加和减" aria-label="Permalink to &quot;一元加和减&quot;">​</a></h2><h3 id="一元加" tabindex="-1">一元加 <a class="header-anchor" href="#一元加" aria-label="Permalink to &quot;一元加&quot;">​</a></h3><p>一元加由一个加号（+）表示，放在变量前头，对数值没有任何影响</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 25</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>如果将一元加应用到非数值，则会执行与使用 <code>Number()</code> 转型函数一样的类型转换。</strong></p><h3 id="一元减" tabindex="-1">一元减 <a class="header-anchor" href="#一元减" aria-label="Permalink to &quot;一元减&quot;">​</a></h3><p>一元减由一个减号（-）表示，放在变量前头，主要用于把数值变成负值。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -25</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>在应用到非数值时，一元减会遵循与一元加同样的规则，先对它们进行转换，然后再取负值。</strong></p>`,12);function c(g,E,u,b,y,m){const e=l("font");return h(),p("div",null,[d,s("p",null,[i("注意："),s("strong",null,[t(e,{color:"red"},{default:r(()=>[i("前置自增和后置自增单独使用没有区别，如果参与运算就有区别了。")]),_:1})])]),o])}const F=n(k,[["render",c]]);export{v as __pageData,F as default};
