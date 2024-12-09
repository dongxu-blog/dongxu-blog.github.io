import{_ as s,E as i,c as l,m as t,a as e,J as n,w as o,V as d,o as r}from"./chunks/framework.__fMkWnK.js";const v=JSON.parse('{"title":"Boolean","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/数据类型/Boolean.md","filePath":"guide/javascript/es/数据类型/Boolean.md","lastUpdated":1732283740000}'),h={name:"guide/javascript/es/数据类型/Boolean.md"},p=d(`<h1 id="boolean" tabindex="-1">Boolean <a class="header-anchor" href="#boolean" aria-label="Permalink to &quot;Boolean&quot;">​</a></h1><p>表示肯定或否定时在计算机中对应的是布尔类型数据。</p><p>它有两个字面值 <code>true</code> 和 <code>false</code>，表示肯定的数据用 true（真），表示否定的数据用 false（假）。</p><p>虽然布尔值只有两个，但所有的其他类型的值都有相应布尔值的等价形式。（要将一个其他类型的值转换为布尔值，可以调用 <code>Boolean()</code> 转型函数， <code>Boolean()</code> 转型函数可以在任意类型的数据上调用，而且始终返回一个布尔值）</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;codebetter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="不同类型与布尔值之间的转换规则" tabindex="-1">不同类型与布尔值之间的转换规则 <a class="header-anchor" href="#不同类型与布尔值之间的转换规则" aria-label="Permalink to &quot;不同类型与布尔值之间的转换规则&quot;">​</a></h2><table><thead><tr><th>数据类型</th><th>转换为true的值</th><th>转换为false的值</th></tr></thead><tbody><tr><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>String</td><td>非空字符串</td><td><code>&quot;&quot;</code>（空字符串）</td></tr><tr><td>Number</td><td>非零数值（包括无穷值）</td><td>0、NaN</td></tr><tr><td>Object</td><td>任意对象</td><td>null</td></tr><tr><td>Undefined</td><td>N/A（不存在）</td><td>undefined</td></tr></tbody></table><p>注意：</p>`,8),c=t("li",null,[e("布尔值字面量 "),t("code",null,"true"),e(" 和 "),t("code",null,"false"),e(" 是区分大小写的。")],-1),u=t("li",null,"布尔值很少是直接赋值得到的，都是从结果中得到，主要利用布尔值进行判断。",-1),k=t("li",null,[e("像 "),t("code",null,"if"),e(" 等流程控制语句会自动执行"),t("strong",null,"其他类型值到布尔值"),e("的转换。")],-1);function _(g,b,m,E,f,B){const a=i("font");return r(),l("div",null,[p,t("ol",null,[c,t("li",null,[e("布尔类型在控制台输出 "),t("strong",null,[n(a,{color:"blue"},{default:o(()=>[e("蓝色")]),_:1})]),e("。")]),u,k])])}const N=s(h,[["render",_]]);export{v as __pageData,N as default};
