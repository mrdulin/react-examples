# react-ts-webpack2 脚手架

## 技术栈:

见`package.json`

## 环境依赖：

* System: `Mac OSX`
* `nodejs`: `v8.4.0`
* `npm`: `5.3.0`

## 发布流程

* `git`提交代码
* `npm version patch`更新版本号
* `npm run build`
* 再次提交`docs`目录到`github`

## 关于调试的方案：

一、在`hosts`文件中添加域名映射到`127.0.0.1`，使用`nginx`将访问该域名的资源反向代理(`proxy_pass`)到本地服务器,比如`http://localhost:2222`，可以解决访问接口或者其他静态资源的`CORS`问题。

添加域名也有一点需要注意，例如,真是测试环境的域名是`www.test.company.com`, `www.test.company.com`下有很多团队的应用，我们最终的应用是包含了很多团队各自开发的应用的，例如:

* `www.test.company.com/apple`, apple应用
* `www.test.company.com/orange`, orange应用
* `www.test.company.com/my`, 我们的应用

我们打开应用，要进入到我们的应用的页面，但是要先经过apple应用的页面，apple应用的某个按钮配置了`my`应用的链接，要点击这个按钮才能进入我们的页面。假如这时候我们在`hosts`文件配置域名是

`127.0.0.1 www.test.company.com`

并且用`nginx`将该域名反向代理到本地，配置如下：

```nginx
server {

  listen 80;

  server_name www.test.pajkdc.com;

  error_page 500 502 503 504  /50x.html;

  location = /50x.html {
    root   html;
  }
  
  #我们的应用
  location /my {
    proxy_pass http://localhost:2222/;
  }
  
  location /apple {
    #proxy_pass http://localhost:2223/;
    proxy_pass http://真实的IP地址/;
  }
  
  location /orange {
    proxy_pass http://localhost:2224/;
  }
}
```

问题出现了，我们必须将`apple`应用的本地服务器也启动起来，否则`nginx`反向代理失败，将无法进入`apple`应用。这时候有两个解决方案：

1. 将`apple`项目克隆到本地，启动`apple`项目的本地服务器。让`nginx`能反向代理到`http://localhost:2223/`，这样就可以进入`apple`应用，在将`my`应用的本地服务器也启动，从而进入`my`应用。

  ​缺点：

* 因为`apple`项目是其他团队的项目，我们可能并不能轻易申请到这个项目库的权限。
* 要启动每个前置应用的本地服务器。有人会说，可以将`my`应用的地址生成二维码，直接扫码进入啊。这种方式可以，不过有局限性，只适用于`my`应用是独立的，不依赖其他任何应用。如果`my`有重定向到其他应用，或者`my`应用中要经过某个应用的页面，然后在返回到`my`应用中，这种方式就不太适用了。
* 启动过多的本地服务器，比较繁琐。

2. 可以通过`ping`命令获取`www.test.company.com`的`IP`地址，在访问`apple`应用时，使用`nginx`转发到真实的测试环境`apple`应用服务器，而不是反向代理到本地服务器。这样，进入`apple`应用时，访问的是测试环境的`apple`应用资源，而不是本地的。



更好的配置方式是使用自定义二级域名，`hosts`配置如下：

`127.0.0.1 novaline.test.company.com`

同时修改`nginx`的`server_name`为`novaline.test.company.com`，访问该域名的时候，才会通过`nginx`反向代理到本地服务器。访问`www.test.company.com`，就是真实测试环境的资源。

避免的问题：在`PC`端浏览器开发，有时候某个API文档应用的地址是`www.test.company.com/api-docs`，如果使用反向代理`www.test.company.com`域名，那么在访问`api-docs`应用时，就需要在`nginx`中配置一条转发，目的是为了访问真实测试环境的`api-docs`。如果配置自定义域名，就不存在这个问题了。

__补充：__

如果应用是`https`协议，需要给`nginx`指定`ssl`证书。

这种方案，需要频繁修改`nginx`配置, 建立本地服务器的工具(`webpack-dev-server`, `http-server`)，频繁修改`hosts`文件，如果要抓包，还需要`charles`或者`mitmproxy`。

二、使用charles的`Map Local`功能，不需要本地服务器，不需要`nginx`。

`Map Local`功能，简单说来，就是某个域名下的远程的资源映射到本地资源。

本项目没有使用`webpack-dev-server`启动本地服务器，而是使用`webpack -d -w`进行开发。这个命令运行后，`webpack`会对源文件开启监视模式，当文件有改动时，进行增量编译，在`docs`目录下打包出新的资源。

