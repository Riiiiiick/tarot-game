import { shuffle } from '../utils/shuffle.js';

/**
 * TarotDeck类 - 管理塔罗牌组
 * 职责：管理78张塔罗牌、洗牌、抽牌、重置
 */
export class TarotDeck {
  constructor(tarotData) {
    this.allCards = this.flattenCards(tarotData);
    this.remainingCards = [...this.allCards];
    this.drawnCards = [];
  }

  /**
   * 将塔罗牌数据扁平化为单一数组
   */
  flattenCards(data) {
    const cards = [];

    // 添加大阿卡那牌
    cards.push(...data.major);

    // 添加小阿卡那牌
    if (data.minor) {
      cards.push(...data.minor.wands);
      cards.push(...data.minor.cups);
      cards.push(...data.minor.swords);
      cards.push(...data.minor.pentacles);
    }

    return cards;
  }

  /**
   * 洗牌 - 使用Fisher-Yates算法
   */
  shuffle() {
    this.remainingCards = shuffle(this.remainingCards);
  }

  /**
   * 抽取一张牌
   * @returns {Object} 包含牌信息和正逆位的对象
   */
  drawCard() {
    if (this.remainingCards.length === 0) {
      throw new Error('牌组已抽完，请重置');
    }

    // 从剩余牌中随机抽取一张
    const randomIndex = Math.floor(Math.random() * this.remainingCards.length);
    const card = this.remainingCards.splice(randomIndex, 1)[0];

    // 随机决定正逆位（50%概率）
    const isReversed = Math.random() < 0.5;

    // 构建抽牌结果
    const drawnCard = {
      ...card,
      isReversed,
      interpretation: isReversed ? card.reversed : card.upright
    };

    this.drawnCards.push(drawnCard);
    return drawnCard;
  }

  /**
   * 抽取多张牌
   * @param {number} count - 要抽取的牌数
   * @returns {Array} 抽取的牌数组
   */
  drawCards(count) {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  }

  /**
   * 重置牌组 - 将所有牌放回并清空已抽牌
   */
  reset() {
    this.remainingCards = [...this.allCards];
    this.drawnCards = [];
  }

  /**
   * 获取剩余牌数
   */
  getRemainingCount() {
    return this.remainingCards.length;
  }

  /**
   * 获取已抽牌数
   */
  getDrawnCount() {
    return this.drawnCards.length;
  }

  /**
   * 获取总牌数
   */
  getTotalCount() {
    return this.allCards.length;
  }
}
