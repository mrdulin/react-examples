# 聚合工具

_React + Webpack + ES6 + node + express_

*   `npm install`, 安装依赖
*   `npm start`, 启动`webpack-dev-server`，通过`proxy`代理联调第三方接口（第三方接口服务器没有开启`CORS`，在浏览器中直接调用接口，会报跨域错误）
*   `npm run serve`，启动`node server`，使用`node server`作为中转（代理服务器，使用`nodemon server.js`启动`node server`）访问第三方接口，也是为了联调`node server`代码，`node server`最终将部署在`VPS`上。
*   `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]`，给项目添加版本号.
*   `npm run build`, 发布上线，并将`npm version`生成的`git tag`推送到到远端(`github`).
*   `SSH -p <ssh-port> root@<IP address>`连接`vps`, `vps`(`centos`)安装`git`,`sudo yum install git`
*   使用`scp`上传`server.js`, `scp -P 29041 /Users/dulin/workspace/react-juhe-tools/server.js root@<ip_address>:/root/workspace/react-juhe-tools`
*   `head -n 1 /etc/issue`查看`VPS`操作系统版本，结果`CentOS release 6.6 (Final)`
*   `VPS`安装`nvm`,

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```
```bash
export NVM_DIR="/root/.nvm"
```
```bash
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```
```bash
nvm --version
```

*   安装最新版`nodejs`, `nvm install node`, 查看`node`版本`node -v`(`v6.7.0`), 查看`npm`版本`npm -v`(`3.10.3`)
*   安装`pm2`, `npm install pm2 -g`, 查看`pm2`版本`pm2 --version`(`2.0.18`)
*   在`VPS`上新建一个`package.json`文件，安装`node server`的依赖（如`express body-parser`）等
*   在`VPS`上启动`node server`，`pm2 start server.js`， `pm2 logs`查看日志。


__擦:__ `VPS`的`node server`调第三方接口总是报如下错误：

```json
{
    "code": "ECONNRESET",
    "errno": "ECONNRESET",
    "syscall": "read"
}
```

本地`node server`没有问题。


*   在使用[聚合数据](https://www.juhe.cn/)，调用接口的时候，出现如下错误：

    <img src="./README/ip-white-list.png" alt="ip-white-list" width='200px'>

    需要将`VPS`（线上服务器）的公网`IP`地址或者本地服务器(开发机，使用`http://localhost`开发调试)的公网IP地址(如果你在公司偷着做自己项目的话，公司可能有自己的内网IP，内网IP显然是不行的，[如何查看公网IP?](#public-ip))加入到聚合数据控制面板->IP白名单中。

    但是公司的公网IP是经常变化的，每次变化后都要把旧的删除，添加新的公网IP，这确实有点麻烦。

*   `dll`的`manifest.json`文件包含的 `module` 和对应的 `id` 的键值对构成

*   无论在何种性能优化中，缓存总是必不可少的一部分，毕竟每次变动都只影响很小的一部分，如果能够缓存住那些没有变动的部分，直接拿来使用，自然会事半功倍，在 webpack 的整个构建过程中，有多个地方提供了缓存的机会，如果我们打开了这些缓存，会大大加速我们的构建，尤其是 rebuild 的效率。

*   使用`jest`时，可能会遇到无法解析`wepback`的`alias`中配置的模块路径的问题，查看[app/modules/Ip](./app/modules/Ip)的`__tests__/reducer.spec.js`例子,引入了`reducer`文件，`reducer`文件中使用了`import {genReducer} from app/reducer`，其中`app`是`webpack`配置的`alias`，当运行`npm test`时，会报`Cannot find module 'app/reducer' from 'reducer.js'`错误，解决办法是使用`babel-plugin-module-resolver`，在`.babelrc`配置好`alias`即可。

__TODO__

- [x] 异步加载的每个`chunk`文件都包含`api`和`util`模块, 将公用的提出来。
- [x] 使用`webpack`将第三方库打包成`dll`(动态链接库)
- []  通过导入特定模块，而不是导入全部模块再解构赋值的方式进行优化，对比`import Router from 'react-router/lib/Router'`和`import {Router} from 'react-router'`，如果要将第三方库的特定模块打包成`dll`，那么初步想法是在打包`dll`的时候，在`entry`中指定第三方库的特定模块，如`'react-router/lib/Router'`，而不是指定`'react-router'`。

__坑：__

*   `"Uncaught Error: Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."`
    貌似有很多情况会导致这个错误，我的情况是，`app/modules/Home`模块下本来只有`index.jsx`文件，这样`require('modules/Home')`的时候，会默认找`index.jsx`，但是后来我创建了一个`index.js`的空文件，一直没用到，但是忘记删除。估计`require`的时候`index.js`比`index.jsx`的优先级高，所以`require`了一个空文件，导致了这个错误。

*   `Chrome 版本 56.0.2924.87 (64-bit)`，`SearchBook`模块出现了`Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080`的`warnings`。
    `SearchBook`模块使用了`IScroll`，导致滑动出现问题。为了兼容老旧浏览器，需要做[特性检测](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection)。

__FAQ__

1. <b id='public-ip'>如何查看公网IP?</b>

    使用SB百度，搜索`ip`；或者`curl ifconfig.me`.

2. `npm`脚本中`&`和`&&`的区别？

    `&`是并行执行（即同时的平行执行），`&&`是继发执行（即只有前一个任务成功，才执行下一个任务）。

3. `webpack-dev-server --hide-modules`无效果？

    注意像`--inline`和`--hot`这些配置参数是`webpack-dev-server`特有的，而另外的如`--hide-modules`则是`webpack`的`cli`（命令行工具）特有的配置参数。`webpack-dev-server`要实现相同的功能，可以设置

    ```js
    {
        devServer: {
            stats: 'errors-only',
        },
    }
    ```
4. `git`如何撤销某些文件的更改？

    `git checkout .` - 撤销当前目录全部文件的修改
    `git checkout someFile` - 撤销某个文件的修改
    `git checkout path/` - 撤销某个目录下所有文件的修改

5. 怎么配合`webpack-dev-server`使用项目目录中`mock`的`json`数据？

    `webpack-dev-server`需要设置`--content-base .`参数，这样就可以访问到项目根目录下的`mock`文件夹，例如：`http://localhost:3000/mock/city.json`
