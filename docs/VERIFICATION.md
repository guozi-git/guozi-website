# 公开源码快照验证

日期：2026-09-28。

- 已在独立目录使用 npm ci 从锁文件安装，163 个包安装成功；当次 npm audit 报告 0 个漏洞，并不保证未来永久无漏洞。
- Node 24.21.0、npm 11.19.0、Next.js 16.3.6、React 19.3.0；未升级依赖。
- typecheck、lint、format:check、content:check、build 通过。
- 根路径与 /guozi-website/ 静态浏览器检查通过：图片、CSS 背景、子页直达和刷新、装备/游戏展开、长文、返回和 404。
- 10 项完整 Edge 交互测试通过，包含展开动画期间连续按 Esc 返回。真实手机/Safari 验收按计划推迟。
- 快照不携带旧 .git、开发文档、原始订单截图、未使用个人原图和本机路径配置。常见令牌/私钥及个人本机路径模式检查无匹配，不代表穷尽所有敏感信息。
- 检查 40 张栅格图片，未发现 GPS 标签。两张第三方商品图含方向、分辨率等 EXIF，未修改这些原有信息。
- 已连接公开仓库 guozi-git/guozi-website 并上传源码；隐藏配置已补齐，误上传的 tsconfig.tsbuildinfo 已移除。
- 提交 55cc7b5 的 GitHub Actions 根路径和仓库子路径检查均通过：[运行记录](https://github.com/guozi-git/guozi-website/actions/runs/36415238071)。后续检查结果以仓库最新 Actions 记录为准。
- Pages 未启用，PAGES_ENABLED 未设置；发布工作流跳过，没有部署。

后续统一在连接此远程仓库的工作副本维护，步骤见 MAINTENANCE.md。不要改用旧开发仓库直接推送全部历史。
