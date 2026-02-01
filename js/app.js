import { TAROT_CARDS } from './data/tarot-data.js';
import { SPREADS } from './data/spread-data.js';
import { TarotDeck } from './modules/TarotDeck.js';
import { SpreadManager } from './modules/SpreadManager.js';
import { CardRenderer } from './modules/CardRenderer.js';
import { AnimationController } from './modules/AnimationController.js';

/**
 * TarotGame - 塔罗牌占卜游戏主类
 */
class TarotGame {
  constructor() {
    // 初始化核心模块
    this.deck = new TarotDeck(TAROT_CARDS);
    this.spreadManager = new SpreadManager(this.deck, SPREADS);
    this.renderer = new CardRenderer(document.querySelector('.spread-container'));
    this.animator = new AnimationController();

    // 当前状态
    this.currentState = 'idle'; // idle, shuffled, drawn, reading
    this.currentCards = [];
    this.currentCardElements = []; // 保存当前牌的DOM元素

    // 初始化
    this.init();
  }

  /**
   * 初始化应用
   */
  init() {
    console.log('塔罗牌游戏初始化...');
    this.bindEvents();
    this.selectDefaultSpread();
    this.updateButtonStates();
  }

  /**
   * 绑定事件监听
   */
  bindEvents() {
    // 牌阵选择按钮
    document.querySelectorAll('.spread-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleSpreadSelect(e));
    });

