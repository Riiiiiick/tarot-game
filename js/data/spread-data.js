// 牌阵配置数据
export const SPREADS = {
  // 单张牌阵
  single: {
    id: "single",
    name: "Single Card",
    nameCN: "每日一卡",
    cardCount: 1,
    description: "快速了解当前状况或获得每日指引",
    positions: [
      {
        index: 0,
        label: "当前状态",
        labelEN: "Current State",
        position: { x: 50, y: 50 }
      }
    ]
  },

  // 三牌阵
  threeCard: {
    id: "threeCard",
    name: "Three Card Spread",
    nameCN: "三牌阵",
    cardCount: 3,
    description: "探索过去、现在、未来的时间线",
    positions: [
      {
        index: 0,
        label: "过去",
        labelEN: "Past",
        position: { x: 25, y: 50 }
      },
      {
        index: 1,
        label: "现在",
        labelEN: "Present",
        position: { x: 50, y: 50 }
      },
      {
        index: 2,
        label: "未来",
        labelEN: "Future",
        position: { x: 75, y: 50 }
      }
    ]
  },

  // 五牌阵
  fiveCard: {
    id: "fiveCard",
    name: "Five Card Spread",
    nameCN: "五牌阵",
    cardCount: 5,
    description: "深入了解问题的各个方面",
    positions: [
      {
        index: 0,
        label: "现状",
        labelEN: "Current Situation",
        position: { x: 50, y: 50 }
      },
      {
        index: 1,
        label: "挑战",
        labelEN: "Challenge",
        position: { x: 20, y: 50 }
      },
      {
        index: 2,
        label: "过去影响",
        labelEN: "Past Influence",
        position: { x: 50, y: 20 }
      },
      {
        index: 3,
        label: "未来可能",
        labelEN: "Future Potential",
        position: { x: 50, y: 80 }
      },
      {
        index: 4,
        label: "建议",
        labelEN: "Advice",
        position: { x: 80, y: 50 }
      }
    ]
  },

  // 凯尔特十字牌阵
  celticCross: {
    id: "celticCross",
    name: "Celtic Cross",
    nameCN: "凯尔特十字",
    cardCount: 10,
    description: "最全面深入的塔罗牌阵，揭示问题的方方面面",
    positions: [
      {
        index: 0,
        label: "现状",
        labelEN: "Present",
        position: { x: 40, y: 50 }
      },
      {
        index: 1,
        label: "挑战/障碍",
        labelEN: "Challenge",
        position: { x: 40, y: 50 },
        rotate: 90
      },
      {
        index: 2,
        label: "潜意识/根源",
        labelEN: "Foundation",
        position: { x: 40, y: 70 }
      },
      {
        index: 3,
        label: "过去",
        labelEN: "Past",
        position: { x: 25, y: 50 }
      },
      {
        index: 4,
        label: "目标/最佳可能",
        labelEN: "Crown",
        position: { x: 40, y: 30 }
      },
      {
        index: 5,
        label: "近期未来",
        labelEN: "Near Future",
        position: { x: 55, y: 50 }
      },
      {
        index: 6,
        label: "你的态度",
        labelEN: "Self",
        position: { x: 75, y: 80 }
      },
      {
        index: 7,
        label: "外部影响",
        labelEN: "Environment",
        position: { x: 75, y: 62 }
      },
      {
        index: 8,
        label: "希望/恐惧",
        labelEN: "Hopes/Fears",
        position: { x: 75, y: 44 }
      },
      {
        index: 9,
        label: "最终结果",
        labelEN: "Outcome",
        position: { x: 75, y: 26 }
      }
    ]
  }
};

// 导出所有可用的牌阵ID
export const SPREAD_IDS = Object.keys(SPREADS);

// 获取牌阵配置的辅助函数
export function getSpread(spreadId) {
  return SPREADS[spreadId] || SPREADS.single;
}
