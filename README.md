# 张贤平的个人主页

这是一个基于GitHub Pages的个人主页项目，展示个人信息、项目作品和技术博客。

## 🌟 特性

- **响应式设计** - 适配各种设备和屏幕尺寸
- **现代化界面** - 使用现代CSS技术和动画效果
- **项目展示** - 展示个人项目和作品集
- **技术博客** - 分享技术文章和学习心得
- **交互体验** - 流畅的用户交互和动画效果

## 🛠️ 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript** - 交互功能和动效
- **GitHub Pages** - 静态网站托管
- **Font Awesome** - 图标库
- **Google Fonts** - 字体服务

## 📂 项目结构

```
zhangxianping.github.io/
├── index.html              # 首页
├── projects.html           # 项目展示页
├── blog.html              # 博客页面
├── _config.yml            # GitHub Pages配置
├── css/
│   └── styles.css         # 主样式文件
├── js/
│   └── main.js           # 主JavaScript文件
├── assets/
│   └── images/           # 图片资源
│       ├── default-avatar.svg
│       ├── project-placeholder.jpg
│       └── blog-placeholder.jpg
└── README.md             # 项目说明
```

## 🚀 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/zhangxianping/zhangxianping.github.io.git
   cd zhangxianping.github.io
   ```

2. **本地预览**
   - 直接在浏览器中打开 `index.html`
   - 或者使用本地服务器：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx serve .
   
   # 使用PHP
   php -S localhost:8000
   ```

3. **访问网站**
   ```
   http://localhost:8000
   ```

## 📝 自定义配置

### 1. 个人信息修改

编辑以下文件中的个人信息：
- `index.html` - 更新姓名、职业、描述等
- `_config.yml` - 更新网站配置
- `assets/images/` - 替换头像和项目图片

### 2. 添加项目

在 `projects.html` 中添加新的项目卡片：

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="项目名称">
        <!-- ... -->
    </div>
    <div class="project-content">
        <h3>项目名称</h3>
        <p>项目描述</p>
        <!-- ... -->
    </div>
</div>
```

### 3. 添加博客文章

在 `blog.html` 中添加新的文章卡片：

```html
<article class="post-card" data-category="技术分类">
    <div class="post-content">
        <h2><a href="posts/article-name.html">文章标题</a></h2>
        <p>文章摘要</p>
        <!-- ... -->
    </div>
</article>
```

## 🎨 样式定制

### CSS变量

在 `css/styles.css` 中修改CSS变量来自定义主题：

```css
:root {
    --primary-color: #6366f1;     /* 主色调 */
    --secondary-color: #8b5cf6;   /* 辅助色 */
    --accent-color: #06b6d4;      /* 强调色 */
    /* ... */
}
```

### 响应式断点

```css
/* 平板设备 */
@media (max-width: 768px) { ... }

/* 手机设备 */
@media (max-width: 480px) { ... }
```

## 🔧 部署到GitHub Pages

1. **创建GitHub仓库**
   - 仓库名必须是：`用户名.github.io`
   - 例如：`zhangxianping.github.io`

2. **推送代码**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库 Settings
   - 找到 Pages 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"

4. **访问网站**
   ```
   https://用户名.github.io
   ```

## 📱 功能特性

### 响应式设计
- 移动优先的设计方法
- 流畅的移动端导航菜单
- 自适应的网格布局

### 交互效果
- 平滑滚动导航
- 项目和博客过滤功能
- 滚动动画效果
- 浮动元素动画

### SEO优化
- 语义化HTML结构
- Meta标签优化
- 结构化数据
- 网站地图生成

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- **邮箱**: contact@zhangxianping.com
- **GitHub**: [@zhangxianping](https://github.com/zhangxianping)
- **网站**: https://zhangxianping.github.io

---

⭐ 如果这个项目对你有帮助，请给它一个星标！