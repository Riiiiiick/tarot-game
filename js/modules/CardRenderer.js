/**
 * CardRenderer类 - 渲染塔罗牌DOM元素
 * 职责：创建和渲染塔罗牌元素、处理牌的显示
 */
export class CardRenderer {
  constructor(container) {
    this.container = container;
  }

  /**
   * 渲染一张牌
   * @param {Object} card - 塔罗牌数据
   * @param {Object} position - 位置信息 {x, y, rotate}
   * @param {boolean} showBack - 是否显示牌背
   * @param {number} positionIndex - 在牌阵中的位置索引
   * @returns {Object} 包含牌元素和标签元素的对象
   */
  renderCard(card, position, showBack = true, positionIndex = 0) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.cardId = card.id;
    cardElement.dataset.position = positionIndex; // 添加位置索引

    // 设置位置
    cardElement.style.left = `${position.x}%`;
    cardElement.style.top = `${position.y}%`;

    // 如果有旋转角度
    if (position.rotate) {
      cardElement.dataset.baseRotate = position.rotate;
    }

    // 创建牌背
    const cardBack = this.createCardBack();
    cardElement.appendChild(cardBack);

    // 创建牌面
    const cardFront = this.createCardFront(card);
    cardElement.appendChild(cardFront);

    // 如果默认显示牌面
    if (!showBack) {
      cardElement.classList.add('flipped');
    }

    // 如果是逆位，添加逆位标记
    if (card.isReversed) {
      cardElement.classList.add('reversed');
    }

    return cardElement;
  }

  /**
   * 创建位置标签（独立于卡牌，不会翻转）
   * @param {string} label - 标签文本
   * @param {Object} position - 位置信息 {x, y}
   * @returns {HTMLElement} 标签元素
   */
  createPositionLabel(label, position) {
    const labelElement = document.createElement('div');
    labelElement.className = 'position-label';
    labelElement.textContent = label;

    // 使用与卡牌相同的x坐标
    // y坐标在卡牌下方：卡牌中心在y%，卡牌高度250px，所以底部在y% + 125px
    // 标签放在底部下方20px处
    labelElement.style.left = `${position.x}%`;
    labelElement.style.top = `calc(${position.y}% + 145px)`;
    labelElement.style.transform = 'translateX(-50%)';
    labelElement.style.position = 'absolute';

    return labelElement;
  }

  /**
   * 创建牌背
   */
  createCardBack() {
    const back = document.createElement('div');
    back.className = 'card-face card-back';

    const pattern = document.createElement('div');
    pattern.className = 'card-back-pattern';
    pattern.innerHTML = '✦';

    back.appendChild(pattern);
    return back;
  }

  /**
   * 创建牌面
   * @param {Object} card - 塔罗牌数据
   */
  createCardFront(card) {
    const front = document.createElement('div');
    front.className = 'card-face card-front';

    // 牌面内容
    const content = `
      <div class="card-header">
        <h3 class="card-name">${card.nameCN}</h3>
        <p class="card-name-en">${card.name}</p>
      </div>
      <div class="card-body">
        <div class="card-symbol">${this.getCardSymbol(card)}</div>
      </div>
      <div class="card-footer">
        <div class="card-keywords">
          ${card.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
        </div>
      </div>
    `;

    front.innerHTML = content;
    return front;
  }

  /**
   * 获取牌的符号
   */
  getCardSymbol(card) {
    const symbols = {
      major: '★',
      wands: '🔥',
      cups: '💧',
      swords: '💨',
      pentacles: '🌍'
    };
    return symbols[card.suit] || '✦';
  }

  /**
   * 清空容器中的所有牌
   */
  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }

  /**
   * 翻转一张牌
   * @param {HTMLElement} cardElement - 牌元素
   */
  flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
  }

  /**
   * 将牌添加到容器中
   * @param {HTMLElement} cardElement - 牌元素
   */
  addToContainer(cardElement) {
    if (this.container) {
      this.container.appendChild(cardElement);
    }
  }
}
