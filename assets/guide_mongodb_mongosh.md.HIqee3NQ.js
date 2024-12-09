import{_ as s,c as a,o as i,V as e}from"./chunks/framework.__fMkWnK.js";const b=JSON.parse('{"title":"安装 MongoDB Shell","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mongodb/mongosh.md","filePath":"guide/mongodb/mongosh.md","lastUpdated":1733062151000}'),n={name:"guide/mongodb/mongosh.md"},l=e(`<h1 id="安装-mongodb-shell" tabindex="-1">安装 MongoDB Shell <a class="header-anchor" href="#安装-mongodb-shell" aria-label="Permalink to &quot;安装 MongoDB Shell&quot;">​</a></h1><p><code>mongosh</code> 是 MongoDB 官方推荐的新客户端工具，提供了更好的支持和功能。</p><blockquote><p>MongoDB 从版本 4.2 开始，将 <code>mongo shell</code> 分离出来，并在后续版本中逐渐被 <code>mongosh</code>（MongoDB Shell）取代。</p></blockquote><h2 id="_1-官网下载压缩包手动安装" tabindex="-1">1 官网下载压缩包手动安装 <a class="header-anchor" href="#_1-官网下载压缩包手动安装" aria-label="Permalink to &quot;1 官网下载压缩包手动安装&quot;">​</a></h2><p><strong>（1）下载与解压</strong></p><ul><li><p>从 <a href="https://www.mongodb.com/try/download/shell" target="_blank" rel="noreferrer">MongoDB Shell 下载页面</a> 下载适合 macOS 的 <code>.zip</code> 文件</p></li><li><p>打开终端，导航到下载目录并解压缩文件：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Downloads</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongosh-2.3.4-darwin-arm64.zip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><p><strong>（2）移动解压后的文件到目标目录</strong></p><ul><li>创建一个目录来存放 <code>mongosh</code> 二进制文件，例如 <code>/usr/local/mongodb-shell</code><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir -p /usr/local/mongodb-shell</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>将解压后的文件移动到目标目录：<div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv mongosh-2.3.4-darwin-arm64/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/mongodb-shell/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><p><strong>（3）配置环境变量</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在配置文件中添加以下行，将 MongoDB Shell 的路径添加到 PATH 环境变量中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${PATH}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:/usr/local/mongodb-shell/bin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 保存配置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>（4）验证安装</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongosh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>（5）启动 MongoDB Shell</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongosh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-homebrew安装" tabindex="-1">2 Homebrew安装 <a class="header-anchor" href="#_2-homebrew安装" aria-label="Permalink to &quot;2 Homebrew安装&quot;">​</a></h2><p><strong>（1）安装 mongosh</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install mongosh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>（2）验证安装</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongosh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>（3）使用 mongosh 连接到本地 MongoDB 实例</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongosh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,21),p=[l];function t(o,h,r,d,c,g){return i(),a("div",null,p)}const u=s(n,[["render",t]]);export{b as __pageData,u as default};
