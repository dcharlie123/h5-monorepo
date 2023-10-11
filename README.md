# h5-monorepo
### pnpm 基础
- -D 开发依赖
- -w monorepo 环境默认会认为应该将依赖安装到具体的 package中。使用 -w 参数，告诉 pnpm 将依赖安装到 workspace-root，也就是项目的根目录。
- --filter 选择一个确切的包

### 使用
- 安装全局依赖 `pnpm add xxx -w`
- 安装全局开发依赖 `pnpm add xxx -D -w`
- 运行某个h5 `pnpm --filter=xxx serve`（注：xxx指的是package.json中name即包名）或者`pnpm --dir=路径 serve`
- 打包某个h5 `pnpm --filter=xxx build`
- 生成h5文件 `pnpm -w gen`