`index.html`中`script`标签对脚本的引用也会变成最新打包出的脚本，其他静态资源也是一样。

这里以本项目使用的域名进行说明，线上环境域名和服务器根路径为`http://novaline.space/react-ts-webpack2`。

charles的`Map Local`配置如下:

![](https://ws3.sinaimg.cn/large/006tKfTcly1fiq8v40v64j30z40p6jsj.jpg)

开启`Map Local`:

![](https://ws1.sinaimg.cn/large/006tKfTcly1fiq8w6opx3j313s0nu3zl.jpg)



这里有两种配置方式：

1. 就是上图所示, 这种方式要访问`http://novaline.space/react-ts-webpack2/index.html`，而不是`http://novaline.space/react-ts-webpack2/` ，后者`charles`将提示映射的本地资源不存在。如下：

![](https://ws1.sinaimg.cn/large/006tKfTcly1fiq92ggf3yj31kw05at9j.jpg)

2. 如果要使用`http://novaline.space/react-ts-webpack2/`进行映射，配置如下：

   ![](https://ws2.sinaimg.cn/large/006tKfTcly1fiq96tqj7bj30z20piq44.jpg)

映射到`docs`目录的`index.html`文件。

这两种方案的目的都是为了让`charles`能将远程的`index.html`映射为本地的`index.html`，这样静态资源(`js`, `css`)就都是本地`index.html`引用的本地资源了。

这里还有个问题需要注意：我们可能会给生成的资源打上`hash`，比如`app.jij231sdf.js`，每次修改、保存、增量编译的时候，会在`docs`目录下生成新的资源文件，比如，又生成了新的`app.123ji1op23po.js`，注意，通过`html-webpack-plugin`，`index.html`文件中对资源的引用也会变成最新的。所以，尽管线上的脚本文件的文件名是`app.sdjfj12.js`，那是线上`index.html`引用的资源，但我们这里已经把线上的`index.html`映射成了本地`index.html`，引用的资源自然也是本地的。我们映射的是`index.html`，不是映射的拥有`hash`值的静态资源（也映射不到）。

开发的时候，我们可以不开启给静态资源添加`hash`后缀的功能，通过`chrome`的`Network`选项中得`Disable Cache`来禁用静态资源缓存。
这样可以避免每次修改、保存、增量编译，在`docs`目录下生成拥有新的`hash`后缀静态资源，因为开发时，可能要进行上百次的修改，保存，增量编译流程，避免磁盘被撑爆。

另外一点需要注意的是，浏览器访问推荐使用`switchOmega`等代理切换工具，添加代理切换规则。本例：

![](https://ws2.sinaimg.cn/large/006tNc79ly1fiqhy1empjj30qh05m74j.jpg)

`charles`会在本地启动服务器，端口默认是8888，访问目标域名时，通过`charles`代理服务器即可。

如果是`https`协议，需要使用`charles`提供的`ssl`证书，PC端访问，就在PC端安装，移动设备访问，就在移动设备中安装。这里不再讲述。

##遇到的问题：

* `Cannot use [chunkhash] for chunk in '[name].[chunkhash].js' (use [hash] instead)`

* `typescript` + `webpack2`中开启`css-loader`的`css module`, `import style from 'style.module.scss'`，`tsc`报错问题。参考：

   * https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
   * https://github.com/css-modules/css-modules/issues/61#issuecomment-220684795

* `Error:(15, 21) TS2302:Static members cannot reference class type parameters.`

* 什么时候定义`interface`，什么时候定义`class`，什么时候定义`type`。 - _已解决_

* `es6`箭头函数形式的高阶函数，函数返回值`ts`类型注解写法。 - _已解决_

* 怎么使用`yarn`或`npm`来搜索一个`package`，按照前先验证这个`package`是否存在，或者是否是需要的那个`package`（排除`package`名字相近的）?

  * `yarn info package`， 例如`yarn info autoprefixer description`,获取`autoprefixer`的描述信息
  * `yarn info package readme`，获取`package`的`readme`文件

* [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
* `jest`写`react`组件快照测试时，组件使用的`css module`报错，参考链接: https://github.com/facebook/jest/issues/1347

## 思考

* 展示型组件(推荐使用`stateless functional component`写法)，使用`react-test-renderer/shallow`浅渲染测试组件DOM结构即可。
  [参考](http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/)
* 基于类的组件，内部包含`state`，`props`，通过用户事件，程序事件可以改变组件UI状态，使用`react-dom/test-utils`进行测试，通过触发事件，断言改变的UI状态。
* 到组件嵌套层次较深时，使用`shallow`
