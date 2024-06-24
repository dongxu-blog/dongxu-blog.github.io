# 浏览器

```
准备好运行时环境，V8就可以执行JavaScript代码了

运行时环境 => 解析 => 生成字节码 => 解释执行
																需要优化的代码 => 编译成二进制
```

## 浏览器工作原理

浏览器的工作原理就是将用户请求的网页内容解析、渲染呈现给用户，同时支持用户的交互操作和网页的动态效果。

1. 用户在浏览器地址栏中输入网址或者点击链接，浏览器会根据这个网址发起一个HTTP请求

2. 服务器收到这个请求后，会返回一个HTML文件，其中包含了网页的内容和结构

3. 浏览器解析HTML文件，并根据其中的CSS样式和JavaScript脚本来渲染网页

4. 浏览器将渲染好的网页呈现给用户，用户可以进行交互操作，如点击链接、填写表单等

5. 当用户进行交互操作时，浏览器会根据相应的事件来执行JavaScript脚本，从而实现网页的动态效果。

6. 当用户关闭网页或者打开新的网页时，浏览器会释放相应的资源，如关闭网络连接、清除缓存等。




## 请求

### 浏览器能直接调RPC接口么

```
浏览器本身并不支持直接调用RPC，因为浏览器是一个客户端应用程序，通常只能向web服务器发送HTTP请求，并接收服务器返回的HTTP响应。
但是，浏览器可以通过JavaScript代码调用web服务器上的RPC接口，从而实现客户端与服务器之间的远程过程调用。
```
