import{_ as a,c as s,o as n,V as e}from"./chunks/framework.__fMkWnK.js";const m=JSON.parse('{"title":"父子组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mini-app/未命名文件夹/父子组件通信.md","filePath":"guide/mini-app/未命名文件夹/父子组件通信.md","lastUpdated":1732806619000}'),p={name:"guide/mini-app/未命名文件夹/父子组件通信.md"},i=e(`<h1 id="父子组件通信" tabindex="-1">父子组件通信 <a class="header-anchor" href="#父子组件通信" aria-label="Permalink to &quot;父子组件通信&quot;">​</a></h1><h2 id="父传子-属性的传递" tabindex="-1">父传子 -- 属性的传递 <a class="header-anchor" href="#父传子-属性的传递" aria-label="Permalink to &quot;父传子 -- 属性的传递&quot;">​</a></h2><ol><li><p>子组件标签中设置自定义属性接收父组件的数据，</p></li><li><p>然后在子组件的properties中声明该自定义属性，</p></li><li><p>然后在子组件中直接使用该自定义属性就相当于使用父组件的数据</p></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Component({</span></span>
<span class="line"><span>	properties:{</span></span>
<span class="line"><span>		自定义属性:{</span></span>
<span class="line"><span>			type:String,</span></span>
<span class="line"><span>			value:&quot;默认值&quot;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="子传父-方法的传递" tabindex="-1">子传父 -- 方法的传递 <a class="header-anchor" href="#子传父-方法的传递" aria-label="Permalink to &quot;子传父 -- 方法的传递&quot;">​</a></h2><ol><li>在子组件内部做点击事件，通过 <code>this.triggerEven</code> 来触发这个事件函数</li><li>在父组件中调用子组件的地方传入自定义事件函数</li></ol>`,6),l=[i];function t(r,o,c,d,u,_){return n(),s("div",null,l)}const b=a(p,[["render",t]]);export{m as __pageData,b as default};
