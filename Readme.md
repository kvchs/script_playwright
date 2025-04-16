#### 常用指令
npx playwright test --grep "demo"  执行指定测试
npx playwright test --ui --grep "demo"
npx playwright show-report 查看报告

npx playwright test --ui UI调试模式

#### 问题处理
缺少某个依赖时，切换到项目目录，并执行安装命令， 比如: npm install @axe-core/playwright --save-dev


