# 首次发布到 GitHub Pages

准备的仓库名称：guozi-website；可见性：Public。默认站点地址形式为 `https://你的GitHub账号.github.io/guozi-website/`，这是格式示例，尚未确定账号或创建仓库。

## 上传源码

1. 登录 GitHub，创建名为 guozi-website 的公开仓库。若通过 Git 推送，创建空仓库，不预先生成 README 或许可证。
2. 上传本目录中的源码，保留 .github/workflows 等点开头的配置文件。不要把 ZIP 文件本身或整个外层目录作为网站代码上传；package.json 应处于仓库根目录。
3. 建议使用 GitHub Desktop 的添加本地仓库及发布功能，或在本目录初始化 Git 后推送。首次提交使用你自己确认的 Git 姓名与邮箱，不使用环境中猜测的身份。
4. 不要上传原开发目录的 .git；这个快照有意不携带旧历史。不要上传 node_modules、out、.next、.preview 或 .env。

## 验证并发布

1. 上传后先查看 Actions → Verify static website，两个路径构建均应通过。
2. Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
3. Settings → Secrets and variables → Actions → Variables 新建 PAGES_ENABLED，值设为 true。无需提供个人访问令牌。
4. Actions → Publish GitHub Pages → Run workflow，选择 main。
5. 发布成功后使用任务给出的真实网址访问。后续 main 提交会自动更新。

工作流使用仓库自动提供的 GITHUB_TOKEN。若账号要求重新登录、双重验证或组织批准，由账号持有者在 GitHub 界面完成。

## 本地模拟仓库路径（PowerShell）

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/guozi-website'
$env:NEXT_TELEMETRY_DISABLED = '1'
npm run build
npm start -- --port 3100 --base-path /guozi-website
```

另开终端运行：

```powershell
npm run test:static -- http://127.0.0.1:3100/guozi-website/
```

切回根路径时清空 NEXT_PUBLIC_BASE_PATH 并重新构建。公开网址由发布流程注入 NEXT_PUBLIC_SITE_URL，INDEX_SITE=true 开启索引。本地默认 noindex。

目前未运行线上 Actions、未部署；真实网址、分享抓取和真实手机验收留待上线后完成。不要把本地模拟检查当成线上验证。

参考：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
