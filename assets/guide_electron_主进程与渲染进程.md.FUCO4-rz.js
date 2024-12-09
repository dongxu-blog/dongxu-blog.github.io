import{_ as e,c as o,o as r,V as t,a6 as a}from"./chunks/framework.__fMkWnK.js";const g=JSON.parse('{"title":"主进程与渲染进程","description":"","frontmatter":{},"headers":[],"relativePath":"guide/electron/主进程与渲染进程.md","filePath":"guide/electron/主进程与渲染进程.md","lastUpdated":1731852837000}'),c={name:"guide/electron/主进程与渲染进程.md"},n=t('<h1 id="主进程与渲染进程" tabindex="-1">主进程与渲染进程 <a class="header-anchor" href="#主进程与渲染进程" aria-label="Permalink to &quot;主进程与渲染进程&quot;">​</a></h1><p>下图是 Chrome 浏览器的程序架构，图来自于<a href="https://www.google.com/googlebooks/chrome/" target="_blank" rel="noreferrer">Chrome 漫画</a>。</p><p><img src="'+a+'" alt="Chrome的多进程架构"></p><p><strong>Electron 应用的结构与上图非常相似，在 Electron 中主要控制两类进程：主进程、渲染器进程。</strong></p><h2 id="主进程" tabindex="-1">主进程 <a class="header-anchor" href="#主进程" aria-label="Permalink to &quot;主进程&quot;">​</a></h2><p>每个 Electron 应用都有一个单一的主进程，作为应用程序的入口点。 主进程在 Node.js 环境中运行，这意味着它具有 <code>require</code> 模块和使用所有 Node.js API 的能力。</p><p>主进程的主要目的是使用 <code>BrowserWindow</code> 模块创建和管理应用程序窗口。</p><h2 id="渲染进程" tabindex="-1">渲染进程 <a class="header-anchor" href="#渲染进程" aria-label="Permalink to &quot;渲染进程&quot;">​</a></h2><p>Electron 应用都会为每个打开的 <code>BrowserWindow</code> 生成一个单独的渲染器进程。 洽如其名，渲染器负责 <strong>渲染</strong> 网页内容。 所以实际上，运行于渲染器进程中的代码是须遵照网页标准的，这也意味着渲染器无权直接访问 <code>require</code> 或其他 Node.js API。 为了在渲染器中直接包含 NPM 模块，您必须使用与在 web 开发时相同的打包工具。</p><blockquote><p>问题产生：处于渲染器进程的用户界面，该怎样才能与 Node.js 和 Electron 的原生桌面功能进行交互呢？</p></blockquote>',10),s=[n];function d(_,l,i,p,h,m){return r(),o("div",null,s)}const f=e(c,[["render",d]]);export{g as __pageData,f as default};
