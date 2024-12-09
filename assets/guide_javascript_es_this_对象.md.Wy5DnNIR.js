import{_ as e,E as l,c as t,m as s,a as i,J as p,w as h,V as a,o as k}from"./chunks/framework.__fMkWnK.js";const B=JSON.parse('{"title":"对象","description":"","frontmatter":{},"headers":[],"relativePath":"guide/javascript/es/this/对象.md","filePath":"guide/javascript/es/this/对象.md","lastUpdated":1732283740000}'),r={name:"guide/javascript/es/this/对象.md"},d=a(`<h1 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h1><blockquote><p>不同的对象在底层都表示为二进制，在JavaScript中二进制前三位都为0的话会被判断为 object 类型，null的二进制表示是全0，自然前三位也是0，所以执行 typeof 时会返回 &quot;object&quot;</p></blockquote><p>对象可以通过两种形式定义：字面量 和 构造形式。两者生成的对象是一样的，唯一的区别是字面量可以添加多个键/值对，但是在构造形式中必须逐个添加属性。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 字面量【推荐】</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  key: valye,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 构造形式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>函数是对象的一个子类型，JavaScript中的函数是“一等公民”，因为它们本质上和普通的对象一样（只是可以调用），所以可以像操作其他对象一样操作函数</p><p>数组也是对象的一种类型，具备一些额外的行为。数组中内容的组织方式比一般对象要稍微复杂一些。</p><h2 id="内置对象" tabindex="-1">内置对象 <a class="header-anchor" href="#内置对象" aria-label="Permalink to &quot;内置对象&quot;">​</a></h2><p>JavaScript中还有一些对象子类型，通常被称为内置对象。</p><ul><li>String</li><li>Number</li><li>Boolean</li><li>Object</li><li>Function</li><li>Array</li><li>Date</li><li>RegExp</li><li>Error</li></ul><p>这些内置对象可以当做构造函数来使用，从而可以构造一个对应子类型的新对象。</p><h2 id="操作符和-操作符" tabindex="-1"><code>.</code> 操作符和 <code>[]</code> 操作符 <a class="header-anchor" href="#操作符和-操作符" aria-label="Permalink to &quot;\`.\` 操作符和 \`[]\` 操作符&quot;">​</a></h2><p><code>.</code> 语法通常被称为「属性访问」，要求属性名满足标识符的命名规范</p><p><code>[]</code> 语通常被称为「键访问」，可以接受任意 <code>UTF-8/Unicode</code> 字符串作为属性名。</p><p>在对象中，属性名用于都是字符串。如果使用string字面量以外的其它值作为属性名，那么它首先会被转换成一个字符串。</p><h1 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h1><p>如果试图像数组添加一个属性，但是属性看起来像一个数字，那它会变成一个数值下标（因此会修改数组的内容而不是添加一个属性）</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arr[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="属性描述符" tabindex="-1">属性描述符 <a class="header-anchor" href="#属性描述符" aria-label="Permalink to &quot;属性描述符&quot;">​</a></h2><p>ES5开始，所有的属性都具备了属性描述符</p>`,19),E=s("li",null,"writable（可写）：决定是否可以修改属性的值。",-1),o=s("li",null,"enumerable（可枚举）：决定属性是否出现在对象的属性枚举中，默认是 true。",-1),c=s("code",null,"definedProperty()",-1),g=s("code",null,"configurable",-1),y=s("code",null,"configurable: false",-1),b=a(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myObject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getOwnPropertyDescriptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myObject, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { value: 2, writable: true, enumerable: true, configurable: true }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="不变性" tabindex="-1">不变性 <a class="header-anchor" href="#不变性" aria-label="Permalink to &quot;不变性&quot;">​</a></h2><h3 id="_1-对象常量" tabindex="-1">1 对象常量 <a class="header-anchor" href="#_1-对象常量" aria-label="Permalink to &quot;1 对象常量&quot;">​</a></h3><p>结合 <code>writable: false</code> 和 <code>configurable: false</code> 就可以创建一个真正的常量属性。（不可修改、重定义或者删除）</p><h3 id="_2-禁止扩展" tabindex="-1">2 禁止扩展 <a class="header-anchor" href="#_2-禁止扩展" aria-label="Permalink to &quot;2 禁止扩展&quot;">​</a></h3><p>如果你想禁止一个对象添加新属性并且保留已有属性，可以使用 <code>Object.preventExtensions()</code> ，非严格模式下，创建新属性会静默失败，在严格模式下，将会抛出 <code>TypeError</code> 错误。</p><h3 id="_3-密封" tabindex="-1">3 密封 <a class="header-anchor" href="#_3-密封" aria-label="Permalink to &quot;3 密封&quot;">​</a></h3><p><code>Object.seal()</code> 会创建一个密封对象，这个方法实际上会在一个现有对象上调用 <code>Object.preventExtensions()</code> 并把所有现在有属性标记为 <code>configurable: false</code></p><p>所以，密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性（虽然可以修改属性的值）。</p><h3 id="_4-冻结" tabindex="-1">4 冻结 <a class="header-anchor" href="#_4-冻结" aria-label="Permalink to &quot;4 冻结&quot;">​</a></h3><p><code>Object.freeze()</code> 会创建一个冻结对象，这个方法实际上会在一个现有对象上调用 <code>Object.seal()</code> 并把所有 “数据访问” 属性标记为 <code>writable: false</code>，这样就无法修改它们的值。</p><p>这个方法是你可以应用在对象上的级别最高的不可变性，它会禁止对于对象本身及其任意直接属性的修改（这个对象引用的其他对象是不受影响的）</p><p>你可以 “深度冻结” 一个对象，具体方法为，首先在这个对象上调用 <code>Object.freeze()</code> 然后遍历它引用的所有对象并在这些对象上调用 <code>Object.freeze()</code>。但是一定要小心，因为这样做有可能会在无意中冻结其它（共享）对象。</p><h2 id="get" tabindex="-1">[[get]] <a class="header-anchor" href="#get" aria-label="Permalink to &quot;[[get]]&quot;">​</a></h2><p>获取属性值</p><p>访问属性时，引擎实际上会调用内部的默认[[get]]操作（在设置属性值时是[[put]]），[[get]]操作会检查对象本身是否包含这个属性，如果没找到的话还会查找[[prototype]]链。</p><h2 id="put" tabindex="-1">[[put]] <a class="header-anchor" href="#put" aria-label="Permalink to &quot;[[put]]&quot;">​</a></h2><p>设置属性值</p><p>[[put]]被触发时，实际的行为取决于许多因素，包括对象中是否已经存在这个属性（这是最重要的因素）</p><p>如果已经存在这个属性，[[put]] 算法大致会检查下面这些内容：</p><ol><li>属性是否有访问描述符？如果是并且存在 setter 就调用 setter</li><li>属性的数据描述符中 writable 是否是 false？如果是，在非严格模式下静默失败，在严格模式下抛出 <code>TypeError</code> 异常。</li><li>如果都不是，将该值设置为属性的值。</li></ol><p>如果对象中不存在这个属性，[[put]] 操作会更加复杂。</p><h2 id="getter和setter" tabindex="-1">Getter和Setter <a class="header-anchor" href="#getter和setter" aria-label="Permalink to &quot;Getter和Setter&quot;">​</a></h2><p>在ES5中可以使用 getter 和 setter 部分改写默认操作，但是只能引用在单个属性上，无法应用在整个对象上。</p><p>getter是一个隐藏函数，会在获取属性值时调用。</p><p>setter也是一个隐藏函数，会在设置属性值时调用。</p><p>当你给一个属性定义 getter、setter或者两者都有时，这个属性会被定义为「访问描述符」（和数据描述符相对），对于访问描述符来说，JavaScript会忽略它们的value和writable特性，取而代之的是get和set。</p><ul><li>get</li><li>set</li><li>configurable</li><li>enumable</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myObject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 给a定义一个getter</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._a_;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 给a定义一个setter</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  set</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._a_ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myObject.a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myObject.a);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>setter会覆盖单个属性默认的[[put]]操作。</p><p>通常来说 getter 和 setter 是成对出现的（只定义一个的话，通常会产生意料之外的行为）</p><h2 id="存在性" tabindex="-1">存在性 <a class="header-anchor" href="#存在性" aria-label="Permalink to &quot;存在性&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myObj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注意属性都是字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myObj); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myObj); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myObj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myObj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwnProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 有的对象可能没有连接到 Object.prototype，则可以使用这种方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hasOwnProperty.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myObj, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hasOwnProperty.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myObj, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>in</code> 操作符会检查<strong>属性名</strong>是否在对象及其[[prototype]]原型链中。</p><p><code>hasOwnProperty()</code> 只会检查属性是否在当前对象中，不会检查[[prototype]]链。</p><p>所有普通对象都可以通过对于 <code>Object.prototype</code> 的委托来访问 <code>hasOwnProperty()</code></p>`,36);function u(F,m,C,_,A,D){const n=l("font");return k(),t("div",null,[d,s("ul",null,[E,o,s("li",null,[i("configurable（可配置）：只要属性是可配置的，就可以使用 "),c,i(" 方法来修改属性描述符。"),p(n,{color:"red"},{default:h(()=>[i("注意：把 "),g,i(" 修改成 false 是单向操作，无法撤销！")]),_:1}),i("除了无法修改，"),y,i(" 还会禁止删除这个属性。")])]),b])}const q=e(r,[["render",u]]);export{B as __pageData,q as default};