    // 洗牌按钮
    const shuffleBtn = document.getElementById('shuffle-btn');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => this.handleShuffle());
    }

    // 抽牌按钮
    const drawBtn = document.getElementById('draw-btn');
    if (drawBtn) {
      drawBtn.addEventListener('click', () => this.handleDraw());
    }

    // 翻转所有牌按钮
    const flipAllBtn = document.getElementById('flip-all-btn');
    if (flipAllBtn) {
      flipAllBtn.addEventListener('click', () => this.handleFlipAll());
    }

    // 重置按钮
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.handleReset());
    }
  }

  /**
   * 选择默认牌阵
   */
  selectDefaultSpread() {
    this.spreadManager.selectSpread('single');
    this.updateSpreadButtons('single');
  }

  /**
   * 处理牌阵选择
   */
  handleSpreadSelect(e) {
    // 找到被点击的按钮元素（可能点击的是按钮内的文本）
    const button = e.target.closest('.spread-btn');
    if (!button) return;

    const spreadId = button.dataset.spread;
    if (spreadId) {
      this.spreadManager.selectSpread(spreadId);
      this.updateSpreadButtons(spreadId);

      // 如果已经抽过牌，则重置
      if (this.currentState !== 'idle') {
        this.handleReset();
      }
    }
  }

  /**
   * 更新牌阵按钮状态
   */
  updateSpreadButtons(activeId) {
    document.querySelectorAll('.spread-btn').forEach(btn => {
      if (btn.dataset.spread === activeId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  /**
   * 处理洗牌
   */
  async handleShuffle() {
    if (this.animator.isPlaying()) return;

    console.log('洗牌中...');

    // 显示洗牌动画
    const container = document.querySelector('.spread-container');
    await this.animator.shuffleAnimation(container);

    // 重置牌组
    this.deck.reset();
    this.deck.shuffle();

    this.currentState = 'shuffled';
    this.updateButtonStates();
    console.log('洗牌完成！');
  }

  /**
   * 处理抽牌
   */
  async handleDraw() {
    if (this.animator.isPlaying()) return;

    console.log('抽牌中...');

    // 执行占卜
    const reading = this.spreadManager.performReading();
    this.currentCards = reading.cards;
    const spread = reading.spread;

    // 所有牌阵都使用普通模式显示（不再使用弹窗）
    this.showNormalSpread(reading);

    this.currentState = 'drawn';
    this.updateButtonStates();
    console.log('抽牌完成！点击牌面查看解读。');
  }

  /**
   * 在普通模式下显示牌阵（1-3张牌）
   */
  async showNormalSpread(reading) {
    const container = document.querySelector('.spread-container');

    // 清空之前的牌
    this.renderer.clear();
    this.hideInterpretation();

    // 更新容器类名
    container.className = 'spread-container';
    const spreadClass = `spread-${reading.spread.id.toLowerCase().replace('card', '')}`;
    container.classList.add(spreadClass);

    // 渲染牌和标签
    const cardElements = [];
    reading.cards.forEach((card, index) => {
      const posConfig = reading.positions[index];
      const cardElement = this.renderer.renderCard(card, posConfig.position, true, index);

      // 创建独立的位置标签
      const label = this.renderer.createPositionLabel(posConfig.label, posConfig.position);

      cardElements.push(cardElement);
      this.renderer.addToContainer(cardElement);
      this.renderer.addToContainer(label);
    });

    // 保存当前牌元素
    this.currentCardElements = cardElements;

    // 执行发牌动画
    await this.animator.dealCards(cardElements, 300);

    // 绑定点击翻牌事件
    this.bindCardFlipEvents(cardElements, reading.cards);
  }

  /**
   * 在弹窗中显示牌阵（5张及以上）
   */
  async showModalSpread(reading) {
    const modal = document.getElementById('spread-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContainer = document.getElementById('modal-spread-container');

    // 清空之前的内容
    this.hideInterpretation();
    modalContainer.innerHTML = '';

    // 设置标题
    modalTitle.textContent = `${reading.spread.nameCN} - ${reading.spread.description}`;

    // 更新容器类名
    modalContainer.className = 'modal-spread-container';
    const spreadClass = `spread-${reading.spread.id.toLowerCase().replace('card', '')}`;
    modalContainer.classList.add(spreadClass);

    // 临时渲染器（用于弹窗）
    const { CardRenderer } = await import('./modules/CardRenderer.js');
    const modalRenderer = new CardRenderer(modalContainer);

    // 渲染牌和标签
    const cardElements = [];
    reading.cards.forEach((card, index) => {
      const posConfig = reading.positions[index];
      const cardElement = modalRenderer.renderCard(card, posConfig.position, true, index);

      // 创建独立的位置标签
      const label = modalRenderer.createPositionLabel(posConfig.label, posConfig.position);

      cardElements.push(cardElement);
      modalRenderer.addToContainer(cardElement);
      modalRenderer.addToContainer(label);
    });

    // 显示弹窗
    modal.style.display = 'flex';

    // 执行发牌动画
    await this.animator.dealCards(cardElements, 300);

    // 绑定点击翻牌事件
    this.bindCardFlipEvents(cardElements, reading.cards);

    // 绑定关闭按钮
    const closeBtn = document.getElementById('modal-close-btn');
    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };

    // 点击背景关闭
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };
  }

  /**
   * 绑定卡牌翻转事件
   */
  bindCardFlipEvents(cardElements, cards) {
    cardElements.forEach((element, index) => {
      element.addEventListener('click', async () => {
        // 将所有卡牌的z-index重置
        cardElements.forEach(el => {
          el.style.zIndex = '1';
        });

        // 将当前点击的卡牌置于最上层
        element.style.zIndex = '999';

        // 如果已经翻转或正在翻转，只更新层级，不再翻转
        if (element.classList.contains('flipped') || element.classList.contains('flipping')) {
          return;
        }

        // 添加翻转中标记
        element.classList.add('flipping');

        // 翻牌
        await this.animator.flipCard(element);

        // 移除翻转中标记（AnimationController已经处理了，但为了保险再次确认）
        element.classList.remove('flipping');

        // 显示该牌的解读
        this.showCardInterpretation(cards[index], index);

        // 检查是否所有牌都已翻开
        const allFlipped = cardElements.every(el => el.classList.contains('flipped'));
        if (allFlipped && this.currentState !== 'reading') {
          this.currentState = 'reading';
          this.showFullInterpretation();
        }
      });
    });
  }

  /**
   * 显示单张牌的解读
   */
  showCardInterpretation(card, index) {
    console.log(`${card.nameCN} (${card.isReversed ? '逆位' : '正位'}):`, card.interpretation.meaning);
  }

  /**
   * 显示完整解读
   */
  showFullInterpretation() {
    const panel = document.querySelector('.interpretation-panel');
    if (!panel) {
      console.error('找不到解读面板元素');
      return;
    }

    const interpretationsContainer = panel.querySelector('.card-interpretations');
    if (!interpretationsContainer) {
      console.error('找不到解读容器元素');
      return;
    }

    interpretationsContainer.innerHTML = '';

    const interpretations = this.spreadManager.generateInterpretationText();
    console.log('生成解读:', interpretations);

    interpretations.forEach((interp, index) => {
      const item = document.createElement('div');
      item.className = 'interpretation-item fade-in';
      item.style.animationDelay = `${index * 0.1}s`;

      item.innerHTML = `
        <h4>${interp.position}</h4>
        <div class="card-title">${interp.card}</div>
        <span class="orientation">${interp.orientation}</span>
        <div class="keywords">
          ${interp.keywords.map(kw => `<span class="keyword">${kw}</span>`).join('')}
        </div>
        <div class="meaning">${interp.meaning}</div>
        <div class="details">
          <div><strong>💕 爱情：</strong>${interp.love}</div>
          <div><strong>💼 事业：</strong>${interp.career}</div>
          <div><strong>💰 财运：</strong>${interp.finance}</div>
        </div>
      `;

      interpretationsContainer.appendChild(item);
    });

    // 显示解读面板
    panel.style.display = 'block';
    // 使用CSS动画淡入
    setTimeout(() => {
      panel.style.opacity = '1';
    }, 10);

    console.log('解读面板已显示');
  }

  /**
   * 隐藏解读面板
   */
  hideInterpretation() {
    const panel = document.querySelector('.interpretation-panel');
    if (panel) {
      panel.style.opacity = '0';
      setTimeout(() => {
        panel.style.display = 'none';
      }, 300);
    }
  }

  /**
   * 处理翻转所有牌
   */
  async handleFlipAll() {
    if (this.animator.isPlaying() || !this.currentCardElements.length) return;

    console.log('翻转所有牌...');

    // 找出所有未翻转的牌
    const unflippedCards = this.currentCardElements.filter(
      el => !el.classList.contains('flipped')
    );

    if (unflippedCards.length === 0) {
      console.log('所有牌已翻转');
      return;
    }

    // 依次翻转每张牌
    for (let i = 0; i < unflippedCards.length; i++) {
      const element = unflippedCards[i];
      const index = this.currentCardElements.indexOf(element);

      // 将当前牌置于最上层
      this.currentCardElements.forEach(el => {
        el.style.zIndex = '1';
      });
      element.style.zIndex = '999';

      // 翻牌
      element.classList.add('flipping');
      await this.animator.flipCard(element);
      element.classList.remove('flipping');

      // 显示该牌的解读
      this.showCardInterpretation(this.currentCards[index], index);

      // 短暂延迟再翻下一张
      if (i < unflippedCards.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 400));
      }
    }

    // 所有牌翻转完成，显示完整解读
    if (this.currentState !== 'reading') {
      this.currentState = 'reading';
      this.showFullInterpretation();
    }

    // 更新按钮状态（禁用翻转所有牌按钮）
    this.updateButtonStates();

    console.log('所有牌翻转完成！');
  }

  /**
   * 处理重置
   */
  handleReset() {
    console.log('重置游戏...');

    // 重置牌组
    this.deck.reset();
    this.spreadManager.reset();

    // 清空渲染
    this.renderer.clear();

    // 隐藏解读
    this.hideInterpretation();

    // 关闭弹窗（如果打开的话）
    const modal = document.getElementById('spread-modal');
    if (modal) {
      modal.style.display = 'none';
    }

    // 重置状态
    this.currentState = 'idle';
    this.currentCards = [];
    this.currentCardElements = [];

    // 更新按钮状态
    this.updateButtonStates();

    console.log('重置完成！');
  }

  /**
   * 更新按钮状态
   */
  updateButtonStates() {
    const shuffleBtn = document.getElementById('shuffle-btn');
    const drawBtn = document.getElementById('draw-btn');
    const flipAllBtn = document.getElementById('flip-all-btn');
    const resetBtn = document.getElementById('reset-btn');

    // 洗牌按钮始终可用
    if (shuffleBtn) {
      shuffleBtn.disabled = false;
    }

    // 抽牌按钮在洗牌后可用
    if (drawBtn) {
      drawBtn.disabled = this.currentState === 'idle';
    }

    // 翻转所有牌按钮：只在抽牌后且还有未翻转的牌时显示和启用
    if (flipAllBtn) {
      if (this.currentState === 'drawn' || this.currentState === 'reading') {
        flipAllBtn.style.display = 'inline-block';
        // 检查是否还有未翻转的牌
        const hasUnflipped = this.currentCardElements.some(
          el => !el.classList.contains('flipped')
        );
        flipAllBtn.disabled = !hasUnflipped;
      } else {
        flipAllBtn.style.display = 'none';
      }
    }

    // 重置按钮在抽牌后可用
    if (resetBtn) {
      resetBtn.disabled = this.currentState === 'idle';
    }
  }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  console.log('页面加载完成，启动塔罗牌游戏...');
  new TarotGame();
});
