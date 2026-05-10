# 图片放这里

## 命名建议

**首页 hero**
- `hero.jpg` — 首页大图（建议 1920x1200，横版）

**Bento 作品（首页 Selected Games）**
- `project-1.jpg` — 代表作主图（大块，建议 1600x1200）
- `project-2.jpg`、`project-3.jpg` — 右侧两个副作品（建议 800x600）
- `project-4.jpg`、`project-5.jpg`、`project-6.jpg` — 底部三个小块（建议 800x600）

**Personal 页面**
- `art-1.jpg` 到 `art-4.jpg` — 画作（建议 600x800 竖版）
- `book-1.jpg`、`book-2.jpg` — 小说封面（建议 400x600 竖版）

## 怎么替换占位

替换图片有两步：
1. 把图片放进 `images/` 文件夹（用上面的命名）
2. 改 `style.css` 顶部对应的渐变色块，比如：

```css
/* 改前 */
.bento-thumb-1 { background: linear-gradient(135deg, #c9a87c 0%, ...); }

/* 改后 */
.bento-thumb-1 { background: url('images/project-1.jpg') center/cover; }
```

hero 大图改 `.hero-image`，画作改 `.art-thumb-1` 到 4，小说封面改 `.writing-cover-1` / 2。
