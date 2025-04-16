#### 常用指令
npx playwright test --grep "demo"  执行指定测试
npx playwright test --ui --grep "demo"
npx playwright show-report 查看报告

npx playwright test --ui UI调试模式

#### 问题处理
缺少某个依赖时，切换到项目目录，并执行安装命令， 比如: npm install @axe-core/playwright --save-dev

代码仓库管理
git rm -r --cached .
git add .
git commit -m "Refresh .gitignore rules"


echo "# script_playwright" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:kvchs/script_playwright.git
git push -u origin main
