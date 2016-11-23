# React Testing

__自动化测试的类型__

*   单元测试：每次只测试应用中最小的一块功能。通常就是直接调用一个函数，给定输入，对输出或者其他方面的影响进行验证。
*   功能测试：从端用户的角度来验证应用功能是否正确的测试。对于Web应用来说就是像真实用户一样，在浏览器中四处点击、填写表单。
*   集成测试
*   性能测试
*   安全测试
*   视觉测试

__工具__

*   单元测试（客户端）: `Jasmine`和`Karma`, 同类型：`Mocha`、`Chai`、`Sinon`、`Vows.js`以及`Qunit`
*   单元测试（服务端）: `Mocha`和`Supertest`, 同类型：与客户端一致，再加上`jasmine-node`
*   功能测试：`Casper.js`, 同类型：`Nightwatch.js`、`Zombie.js`、基于`Selenium`的(`Capybara`、`Waitr`等等)

