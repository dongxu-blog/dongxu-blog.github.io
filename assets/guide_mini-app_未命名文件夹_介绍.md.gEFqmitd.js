import{_ as p,E as t,c as r,m as s,a,J as l,w as i,V as e,o,t as c}from"./chunks/framework.__fMkWnK.js";const S=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mini-app/未命名文件夹/介绍.md","filePath":"guide/mini-app/未命名文件夹/介绍.md","lastUpdated":1732806619000}'),h={name:"guide/mini-app/未命名文件夹/介绍.md"},d=e(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><h2 id="小程序的整体目录结构" tabindex="-1">小程序的整体目录结构 <a class="header-anchor" href="#小程序的整体目录结构" aria-label="Permalink to &quot;小程序的整体目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ app.js</span></span>
<span class="line"><span>├─ app.json</span></span>
<span class="line"><span>├─ app.wxss</span></span>
<span class="line"><span>├─ project.config.json</span></span>
<span class="line"><span>├─ components（公共组件）</span></span>
<span class="line"><span>│  └─ drawer</span></span>
<span class="line"><span>│  		├─ index.wxml</span></span>
<span class="line"><span>│     └─ ...	</span></span>
<span class="line"><span>└─ pages</span></span>
<span class="line"><span>   └─ pageA</span></span>
<span class="line"><span>   		├─ components（局部组件）</span></span>
<span class="line"><span>   		│  └─ goods</span></span>
<span class="line"><span>      │     ├─ index.wxml</span></span>
<span class="line"><span>      │     └─ ...</span></span>
<span class="line"><span>      ├─ pageA.wxss</span></span>
<span class="line"><span>      ├─ pageA.js</span></span>
<span class="line"><span>      ├─ pageA.json</span></span>
<span class="line"><span>      └─ pageA.wxml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>项目根目录</strong></p><p>小程序规定：一个小程序<strong>主体部分</strong>由三个文件组成，同时必须放在项目的根目录。</p><ul><li><p><code>app.js</code> 需要在里面调用 <code>App()</code> 函数，注册一个小程序。</p></li><li><p><code>app.json</code> 小程序进行全局配置，决定页面的文件路径、窗口表现、设置网络超时时间、设置多tab等。</p></li><li><p><code>app.wxss</code> 全局样式，作用于每一个页面。但注意的是 <code>app.wxss</code> 写的全局样式不会影响组件内的样式。</p></li></ul><p>此外，小程序项目的根目录还会有一个项目配置文件 <code>project.config.json</code> ，可以指定小程序源码的目录，默认为根目录(/)。</p><p><strong>页面目录结构</strong></p><p>小程序是由许多页面组成的，因此需要一个目录来存放页面，通常把这个文件夹命名为 <strong>pages</strong>。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// app.json的 pages 用来指定页面的路径，框架会根据路径自动去寻找相对位置的四类文件（小程序的代码构成）。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/home/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/user/user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>一个小程序页面由4个文件组成：wxml、wxss、js、json。</p>`,11),u=s("code",null,".wxml",-1),g=s("code",null,".html",-1),k=s("code",null,"wx:if",-1),b=s("code",null,".wxss",-1),m=s("code",null,"rpx",-1),E=s("code",null,"app.wxss",-1),_=s("code",null,"page.wxss",-1),x=s("li",null,[s("code",null,".js"),a(" 作为跟页面交互角色，在小程序开发中也不例外。在 "),s("code",null,"js"),a(" 中，可以使用微信提供的API。比如常见的 Page（构造器）和 Component，还有微信给出的一些特定权限的API（wx.navigateTo）。")],-1),v=s("li",null,[s("code",null,".json"),a(" 是配置文件，在小程序中JSON扮演者静态配置的角色。")],-1),y=e(`<p><strong>组件目录结构</strong></p><p>小程序的组件可以分为全局组件和局部组件。</p><ul><li>全局组件：主要封装了登录、弹窗、动画组件等等之类的组件，方便各个页面引用；</li><li>局部组件：为了减轻一个页面内的复杂度，通过模块“搭积木”的方式来组成一个页面</li></ul><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h2><p>小程序根目录下的 app.json 文件用来对微信小程序进行**<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE" target="_blank" rel="noreferrer">全局配置</a>**，文件内容为一个 JSON 文件。</p><h2 id="运行机制" tabindex="-1">运行机制 <a class="header-anchor" href="#运行机制" aria-label="Permalink to &quot;运行机制&quot;">​</a></h2><h4 id="小程序启动的过程" tabindex="-1">小程序启动的过程 <a class="header-anchor" href="#小程序启动的过程" aria-label="Permalink to &quot;小程序启动的过程&quot;">​</a></h4><ol><li>把小程序的代码下载到本地</li><li>解析app.json全局配置文件</li><li>执行app.js小程序入口文件，调用App()创建小程序实例</li><li>渲染小程序首页</li><li>小程序启动完成</li></ol><h4 id="小程序渲染的过程" tabindex="-1">小程序渲染的过程 <a class="header-anchor" href="#小程序渲染的过程" aria-label="Permalink to &quot;小程序渲染的过程&quot;">​</a></h4><ol><li>加载解析页面的.json配置文件</li><li>加载页面的.wxml模版和.wxss样式</li><li>执行页面的.js文件，调用Page()创建页面实例</li><li>页面渲染完成</li></ol><h2 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-label="Permalink to &quot;标签&quot;">​</a></h2><h4 id="常用的视图容器" tabindex="-1">常用的视图容器 <a class="header-anchor" href="#常用的视图容器" aria-label="Permalink to &quot;常用的视图容器&quot;">​</a></h4><p><strong>view</strong></p><ul><li><p>普通视图区域</p></li><li><p>类似于HTML中的div，是一个块级元素</p></li><li><p>常用来实现页面的布局效果</p></li></ul><p><strong>scroll-view</strong></p><ul><li>可滚动的视图区域</li><li>常用来实现滚动列表效果</li></ul><p><strong>swiper</strong> 和 <strong>swiper-item</strong></p><ul><li>轮播图容器组件 和 轮播图item组件</li></ul><h4 id="常用基础组件" tabindex="-1">常用基础组件 <a class="header-anchor" href="#常用基础组件" aria-label="Permalink to &quot;常用基础组件&quot;">​</a></h4><p><strong>text</strong></p><ul><li><p>文本组件</p></li><li><p>类似于HTML中的span标签，是一个行内元素</p></li><li><p>通过text组件的 <code>selectable</code> 属性，实现长按选中文本内容的效果</p><blockquote><p>&lt;text selectable&gt;192966603&lt;/text&gt;</p></blockquote></li></ul><p><strong>rich-text</strong></p><ul><li><p>富文本组件</p></li><li><p>支持把HTML字符串渲染为WXML结构</p><blockquote><p>&lt;rich-text nodes=&quot;&lt;h1&gt;小苏同学&lt;/h1&gt;&quot;&gt;&lt;/rich-text&gt;</p></blockquote></li></ul><h4 id="其他常用组件" tabindex="-1">其他常用组件 <a class="header-anchor" href="#其他常用组件" aria-label="Permalink to &quot;其他常用组件&quot;">​</a></h4><p><strong>button</strong></p><ul><li>按钮组件</li><li>功能比HTML中的button按钮丰富</li><li>通过 <code>open-type</code> 属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）</li></ul><p><strong>image</strong></p><ul><li>图片组件</li><li>image组件默认宽度约为300px，高度约为240px</li></ul><p><strong>navigator</strong></p><ul><li>页面导航组件</li><li>类似于HTML中的a链接</li></ul><h2 id="页面" tabindex="-1">页面 <a class="header-anchor" href="#页面" aria-label="Permalink to &quot;页面&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 组件，作用和div一样</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 文本标签，作用和span一样</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 包裹性质的容器，不会在页面中做任何渲染，常用于条件渲染</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	user-select 用户是否可以选中当前文本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="单位" tabindex="-1">单位 <a class="header-anchor" href="#单位" aria-label="Permalink to &quot;单位&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rpx 宽度自适应</span></span>
<span class="line"><span>默认所有宽度都是 750 rpx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wx.getUserProfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,36);function f(q,w,A,P,j,C){const n=t("font");return o(),r("div",null,[d,s("ul",null,[s("li",null,[u,a(" 模版文件对应为传统网页开发技术中的 "),g,a(" 文件，是一个页面（组件）的骨架。只不过它里面采用的语法跟传统的 HTML 语法有些差异，比如标签的名称是微信自己在底层封装的组件。 "),s("ul",null,[s("li",null,[s("strong",null,[l(n,{color:"red"},{default:i(()=>[a("标签名字有点不一样")]),_:1})]),a("。在写HTML的时候，经常会用到的标签是 div、p、span，小程序的 WXML 用的标签是 view、button、text等等，这些标签是小程序给开发者包装好的基本能力，小程序还提供了地图、视频、音频等组件能力。")]),s("li",null,[s("strong",null,[l(n,{color:"red"},{default:i(()=>[a("多了一些 "),k,a(" 这样的属性以及 "),s("code",null,c(),1),a(" 这样的表达式")]),_:1})]),a("。微信小程序借鉴了 MVVM 的开发模式（例如React、Vue），把渲染和逻辑分离。简单来说就是不再让JS直接操控DOM，JS只需要管理状态即可，然后再通过一种模版语法来描述状态和界面架构的关系。")])])]),s("li",null,[b,a(" 样式文件则对应CSS样式文件，具有大部分CSS的特性。 "),s("ul",null,[s("li",null,[s("strong",null,[l(n,{color:"red"},{default:i(()=>[a("新增了尺寸单位")]),_:1})]),a("。在写CSS样式时，开发者需要考虑到手机设备的屏幕会有不同的宽度和设备像素比，采用一些技巧来换算一些像素单位。WXSS在底层支持新的尺寸单位 "),m,a("，开发者可以免去换算的烦恼，只要交给小程序底层来换算即可，由于换算采用的浮点数运算，所以运算结果会和预期结果有一点点偏差。")]),s("li",null,[s("strong",null,[l(n,{color:"red"},{default:i(()=>[a("采用了全局的样式和局部样式")]),_:1})]),a("。根目录中的 "),E,a(" 为项目公共样式，它会被注入到小程序的每个页面，局部页面样式 "),_,a(" 仅对当前页面生效。")])])]),x,v]),y])}const T=p(h,[["render",f]]);export{S as __pageData,T as default};
