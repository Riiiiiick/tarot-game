# 塔罗牌占卜游戏

一个功能完整的塔罗牌推算HTML5小游戏，包含78张完整塔罗牌、多种牌阵选择、精美的3D翻牌动画和神秘主题UI。

## 功能特性

### 完整的塔罗牌系统
- **78张完整塔罗牌**
  - 22张大阿卡那（Major Arcana）
  - 56张小阿卡那（Minor Arcana）
    - 权杖牌组（Wands）- 火元素
    - 圣杯牌组（Cups）- 水元素
    - 宝剑牌组（Swords）- 风元素
    - 星币牌组（Pentacles）- 土元素

### 多种牌阵可选
- **每日一卡** - 快速了解当前状况
- **三牌阵** - 探索过去、现在、未来
- **五牌阵** - 深入洞察问题各个方面
- **凯尔特十字** - 最全面深入的牌阵分析

### 丰富的功能
- ✨ 正逆位系统 - 每张牌包含正位和逆位解读
- 🎴 详细解读 - 包含总体含义、爱情、事业、财运四个方面
- 🔮 多维度关键词 - 每张牌都有关键词标签
- 🎨 神秘主题UI - 深色背景配合紫金配色
- ✨ 精美动画 - CSS3 3D翻牌、洗牌、发牌动画
- 📱 响应式设计 - 完美支持桌面和移动端

## 技术栈

- **纯HTML5** - 语义化标签
- **CSS3** - 变量、渐变、3D变换、动画
- **原生JavaScript** - ES6+模块化开发
- **无依赖** - 不依赖任何第三方库

## 项目结构

```
tarot-game/
├── index.html              # 主页面
├── css/                    # 样式文件
│   ├── main.css           # 全局样式和主题
│   ├── cards.css          # 塔罗牌样式
│   ├── animations.css     # 动画效果
│   └── spreads.css        # 牌阵布局
├── js/                     # JavaScript文件
│   ├── app.js             # 应用主入口
│   ├── data/              # 数据文件
│   │   ├── tarot-data.js  # 78张塔罗牌数据
│   │   └── spread-data.js # 牌阵配置
│   ├── modules/           # 核心模块
│   │   ├── TarotDeck.js           # 塔罗牌组管理
│   │   ├── CardRenderer.js        # 牌面渲染
│   │   ├── SpreadManager.js       # 牌阵管理
│   │   └── AnimationController.js # 动画控制
│   └── utils/             # 工具函数
│       └── shuffle.js     # 洗牌算法
└── README.md              # 项目说明
```

## 使用说明

### 本地运行

1. 克隆或下载项目到本地
2. 由于使用了ES6模块，需要通过HTTP服务器运行

**方法一：使用Python（推荐）**
```bash
# Python 3
cd tarot-game
python -m http.server 8000

# 访问 http://localhost:8000
```

**方法二：使用Node.js**
```bash
# 安装http-server
npm install -g http-server

# 运行
cd tarot-game
http-server

# 访问 http://localhost:8080
```

**方法三：使用VS Code**
- 安装 "Live Server" 扩展
- 右键点击 index.html
- 选择 "Open with Live Server"

### 游戏流程

1. **选择牌阵** - 根据你的问题选择合适的牌阵
2. **洗牌** - 点击"洗牌"按钮打乱牌组
3. **抽牌** - 点击"抽牌"按钮进行占卜
4. **查看解读** - 点击牌面翻转查看详细解读
5. **重新开始** - 点击"重新开始"进行新的占卜

## 核心实现

### 洗牌算法
使用Fisher-Yates洗牌算法确保随机性：
```javascript
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
```

### 3D翻牌动画
使用CSS3的transform-style和backface-visibility实现：
```css
.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card.flipped {
  transform: rotateY(180deg);
}
```

### 正逆位系统
每次抽牌时随机决定正逆位（50%概率）：
```javascript
const isReversed = Math.random() < 0.5;
```

## 浏览器兼容性

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- 移动端浏览器（iOS Safari, Chrome Mobile）

建议使用最新版本的现代浏览器以获得最佳体验。

## 许可证

本项目仅供学习和娱乐使用。塔罗牌解读内容仅供参考，不构成任何建议。

## 作者

使用Claude Code创建

## 更新日志

### v1.0.0 (2026-01-11)
- ✨ 初始版本发布
- 🎴 实现78张完整塔罗牌
- 🔮 支持4种牌阵（单张、三牌、五牌、凯尔特十字）
- 🎨 神秘主题UI设计
- ✨ 3D翻牌动画
- 📱 响应式布局

## 致谢

感谢所有塔罗牌爱好者的支持！

---

**免责声明：** 本游戏仅供娱乐，塔罗牌占卜结果不构成任何人生建议。请理性对待占卜结果。
