/**
 * SpreadManager类 - 管理牌阵和占卜流程
 * 职责：选择牌阵、执行占卜、生成解读结果
 */
export class SpreadManager {
  constructor(deck, spreadData) {
    this.deck = deck;
    this.spreads = spreadData;
    this.currentSpread = null;
    this.currentReading = null;
  }

  /**
   * 选择牌阵
   * @param {string} spreadId - 牌阵ID
   */
  selectSpread(spreadId) {
    if (this.spreads[spreadId]) {
      this.currentSpread = this.spreads[spreadId];
      return this.currentSpread;
    } else {
      throw new Error(`牌阵 ${spreadId} 不存在`);
    }
  }

  /**
   * 执行占卜
   * @returns {Object} 占卜结果
   */
  performReading() {
    if (!this.currentSpread) {
      throw new Error('请先选择牌阵');
    }

    // 洗牌
    this.deck.shuffle();

    // 抽牌
    const cards = this.deck.drawCards(this.currentSpread.cardCount);

    // 生成解读结果
    this.currentReading = {
      spread: this.currentSpread,
      cards: cards,
      positions: this.currentSpread.positions,
      timestamp: new Date()
    };

    return this.currentReading;
  }

  /**
   * 获取当前解读结果
   */
  getCurrentReading() {
    return this.currentReading;
  }

  /**
   * 获取当前牌阵
   */
  getCurrentSpread() {
    return this.currentSpread;
  }

  /**
   * 生成解读文本（用于显示）
   */
  generateInterpretationText() {
    if (!this.currentReading) {
      return null;
    }

    const interpretations = this.currentReading.cards.map((card, index) => {
      const position = this.currentReading.positions[index];
      return {
        position: position.label,
        card: `${card.nameCN}（${card.name}）`,
        orientation: card.isReversed ? '逆位' : '正位',
        meaning: card.interpretation.meaning,
        love: card.interpretation.love,
        career: card.interpretation.career,
        finance: card.interpretation.finance,
        keywords: card.keywords
      };
    });

    return interpretations;
  }

  /**
   * 重置占卜
   */
  reset() {
    this.currentReading = null;
  }
}
