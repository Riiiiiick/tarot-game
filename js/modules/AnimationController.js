/**
 * AnimationController类 - 控制所有动画效果
 * 职责：翻牌动画、发牌动画、洗牌动画
 */
export class AnimationController {
  constructor() {
    this.isAnimating = false;
  }

  /**
   * 翻转一张牌的动画
   * @param {HTMLElement} cardElement - 牌元素
   * @returns {Promise} 动画完成的Promise
   */
  async flipCard(cardElement) {
    return new Promise((resolve) => {
      // 添加flipped类来触发翻转
      cardElement.classList.add('flipped');

      // 等待动画完成
      setTimeout(() => {
        cardElement.classList.remove('flipping');
        resolve();
      }, 600);
    });
  }

  /**
   * 发牌动画 - 从中心位置飞出到目标位置
   * @param {Array} cardElements - 牌元素数组
   * @param {number} delay - 每张牌之间的延迟（毫秒）
   * @returns {Promise} 所有动画完成的Promise
   */
  async dealCards(cardElements, delay = 300) {
    this.isAnimating = true;

    for (let i = 0; i < cardElements.length; i++) {
      const card = cardElements[i];

      // 先添加dealing类（初始状态：中心位置、缩小、透明）
      card.classList.add('dealing');

      // 等待CSS生效
      await new Promise(resolve => setTimeout(resolve, 50));

      // 移除dealing类，触发transition到目标位置（spread CSS定义）
      card.classList.remove('dealing');

      // 等待一段时间后再发下一张牌
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    // 等待最后一张牌完成动画
    await new Promise(resolve => setTimeout(resolve, 800));

    this.isAnimating = false;
  }

  /**
   * 洗牌动画效果
   * @param {HTMLElement} container - 容器元素
   * @returns {Promise} 动画完成的Promise
   */
  async shuffleAnimation(container) {
    return new Promise((resolve) => {
      if (container) {
        // 添加洗牌动画类
        container.classList.add('shuffling');

        // 创建洗牌提示文本
        const shufflingText = document.createElement('div');
        shufflingText.className = 'shuffling-text';
        shufflingText.textContent = '✦ 洗牌中... ✦';
        container.appendChild(shufflingText);

        // 1.5秒后移除动画和提示
        setTimeout(() => {
          container.classList.remove('shuffling');
          if (shufflingText.parentNode) {
            shufflingText.remove();
          }
          resolve();
        }, 1500);
      } else {
        resolve();
      }
    });
  }

  /**
   * 消失动画
   * @param {HTMLElement} element - 要消失的元素
   * @returns {Promise} 动画完成的Promise
   */
  async fadeOut(element) {
    return new Promise((resolve) => {
      element.style.transition = 'opacity 0.5s ease';
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.display = 'none';
        resolve();
      }, 500);
    });
  }

  /**
   * 出现动画
   * @param {HTMLElement} element - 要出现的元素
   * @returns {Promise} 动画完成的Promise
   */
  async fadeIn(element) {
    return new Promise((resolve) => {
      element.style.display = 'block';
      element.style.opacity = '0';
      element.style.transition = 'opacity 0.5s ease';

      setTimeout(() => {
        element.style.opacity = '1';
        setTimeout(resolve, 500);
      }, 10);
    });
  }

  /**
   * 检查是否正在执行动画
   */
  isPlaying() {
    return this.isAnimating;
  }
}
