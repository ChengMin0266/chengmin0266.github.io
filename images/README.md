# 图片放这里

## 已有（按用途分类）

**intro 动画（别动）**
- `background.png` — intro 开场全屏背景
- `orange.png` — intro 里挂在树上、点屏后掉落的橙子

**首页 Selected Games 横向轮播（showcase-thumb-1..3）**
- `respond-to-signal-404-showcase.png` — 1（来源 `F:\英国\LDJAM2026\end2.png`，2026-05-25 添加）
- `interstellar-adventure.png` — 2
- `cook-human-on-time-showcase.jpg` — 3

**首页 All Projects 网格（grid-thumb-1..10）**
- `respond-to-signal-404.png` — 1（注意：和 showcase-1 是同一项目但用不同图）
- `interstellar-adventure.png` — 2（与 showcase-2 共用）
- `cook-human-on-time.png` — 3
- `invisible-egyptian-2023.jpg` — 4
- `mother.png` — 5
- `dr-smith.jpg` — 6
- `pop-meow.png` — 7
- `farting-symphony.png` — 8
- `hypha.png` — 9
- `grandmasday.png` — 10

**其他**
- `ahelpinghand.png` — 暂未挂到任何 class

## 待补 — 命名建议

**首页 Hero**
- `hero.jpg` — 1920x1200 横版（建议偏暗，因为白字标题压在上面）

**Personal 页面**
- `art-1.jpg` 到 `art-4.jpg` — 画作，600x800 竖版（3:4）
- `book-1.jpg`、`book-2.jpg` — 小说封面，400x600 竖版（2:3）

## 怎么替换占位

1. 把图片放进 `images/` 文件夹
2. 改 `style.css` 顶部对应 class 的 `background-image`，例如：

```css
/* 改前（渐变占位） */
.hero-image { background: linear-gradient(...); }

/* 改后 */
.hero-image { background-image: url('images/hero.jpg'); background-size: cover; }
```

注意 class 名对应关系：
- Hero 大图 → `.hero-image`
- 横向轮播 3 张 → `.showcase-thumb-1` / `-2` / `-3`
- 网格 10 项 → `.grid-thumb-1` 到 `.grid-thumb-10`
- 画作 → `.art-thumb-1` 到 `-4`
- 小说封面 → `.writing-cover-1` / `-2`

## showcase 和 grid 用同项目不同图的约定

`Respond to Signal 404` 在 showcase 和 grid 都出现：
- showcase（大卡 1600x1066）用 `respond-to-signal-404-showcase.png`（来自 LDJAM2026 的 end2.png，更适合大卡氛围）
- grid（小图 800x600）用 `respond-to-signal-404.png`（原始项目封面）

后续如果其他项目也想 showcase/grid 用不同图，沿用 `-showcase` 后缀命名。
