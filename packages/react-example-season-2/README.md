# react-juhe-tools

*   `npm install`, 安装依赖
*   `npm start`, 启动`webpack-dev-server`，通过`proxy`代理联调第三方接口（第三方接口服务器没有开启`CORS`，在浏览器中直接调用接口，会报跨域错误）
*   `npm run serve`，启动`node server`，使用`node server`作为中转（代理服务器）访问第三方接口，也是为了联调`node server`代码，`node server`最终将部署在`VPS`上。
*   `npm run build`, 发布
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


__擦;__ `VPS`的`node server`调第三方接口总是报如下错误：

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


__FAQ__

1. <b id='public-ip'>如何查看公网IP?</b>

    使用SB百度，搜索`ip`；或者`curl ifconfig.me`.
