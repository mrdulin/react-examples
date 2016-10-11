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