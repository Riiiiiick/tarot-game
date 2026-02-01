// 塔罗牌数据 - 78张完整塔罗牌
export const TAROT_CARDS = {
  // 22张大阿卡那牌
  major: [
    {
      id: 0,
      name: "The Fool",
      nameCN: "愚者",
      suit: "major",
      keywords: ["新开始", "冒险", "天真", "自由"],
      upright: {
        meaning: "代表新的开始、冒险精神和无限可能。愚者鼓励你勇敢踏出第一步，以开放的心态拥抱未知。",
        love: "可能遇到新的恋情，或在感情中找回初心。保持真诚和开放的态度。",
        career: "适合尝试新项目或转换跑道。跟随直觉，不要过度思考。",
        finance: "财务上可能有新的机会，但需谨慎冒险。"
      },
      reversed: {
        meaning: "表示鲁莽、不负责任或错失机会。需要更加谨慎和计划周全。",
        love: "感情上可能过于冲动或不够成熟，需要更多思考。",
        career: "避免冒进，当前不是冒险的好时机。",
        finance: "警惕不必要的风险和草率的投资决定。"
      }
    },
    {
      id: 1,
      name: "The Magician",
      nameCN: "魔术师",
      suit: "major",
      keywords: ["创造力", "技能", "意志力", "行动"],
      upright: {
        meaning: "象征拥有实现目标的所有资源和能力。是时候将想法付诸行动了。",
        love: "充满魅力和吸引力，能够创造理想的关系。",
        career: "运用你的技能和才华，现在是展现能力的好时机。",
        finance: "善用资源，财务状况可以得到改善。"
      },
      reversed: {
        meaning: "能力未被充分利用，或才能被误用。可能存在欺骗或操纵。",
        love: "可能在感情中不够真诚或过度算计。",
        career: "技能未得到发挥，或方向不明确。",
        finance: "警惕金融欺诈，避免投机取巧。"
      }
    },
    {
      id: 2,
      name: "The High Priestess",
      nameCN: "女祭司",
      suit: "major",
      keywords: ["直觉", "神秘", "潜意识", "智慧"],
      upright: {
        meaning: "代表内在智慧和直觉。倾听内心的声音，答案就在你心中。",
        love: "感情需要时间发展，倾听直觉而非理性分析。",
        career: "相信自己的判断，可能有隐藏的信息尚未揭晓。",
        finance: "保持观望，不要急于做决定。"
      },
      reversed: {
        meaning: "忽视直觉，过度依赖理性。或被秘密和隐瞒所困扰。",
        love: "沟通不畅，可能有隐瞒或误解。",
        career: "信息不透明，需要更多调查。",
        finance: "隐藏的费用或未知的财务问题。"
      }
    },
    {
      id: 3,
      name: "The Empress",
      nameCN: "皇后",
      suit: "major",
      keywords: ["丰饶", "母性", "美丽", "自然"],
      upright: {
        meaning: "象征丰盛、创造力和滋养。是收获和成长的时期。",
        love: "充满爱和关怀的关系，可能有怀孕或家庭喜讯。",
        career: "创意项目蓬勃发展，团队关系和谐。",
        finance: "财务丰盛，投资可能有好的回报。"
      },
      reversed: {
        meaning: "创造力受阻，过度依赖他人。可能忽视自我照顾。",
        love: "感情中缺乏关怀，或过度付出而忽略自己。",
        career: "创意枯竭，工作缺乏热情。",
        finance: "过度消费，需要节制。"
      }
    },
    {
      id: 4,
      name: "The Emperor",
      nameCN: "皇帝",
      suit: "major",
      keywords: ["权威", "结构", "控制", "稳定"],
      upright: {
        meaning: "代表权威、秩序和稳固的基础。需要建立规则和结构。",
        love: "关系稳定可靠，可能需要更多承诺。",
        career: "展现领导力，建立系统和秩序。",
        finance: "财务管理得当，稳定增长。"
      },
      reversed: {
        meaning: "过度控制或滥用权力。缺乏纪律或结构混乱。",
        love: "关系中权力失衡，可能过于强势或软弱。",
        career: "管理不善，缺乏有效的领导。",
        finance: "财务混乱，需要更好的规划。"
      }
    },
    {
      id: 5,
      name: "The Hierophant",
      nameCN: "教皇",
      suit: "major",
      keywords: ["传统", "教育", "信仰", "导师"],
      upright: {
        meaning: "代表传统价值观和正统的学习。寻求导师或遵循既定规则。",
        love: "传统的关系模式，可能走向婚姻或正式承诺。",
        career: "遵循规则和程序，寻求专业建议。",
        finance: "保守的理财方式，寻求专业财务顾问。"
      },
      reversed: {
        meaning: "打破传统，寻找新的道路。可能质疑权威或教条。",
        love: "非传统的关系，挑战常规。",
        career: "创新思维，不拘泥于传统方法。",
        finance: "探索新的投资方式，但要谨慎。"
      }
    },
    {
      id: 6,
      name: "The Lovers",
      nameCN: "恋人",
      suit: "major",
      keywords: ["爱情", "选择", "和谐", "价值观"],
      upright: {
        meaning: "代表深刻的连接和重要的选择。关于价值观的决定。",
        love: "深刻的爱情关系，心灵契合。",
        career: "价值观相符的合作关系，重要的职业选择。",
        finance: "与伴侣共同的财务决策。"
      },
      reversed: {
        meaning: "关系失衡，价值观冲突。难以做出选择。",
        love: "感情不和谐，价值观不匹配。",
        career: "合作关系紧张，价值观冲突。",
        finance: "财务决策分歧。"
      }
    },
    {
      id: 7,
      name: "The Chariot",
      nameCN: "战车",
      suit: "major",
      keywords: ["意志力", "决心", "胜利", "控制"],
      upright: {
        meaning: "通过决心和自律实现目标。克服障碍，勇往直前。",
        love: "积极追求爱情，克服关系中的障碍。",
        career: "坚定的目标导向，即将取得成功。",
        finance: "通过努力工作改善财务状况。"
      },
      reversed: {
        meaning: "失去控制，方向迷失。缺乏专注或过度控制。",
        love: "感情方向不明，缺乏共同目标。",
        career: "缺乏动力，目标不清晰。",
        finance: "财务失控，需要重新规划。"
      }
    },
    {
      id: 8,
      name: "Strength",
      nameCN: "力量",
      suit: "major",
      keywords: ["勇气", "耐心", "同情心", "自控"],
      upright: {
        meaning: "内在的力量和勇气。以温柔和耐心克服挑战。",
        love: "以爱和理解处理关系中的困难。",
        career: "坚韧不拔，以冷静应对挑战。",
        finance: "保持耐心，稳步改善财务。"
      },
      reversed: {
        meaning: "自我怀疑，缺乏信心。或过于强势和好斗。",
        love: "感情中缺乏耐心或过于软弱。",
        career: "信心不足，或过于激进。",
        finance: "冲动消费或过度保守。"
      }
    },
    {
      id: 9,
      name: "The Hermit",
      nameCN: "隐士",
      suit: "major",
      keywords: ["内省", "寻找", "智慧", "孤独"],
      upright: {
        meaning: "需要独处和内省的时间。寻找内在的智慧和答案。",
        love: "需要独处时间思考感情，或等待合适的人。",
        career: "深入研究和学习，寻找真正的职业方向。",
        finance: "谨慎理财，避免冲动消费。"
      },
      reversed: {
        meaning: "过度孤立，逃避现实。或拒绝内省和成长。",
        love: "过度封闭自己，害怕建立亲密关系。",
        career: "孤立工作导致效率低下。",
        finance: "过于保守，错失机会。"
      }
    },
    {
      id: 10,
      name: "Wheel of Fortune",
      nameCN: "命运之轮",
      suit: "major",
      keywords: ["命运", "变化", "循环", "机会"],
      upright: {
        meaning: "人生的转折点，好运即将来临。顺应变化的循环。",
        love: "关系进入新阶段，命运般的相遇。",
        career: "职业转机，把握机会。",
        finance: "财运好转，意外之财。"
      },
      reversed: {
        meaning: "运气不佳，抗拒变化。需要接受生命的循环。",
        love: "感情陷入低谷，需要耐心等待。",
        career: "职业遇到挫折，暂时的困难。",
        finance: "财务波动，避免赌博心态。"
      }
    },
    {
      id: 11,
      name: "Justice",
      nameCN: "正义",
      suit: "major",
      keywords: ["公平", "真相", "法律", "因果"],
      upright: {
        meaning: "公平的判决，真相将被揭示。因果报应，诚实待人。",
        love: "关系中需要公平和诚实，或法律相关的承诺。",
        career: "公正的评价和回报，合同和法律事务。",
        finance: "财务公平，税务或法律相关事宜。"
      },
      reversed: {
        meaning: "不公平待遇，逃避责任。偏见或不诚实。",
        love: "关系不平衡，缺乏诚实。",
        career: "不公正的对待，法律纠纷。",
        finance: "财务不公，税务问题。"
      }
    },
    {
      id: 12,
      name: "The Hanged Man",
      nameCN: "倒吊人",
      suit: "major",
      keywords: ["牺牲", "等待", "新视角", "释放"],
      upright: {
        meaning: "换个角度看问题，暂时的牺牲带来长远的收获。耐心等待。",
        love: "需要放下控制，接受关系的自然发展。",
        career: "暂停和反思，改变工作方式。",
        finance: "暂时的财务停滞，需要耐心。"
      },
      reversed: {
        meaning: "无谓的牺牲，拖延不决。抗拒改变视角。",
        love: "徒劳的付出，需要重新评估。",
        career: "停滞不前，缺乏进展。",
        finance: "财务被套牢，需要新策略。"
      }
    },
    {
      id: 13,
      name: "Death",
      nameCN: "死神",
      suit: "major",
      keywords: ["转变", "结束", "重生", "释放"],
      upright: {
        meaning: "旧事物的结束，为新生腾出空间。必要的转变和蜕变。",
        love: "关系的转型或结束，为新的开始做准备。",
        career: "职业生涯的重大转变，旧工作的结束。",
        finance: "财务状况的重大改变。"
      },
      reversed: {
        meaning: "抗拒改变，无法放手。停滞不前。",
        love: "执着于过去，无法向前。",
        career: "害怕改变，错失转型机会。",
        finance: "财务转型受阻。"
      }
    },
    {
      id: 14,
      name: "Temperance",
      nameCN: "节制",
      suit: "major",
      keywords: ["平衡", "耐心", "调和", "适度"],
      upright: {
        meaning: "寻找生活的平衡，耐心和节制。融合对立的元素。",
        love: "关系和谐平衡，相互包容。",
        career: "团队合作，平衡工作与生活。",
        finance: "理财得当，收支平衡。"
      },
      reversed: {
        meaning: "失衡，过度或缺乏节制。不耐烦，缺乏和谐。",
        love: "关系失衡，缺乏中庸之道。",
        career: "工作生活失衡，缺乏协调。",
        finance: "过度消费或过度节俭。"
      }
    },
    {
      id: 15,
      name: "The Devil",
      nameCN: "恶魔",
      suit: "major",
      keywords: ["束缚", "诱惑", "物质", "执着"],
      upright: {
        meaning: "被欲望和物质束缚。需要认识到自己的枷锁并寻求解脱。",
        love: "不健康的依赖关系，占有欲或诱惑。",
        career: "被工作束缚，或不道德的商业行为。",
        finance: "物质主义，债务或成瘾性消费。"
      },
      reversed: {
        meaning: "从束缚中解脱，克服诱惑。认识到问题并寻求改变。",
        love: "从不健康的关系中走出。",
        career: "摆脱toxic的工作环境。",
        finance: "债务减轻，戒除不良消费习惯。"
      }
    },
    {
      id: 16,
      name: "The Tower",
      nameCN: "高塔",
      suit: "major",
      keywords: ["突变", "破坏", "启示", "混乱"],
      upright: {
        meaning: "突然的改变和破坏。虽然痛苦，但为重建奠定基础。",
        love: "关系突然破裂，痛苦但必要的真相揭露。",
        career: "突然的变动，失业或重大改组。",
        finance: "财务危机，意外损失。"
      },
      reversed: {
        meaning: "避免灾难，或从危机中恢复。延迟的崩溃。",
        love: "关系危机得到缓解。",
        career: "避免了重大变故。",
        finance: "财务危机减轻或延后。"
      }
    },
    {
      id: 17,
      name: "The Star",
      nameCN: "星星",
      suit: "major",
      keywords: ["希望", "灵感", "宁静", "更新"],
      upright: {
        meaning: "希望和灵感之光。经历困难后的平静和治愈。",
        love: "重燃希望，关系的治愈和更新。",
        career: "灵感和创意，职业前景光明。",
        finance: "财务状况好转，长期投资有回报。"
      },
      reversed: {
        meaning: "失去信心，缺乏灵感。绝望或不切实际的幻想。",
        love: "对爱情失去信心。",
        career: "缺乏方向和动力。",
        finance: "财务前景不明朗。"
      }
    },
    {
      id: 18,
      name: "The Moon",
      nameCN: "月亮",
      suit: "major",
      keywords: ["幻觉", "直觉", "恐惧", "潜意识"],
      upright: {
        meaning: "不确定和幻觉。依靠直觉，但要小心欺骗和恐惧。",
        love: "关系中存在误解或秘密，需要澄清。",
        career: "不确定的职业前景，小心欺骗。",
        finance: "财务不明朗，避免冒险。"
      },
      reversed: {
        meaning: "真相逐渐明朗，恐惧消散。克服幻觉和焦虑。",
        love: "误解得到澄清。",
        career: "职业方向渐渐清晰。",
        finance: "财务状况变得透明。"
      }
    },
    {
      id: 19,
      name: "The Sun",
      nameCN: "太阳",
      suit: "major",
      keywords: ["成功", "快乐", "活力", "真相"],
      upright: {
        meaning: "成功和喜悦。一切都很顺利，充满活力和乐观。",
        love: "快乐幸福的关系，婚姻或生子。",
        career: "事业成功，得到认可和成就。",
        finance: "财务丰盛，投资成功。"
      },
      reversed: {
        meaning: "暂时的挫折，过度乐观。需要现实一些。",
        love: "关系中的小问题，需要更多沟通。",
        career: "成功延迟，需要调整期望。",
        finance: "财务增长放缓。"
      }
    },
    {
      id: 20,
      name: "Judgement",
      nameCN: "审判",
      suit: "major",
      keywords: ["觉醒", "更新", "反思", "决定"],
      upright: {
        meaning: "重大的觉醒和自我反思。过去的经验带来新的理解。",
        love: "关系的新阶段，原谅和重新开始。",
        career: "职业生涯的评估和新方向。",
        finance: "财务决策的清算和重新规划。"
      },
      reversed: {
        meaning: "逃避自我反思，拒绝接受判决。内疚和自我怀疑。",
        love: "无法原谅或放下过去。",
        career: "拒绝改变，害怕评判。",
        finance: "逃避财务责任。"
      }
    },
    {
      id: 21,
      name: "The World",
      nameCN: "世界",
      suit: "major",
      keywords: ["完成", "成就", "旅行", "圆满"],
      upright: {
        meaning: "一个循环的圆满完成。成就和满足，准备迎接新的开始。",
        love: "关系达到圆满，婚姻或长期承诺。",
        career: "项目成功完成，得到认可。",
        finance: "财务目标达成。"
      },
      reversed: {
        meaning: "未完成的事务，缺乏闭环。延迟或寻求完美主义。",
        love: "关系未能圆满，仍有问题需要解决。",
        career: "项目未完成，目标未达成。",
        finance: "财务目标未实现。"
      }
    }
  ],

  // 56张小阿卡那牌
  minor: {
    // 权杖牌组（火元素）
    wands: [
      {
        id: "wands-ace",
        name: "Ace of Wands",
        nameCN: "权杖王牌",
        suit: "wands",
        number: 1,
        element: "fire",
        keywords: ["创造力", "灵感", "新计划", "潜力"],
        upright: {
          meaning: "新的创意项目或灵感的开始。充满活力和热情的起点。",
          love: "充满激情的新恋情开始。",
          career: "新项目启动，创意迸发。",
          finance: "新的收入机会。"
        },
        reversed: {
          meaning: "缺乏方向，延迟的开始。创意受阻。",
          love: "激情减退，缺乏火花。",
          career: "项目延迟，缺乏动力。",
          finance: "投资时机不成熟。"
        }
      },
      {
        id: "wands-2",
        name: "Two of Wands",
        nameCN: "权杖二",
        suit: "wands",
        number: 2,
        element: "fire",
        keywords: ["规划", "远见", "决策", "进步"],
        upright: {
          meaning: "制定长远计划，展望未来。站在十字路口做出选择。",
          love: "考虑关系的长远发展。",
          career: "制定职业规划，考虑新机会。",
          finance: "长期财务规划。"
        },
        reversed: {
          meaning: "缺乏计划，害怕未知。犹豫不决。",
          love: "对关系缺乏规划。",
          career: "目标不明确，缺乏远见。",
          finance: "财务规划不足。"
        }
      },
      {
        id: "wands-3",
        name: "Three of Wands",
        nameCN: "权杖三",
        suit: "wands",
        number: 3,
        element: "fire",
        keywords: ["扩展", "远见", "领导力", "国际化"],
        upright: {
          meaning: "视野开阔，扩展边界。等待结果的到来。",
          love: "关系向外发展，可能异地或国际。",
          career: "业务扩展，国际机会。",
          finance: "投资开始见效。"
        },
        reversed: {
          meaning: "缺乏远见，计划受阻。",
          love: "关系发展受限。",
          career: "扩展计划延迟。",
          finance: "投资回报延后。"
        }
      },
      {
        id: "wands-4",
        name: "Four of Wands",
        nameCN: "权杖四",
        suit: "wands",
        number: 4,
        element: "fire",
        keywords: ["庆祝", "和谐", "里程碑", "稳定"],
        upright: {
          meaning: "庆祝成就和里程碑。家庭和谐，社区支持。",
          love: "关系稳定，可能订婚或结婚。",
          career: "项目成功，团队庆祝。",
          finance: "财务稳定，值得庆祝的收获。"
        },
        reversed: {
          meaning: "缺乏稳定，延迟的庆祝。家庭不和。",
          love: "关系不稳定，承诺延迟。",
          career: "项目完成延迟。",
          finance: "财务不稳定。"
        }
      },
      {
        id: "wands-5",
        name: "Five of Wands",
        nameCN: "权杖五",
        suit: "wands",
        number: 5,
        element: "fire",
        keywords: ["冲突", "竞争", "紧张", "多样性"],
        upright: {
          meaning: "竞争和冲突，但也是成长的机会。多元观点的碰撞。",
          love: "意见不合，需要沟通和妥协。",
          career: "激烈竞争，团队内部冲突。",
          finance: "财务竞争压力。"
        },
        reversed: {
          meaning: "避免冲突，内在矛盾。竞争结束。",
          love: "避免争吵，和解。",
          career: "冲突解决，合作改善。",
          finance: "财务压力减轻。"
        }
      },
      {
        id: "wands-6",
        name: "Six of Wands",
        nameCN: "权杖六",
        suit: "wands",
        number: 6,
        element: "fire",
        keywords: ["胜利", "认可", "成功", "自信"],
        upright: {
          meaning: "公开的成功和认可。自信和领导力得到肯定。",
          love: "关系中得到认可和尊重。",
          career: "职业成就，晋升或获奖。",
          finance: "财务成功，投资回报。"
        },
        reversed: {
          meaning: "缺乏认可，私人的成功。自负或缺乏信心。",
          love: "关系中缺乏赞赏。",
          career: "成就未被认可。",
          finance: "财务成功不明显。"
        }
      },
      {
        id: "wands-7",
        name: "Seven of Wands",
        nameCN: "权杖七",
        suit: "wands",
        number: 7,
        element: "fire",
        keywords: ["防御", "挑战", "坚持", "勇气"],
        upright: {
          meaning: "捍卫立场，面对挑战。坚持信念和原则。",
          love: "捍卫关系，克服外界压力。",
          career: "面对竞争，坚守职位。",
          finance: "保护财务利益。"
        },
        reversed: {
          meaning: "放弃防御，妥协。被挑战压垮。",
          love: "关系压力过大，考虑放弃。",
          career: "竞争中落败。",
          finance: "财务防线崩溃。"
        }
      },
      {
        id: "wands-8",
        name: "Eight of Wands",
        nameCN: "权杖八",
        suit: "wands",
        number: 8,
        element: "fire",
        keywords: ["快速", "行动", "消息", "进展"],
        upright: {
          meaning: "快速的进展和行动。事情突然加速。",
          love: "关系快速发展。",
          career: "项目快速推进，好消息到来。",
          finance: "资金快速流动。"
        },
        reversed: {
          meaning: "延迟，仓促决策。缺乏方向的行动。",
          love: "关系发展缓慢。",
          career: "项目延迟，沟通不畅。",
          finance: "资金流动受阻。"
        }
      },
      {
        id: "wands-9",
        name: "Nine of Wands",
        nameCN: "权杖九",
        suit: "wands",
        number: 9,
        element: "fire",
        keywords: ["坚韧", "持久", "警惕", "边界"],
        upright: {
          meaning: "接近终点，但仍需坚持。保持警惕和边界。",
          love: "关系经历考验，需要坚持。",
          career: "最后的挑战，不要放弃。",
          finance: "财务压力持续，但即将结束。"
        },
        reversed: {
          meaning: "筋疲力尽，放弃防御。顽固不化。",
          love: "关系中过度防备。",
          career: "工作倦怠，需要休息。",
          finance: "财务压力过大。"
        }
      },
      {
        id: "wands-10",
        name: "Ten of Wands",
        nameCN: "权杖十",
        suit: "wands",
        number: 10,
        element: "fire",
        keywords: ["负担", "责任", "压力", "完成"],
        upright: {
          meaning: "承担过多责任，感到压力。但接近完成。",
          love: "关系中承担过多，需要分担。",
          career: "工作负担重，但即将完成。",
          finance: "财务压力大，过度承担。"
        },
        reversed: {
          meaning: "释放负担，委派任务。拒绝责任。",
          love: "释放关系中的压力。",
          career: "减轻工作负担，学会说不。",
          finance: "减少财务责任。"
        }
      },
      {
        id: "wands-page",
        name: "Page of Wands",
        nameCN: "权杖侍从",
        suit: "wands",
        number: 11,
        element: "fire",
        keywords: ["热情", "探索", "好奇", "消息"],
        upright: {
          meaning: "充满热情的新开始。探索和发现的兴奋。",
          love: "新的浪漫兴趣，有趣的约会。",
          career: "新的学习机会，创意项目。",
          finance: "探索新的收入来源。"
        },
        reversed: {
          meaning: "缺乏方向，不成熟。延迟的消息。",
          love: "不成熟的行为，缺乏承诺。",
          career: "缺乏专注，项目未完成。",
          finance: "不切实际的财务计划。"
        }
      },
      {
        id: "wands-knight",
        name: "Knight of Wands",
        nameCN: "权杖骑士",
        suit: "wands",
        number: 12,
        element: "fire",
        keywords: ["冒险", "冲动", "热情", "改变"],
        upright: {
          meaning: "充满激情的行动。冒险和追求刺激。",
          love: "激情洋溢的追求，冒险的恋情。",
          career: "大胆的职业举动，快速变化。",
          finance: "冒险投资，快速的财务决策。"
        },
        reversed: {
          meaning: "鲁莽冲动，缺乏计划。不负责任。",
          love: "关系中不稳定，缺乏承诺。",
          career: "频繁跳槽，缺乏耐心。",
          finance: "冲动消费，投资失误。"
        }
      },
      {
        id: "wands-queen",
        name: "Queen of Wands",
        nameCN: "权杖王后",
        suit: "wands",
        number: 13,
        element: "fire",
        keywords: ["自信", "独立", "魅力", "决心"],
        upright: {
          meaning: "自信独立，充满魅力。以热情领导他人。",
          love: "自信的伴侣，充满激情和独立。",
          career: "领导角色，自信的决策。",
          finance: "独立理财，自信的投资。"
        },
        reversed: {
          meaning: "缺乏自信，嫉妒。控制欲或自私。",
          love: "关系中占有欲强或不安全感。",
          career: "领导力不足，缺乏自信。",
          finance: "财务缺乏独立性。"
        }
      },
      {
        id: "wands-king",
        name: "King of Wands",
        nameCN: "权杖国王",
        suit: "wands",
        number: 14,
        element: "fire",
        keywords: ["领导力", "愿景", "企业家", "荣誉"],
        upright: {
          meaning: "天生的领导者和愿景家。企业家精神和荣誉感。",
          love: "成熟自信的伴侣，值得信赖。",
          career: "领导角色，商业成功。",
          finance: "成功的投资，商业头脑。"
        },
        reversed: {
          meaning: "专横跋扈，过度控制。缺乏远见。",
          love: "关系中过于强势或控制。",
          career: "领导不当，滥用权力。",
          finance: "冒险的商业决策。"
        }
      }
    ],

    // 圣杯牌组（水元素）
    cups: [
      {
        id: "cups-ace",
        name: "Ace of Cups",
        nameCN: "圣杯王牌",
        suit: "cups",
        number: 1,
        element: "water",
        keywords: ["新感情", "直觉", "爱", "同情心"],
        upright: {
          meaning: "新的情感开始，爱和同情心的涌现。",
          love: "新恋情或关系的深化。",
          career: "创意灵感，情感上的满足。",
          finance: "情感投资，慈善捐赠。"
        },
        reversed: {
          meaning: "情感阻塞，爱被拒绝。封闭心扉。",
          love: "情感不被回应，心碎。",
          career: "创意受阻，缺乏热情。",
          finance: "情感化的财务决策。"
        }
      },
      {
        id: "cups-2",
        name: "Two of Cups",
        nameCN: "圣杯二",
        suit: "cups",
        number: 2,
        element: "water",
        keywords: ["伙伴关系", "联合", "平衡", "爱情"],
        upright: {
          meaning: "和谐的伙伴关系，相互吸引和平衡。",
          love: "深刻的爱情连接，婚姻或承诺。",
          career: "成功的合作关系。",
          finance: "共同的财务决策。"
        },
        reversed: {
          meaning: "关系不平衡，分离。缺乏和谐。",
          love: "关系破裂，沟通不畅。",
          career: "合作关系紧张。",
          finance: "财务分歧。"
        }
      },
      {
        id: "cups-3",
        name: "Three of Cups",
        nameCN: "圣杯三",
        suit: "cups",
        number: 3,
        element: "water",
        keywords: ["庆祝", "友谊", "社交", "喜悦"],
        upright: {
          meaning: "与朋友庆祝，社交和欢乐的时光。",
          love: "社交活动中遇到新人，或与伴侣社交。",
          career: "团队合作成功，工作庆祝。",
          finance: "财务庆祝，共享成功。"
        },
        reversed: {
          meaning: "过度放纵，社交冲突。孤立。",
          love: "第三者，社交压力。",
          career: "团队不和，办公室政治。",
          finance: "过度消费在社交上。"
        }
      },
      {
        id: "cups-4",
        name: "Four of Cups",
        nameCN: "圣杯四",
        suit: "cups",
        number: 4,
        element: "water",
        keywords: ["冥想", "沉思", "不满", "重新评估"],
        upright: {
          meaning: "对现状不满，内省和重新评估。错过机会。",
          love: "关系中感到无聊或不满足。",
          career: "工作倦怠，寻找新机会。",
          finance: "对财务状况不满。"
        },
        reversed: {
          meaning: "重新关注，抓住机会。从冥想中走出。",
          love: "重新投入关系。",
          career: "抓住新机会。",
          finance: "财务态度改善。"
        }
      },
      {
        id: "cups-5",
        name: "Five of Cups",
        nameCN: "圣杯五",
        suit: "cups",
        number: 5,
        element: "water",
        keywords: ["失望", "悲伤", "损失", "宽恕"],
        upright: {
          meaning: "失望和悲伤，专注于损失。需要宽恕和向前看。",
          love: "关系失望，分手或背叛。",
          career: "项目失败，职业挫折。",
          finance: "财务损失。"
        },
        reversed: {
          meaning: "接受损失，从悲伤中恢复。宽恕自己。",
          love: "从失恋中恢复。",
          career: "从挫折中学习。",
          finance: "财务恢复。"
        }
      },
      {
        id: "cups-6",
        name: "Six of Cups",
        nameCN: "圣杯六",
        suit: "cups",
        number: 6,
        element: "water",
        keywords: ["怀旧", "童年", "纯真", "团聚"],
        upright: {
          meaning: "怀念过去，童年回忆。与旧识重逢。",
          love: "旧情复燃，或童年恋人。",
          career: "回到以前的工作或行业。",
          finance: "来自过去的财务帮助。"
        },
        reversed: {
          meaning: "活在过去，无法向前。理想化过去。",
          love: "无法放下旧情。",
          career: "被过去束缚。",
          finance: "过去的财务问题重现。"
        }
      },
      {
        id: "cups-7",
        name: "Seven of Cups",
        nameCN: "圣杯七",
        suit: "cups",
        number: 7,
        element: "water",
        keywords: ["选择", "幻想", "幻觉", "白日梦"],
        upright: {
          meaning: "众多选择，但需要辨别幻想和现实。避免白日梦。",
          love: "多个选择，但可能不切实际。",
          career: "职业选择多，需要现实评估。",
          finance: "投资选择多，小心陷阱。"
        },
        reversed: {
          meaning: "选择明确，从幻想中清醒。采取行动。",
          love: "明确感情选择。",
          career: "职业方向清晰。",
          finance: "财务决策理性。"
        }
      },
      {
        id: "cups-8",
        name: "Eight of Cups",
        nameCN: "圣杯八",
        suit: "cups",
        number: 8,
        element: "water",
        keywords: ["放弃", "寻找", "离开", "更深层次"],
        upright: {
          meaning: "离开不再满足的情况，寻找更深层次的意义。",
          love: "离开不满足的关系。",
          career: "辞职寻找更有意义的工作。",
          finance: "放弃物质追求更高目标。"
        },
        reversed: {
          meaning: "害怕离开，逃避现实。回到旧状态。",
          love: "害怕离开不健康的关系。",
          career: "害怕改变，留在舒适区。",
          finance: "无法放弃物质追求。"
        }
      },
      {
        id: "cups-9",
        name: "Nine of Cups",
        nameCN: "圣杯九",
        suit: "cups",
        number: 9,
        element: "water",
        keywords: ["满足", "愿望", "幸福", "成就"],
        upright: {
          meaning: "愿望成真，情感满足和幸福。享受成就。",
          love: "关系幸福美满。",
          career: "职业满足，目标达成。",
          finance: "财务丰足，物质满足。"
        },
        reversed: {
          meaning: "内在不满足，空虚。过度放纵。",
          love: "表面幸福，内心空虚。",
          career: "成就未带来满足。",
          finance: "物质无法带来幸福。"
        }
      },
      {
        id: "cups-10",
        name: "Ten of Cups",
        nameCN: "圣杯十",
        suit: "cups",
        number: 10,
        element: "water",
        keywords: ["和谐", "家庭", "幸福", "归属"],
        upright: {
          meaning: "家庭和谐幸福，情感圆满。归属感和爱。",
          love: "完美的家庭关系，婚姻幸福。",
          career: "工作生活平衡，团队和谐。",
          finance: "财务稳定支持家庭。"
        },
        reversed: {
          meaning: "家庭不和，关系破裂。缺乏归属感。",
          love: "家庭矛盾，关系紧张。",
          career: "工作影响家庭生活。",
          finance: "财务压力影响家庭。"
        }
      },
      {
        id: "cups-page",
        name: "Page of Cups",
        nameCN: "圣杯侍从",
        suit: "cups",
        number: 11,
        element: "water",
        keywords: ["创意", "直觉", "好奇", "温柔"],
        upright: {
          meaning: "创意灵感，情感的新开始。直觉和温柔。",
          love: "浪漫的消息，温柔的爱。",
          career: "创意项目，艺术灵感。",
          finance: "直觉的财务决策。"
        },
        reversed: {
          meaning: "情感不成熟，创意受阻。过度敏感。",
          love: "不成熟的感情表达。",
          career: "创意缺乏实用性。",
          finance: "情绪化的财务决策。"
        }
      },
      {
        id: "cups-knight",
        name: "Knight of Cups",
        nameCN: "圣杯骑士",
        suit: "cups",
        number: 12,
        element: "water",
        keywords: ["浪漫", "理想主义", "追求", "魅力"],
        upright: {
          meaning: "浪漫的追求，理想主义的行动。充满魅力和创意。",
          love: "浪漫的求爱，理想化的爱情。",
          career: "追求梦想职业，创意工作。",
          finance: "理想化的投资。"
        },
        reversed: {
          meaning: "不切实际，空想。情绪不稳定。",
          love: "浪漫过度，承诺不足。",
          career: "梦想缺乏行动。",
          finance: "不切实际的财务期望。"
        }
      },
      {
        id: "cups-queen",
        name: "Queen of Cups",
        nameCN: "圣杯王后",
        suit: "cups",
        number: 13,
        element: "water",
        keywords: ["同情心", "直觉", "情感", "滋养"],
        upright: {
          meaning: "充满同情心和直觉。情感成熟，滋养他人。",
          love: "深情关怀的伴侣，情感连接。",
          career: "关怀型职业，情感智慧。",
          finance: "直觉理财，慈善行为。"
        },
        reversed: {
          meaning: "情感依赖，过度敏感。情绪不稳定。",
          love: "情感需求过多，缺乏边界。",
          career: "情绪影响工作。",
          finance: "情绪化的财务决策。"
        }
      },
      {
        id: "cups-king",
        name: "King of Cups",
        nameCN: "圣杯国王",
        suit: "cups",
        number: 14,
        element: "water",
        keywords: ["情感平衡", "外交", "智慧", "冷静"],
        upright: {
          meaning: "情感成熟和平衡。外交手腕和智慧。控制情绪。",
          love: "成熟稳定的伴侣，情感可靠。",
          career: "情感领导力，外交技巧。",
          finance: "冷静的财务决策。"
        },
        reversed: {
          meaning: "情感压抑，冷漠。情绪操控。",
          love: "情感疏离，冷漠无情。",
          career: "情绪失控，缺乏同理心。",
          finance: "情感影响理财。"
        }
      }
    ],

    // 宝剑牌组（风元素）
    swords: [
      {
        id: "swords-ace",
        name: "Ace of Swords",
        nameCN: "宝剑王牌",
        suit: "swords",
        number: 1,
        element: "air",
        keywords: ["清晰", "真相", "突破", "正义"],
        upright: {
          meaning: "思维清晰，真相揭示。精神突破和新想法。",
          love: "关系中的清晰和诚实沟通。",
          career: "新想法突破，清晰的决策。",
          finance: "财务真相明朗。"
        },
        reversed: {
          meaning: "思维混乱，误解。真相被隐藏。",
          love: "沟通不清，误会。",
          career: "想法混乱，决策困难。",
          finance: "财务信息不透明。"
        }
      },
      {
        id: "swords-2",
        name: "Two of Swords",
        nameCN: "宝剑二",
        suit: "swords",
        number: 2,
        element: "air",
        keywords: ["僵局", "选择", "回避", "平衡"],
        upright: {
          meaning: "艰难的选择，僵持不下。回避问题或寻求平衡。",
          love: "关系中难以决定，回避冲突。",
          career: "职业选择困难，观望状态。",
          finance: "财务决策犹豫。"
        },
        reversed: {
          meaning: "打破僵局，做出选择。信息揭示。",
          love: "关系决定明确。",
          career: "职业方向清晰。",
          finance: "财务决策果断。"
        }
      },
      {
        id: "swords-3",
        name: "Three of Swords",
        nameCN: "宝剑三",
        suit: "swords",
        number: 3,
        element: "air",
        keywords: ["心碎", "悲伤", "背叛", "痛苦"],
        upright: {
          meaning: "心碎和悲伤。背叛或痛苦的真相。情感创伤。",
          love: "分手、背叛或心碎。",
          career: "被解雇或工作失望。",
          finance: "财务损失带来痛苦。"
        },
        reversed: {
          meaning: "从心碎中恢复，宽恕。痛苦减轻。",
          love: "疗愈心伤，向前看。",
          career: "从失业中恢复。",
          finance: "财务痛苦减轻。"
        }
      },
      {
        id: "swords-4",
        name: "Four of Swords",
        nameCN: "宝剑四",
        suit: "swords",
        number: 4,
        element: "air",
        keywords: ["休息", "恢复", "冥想", "准备"],
        upright: {
          meaning: "需要休息和恢复。冥想和准备下一步。",
          love: "关系中需要空间和休息。",
          career: "工作休假，充电恢复。",
          finance: "财务休整期。"
        },
        reversed: {
          meaning: "休息结束，准备行动。过度休息或无法放松。",
          love: "重新投入关系。",
          career: "返回工作或倦怠。",
          finance: "重新开始财务规划。"
        }
      },
      {
        id: "swords-5",
        name: "Five of Swords",
        nameCN: "宝剑五",
        suit: "swords",
        number: 5,
        element: "air",
        keywords: ["冲突", "失败", "欺骗", "损失"],
        upright: {
          meaning: "冲突和争执。胜利的代价高昂。不公平的手段。",
          love: "关系中的争吵和伤害。",
          career: "办公室政治，不择手段。",
          finance: "不道德的财务行为。"
        },
        reversed: {
          meaning: "从冲突中学习，寻求和解。承认失败。",
          love: "关系和解，放下争执。",
          career: "冲突解决，学习教训。",
          finance: "纠正不当行为。"
        }
      },
      {
        id: "swords-6",
        name: "Six of Swords",
        nameCN: "宝剑六",
        suit: "swords",
        number: 6,
        element: "air",
        keywords: ["过渡", "改变", "旅行", "前进"],
        upright: {
          meaning: "从困境中走出，向更好的未来过渡。心理或物理的旅程。",
          love: "关系进入新阶段，或离开痛苦。",
          career: "职业转变，搬迁。",
          finance: "财务状况改善。"
        },
        reversed: {
          meaning: "过渡延迟，抗拒改变。无法前进。",
          love: "困在过去的关系中。",
          career: "职业转变受阻。",
          finance: "财务改善延迟。"
        }
      },
      {
        id: "swords-7",
        name: "Seven of Swords",
        nameCN: "宝剑七",
        suit: "swords",
        number: 7,
        element: "air",
        keywords: ["欺骗", "策略", "逃避", "背叛"],
        upright: {
          meaning: "欺骗和背叛。策略性行动或逃避。不完全诚实。",
          love: "关系中的不诚实或秘密。",
          career: "办公室欺骗，小心背后捅刀。",
          finance: "财务欺诈或盗窃。"
        },
        reversed: {
          meaning: "真相揭露，承认欺骗。改变策略。",
          love: "秘密被揭穿。",
          career: "欺骗行为暴露。",
          finance: "财务欺诈被发现。"
        }
      },
      {
        id: "swords-8",
        name: "Eight of Swords",
        nameCN: "宝剑八",
        suit: "swords",
        number: 8,
        element: "air",
        keywords: ["限制", "困境", "无助", "思维陷阱"],
        upright: {
          meaning: "感到被困和无助。自我限制的思维。需要改变视角。",
          love: "关系中感到被困。",
          career: "工作困境，看不到出路。",
          finance: "财务困境，感到无助。"
        },
        reversed: {
          meaning: "从限制中解脱，找到出路。自我赋权。",
          love: "关系中找到自由。",
          career: "职业困境解除。",
          finance: "财务自由增加。"
        }
      },
      {
        id: "swords-9",
        name: "Nine of Swords",
        nameCN: "宝剑九",
        suit: "swords",
        number: 9,
        element: "air",
        keywords: ["焦虑", "担忧", "噩梦", "恐惧"],
        upright: {
          meaning: "焦虑和担忧。夜间噩梦和恐惧。过度思考。",
          love: "关系焦虑，过度担心。",
          career: "工作压力导致失眠。",
          finance: "财务焦虑。"
        },
        reversed: {
          meaning: "焦虑减轻，寻求帮助。从恐惧中恢复。",
          love: "关系焦虑缓解。",
          career: "工作压力减轻。",
          finance: "财务担忧减少。"
        }
      },
      {
        id: "swords-10",
        name: "Ten of Swords",
        nameCN: "宝剑十",
        suit: "swords",
        number: 10,
        element: "air",
        keywords: ["结束", "背叛", "失败", "重生"],
        upright: {
          meaning: "痛苦的结束。背叛和失败。但也是重生的开始。",
          love: "关系彻底结束。",
          career: "职业失败或被解雇。",
          finance: "财务崩溃。"
        },
        reversed: {
          meaning: "从失败中恢复，避免最坏情况。重新开始。",
          love: "从关系创伤中恢复。",
          career: "职业重建。",
          finance: "财务恢复。"
        }
      },
      {
        id: "swords-page",
        name: "Page of Swords",
        nameCN: "宝剑侍从",
        suit: "swords",
        number: 11,
        element: "air",
        keywords: ["好奇", "沟通", "警觉", "真相"],
        upright: {
          meaning: "好奇心和求知欲。新的想法和沟通。警觉性。",
          love: "沟通增加，但可能过于直接。",
          career: "新的学习机会，沟通项目。",
          finance: "调查财务状况。"
        },
        reversed: {
          meaning: "八卦流言，沟通不当。信息不完整。",
          love: "关系中的流言蜚语。",
          career: "办公室八卦，沟通问题。",
          finance: "财务信息误导。"
        }
      },
      {
        id: "swords-knight",
        name: "Knight of Swords",
        nameCN: "宝剑骑士",
        suit: "swords",
        number: 12,
        element: "air",
        keywords: ["行动", "冲动", "直接", "雄心"],
        upright: {
          meaning: "快速果断的行动。直接和雄心勃勃。可能过于冲动。",
          love: "快速推进关系，直接表达。",
          career: "快速行动，大胆决策。",
          finance: "快速的财务决策。"
        },
        reversed: {
          meaning: "鲁莽冲动，缺乏计划。好斗或逃避。",
          love: "关系中过于激进或冷漠。",
          career: "冲动的职业决策。",
          finance: "鲁莽的投资。"
        }
      },
      {
        id: "swords-queen",
        name: "Queen of Swords",
        nameCN: "宝剑王后",
        suit: "swords",
        number: 13,
        element: "air",
        keywords: ["独立", "清晰", "直接", "真相"],
        upright: {
          meaning: "独立思考，清晰沟通。直接和诚实。理性决策。",
          love: "独立的伴侣，直接沟通。",
          career: "清晰的领导，理性决策。",
          finance: "理性的财务管理。"
        },
        reversed: {
          meaning: "冷酷无情，过于挑剔。缺乏同情心。",
          love: "关系中过于理性或刻薄。",
          career: "过于严苛，缺乏同理心。",
          finance: "冷漠的财务态度。"
        }
      },
      {
        id: "swords-king",
        name: "King of Swords",
        nameCN: "宝剑国王",
        suit: "swords",
        number: 14,
        element: "air",
        keywords: ["智慧", "权威", "真相", "道德"],
        upright: {
          meaning: "智慧和理性的领导。道德和真相。公正的判断。",
          love: "理性成熟的伴侣，注重真相。",
          career: "智慧领导，公正决策。",
          finance: "理智的财务规划。"
        },
        reversed: {
          meaning: "滥用权力，过于严苛。不道德或冷酷。",
          love: "关系中过于控制或冷漠。",
          career: "独裁领导，不道德行为。",
          finance: "不道德的财务行为。"
        }
      }
    ],

    // 星币牌组（土元素）
    pentacles: [
      {
        id: "pentacles-ace",
        name: "Ace of Pentacles",
        nameCN: "星币王牌",
        suit: "pentacles",
        number: 1,
        element: "earth",
        keywords: ["机会", "繁荣", "新开始", "物质"],
        upright: {
          meaning: "新的财务或物质机会。繁荣的开始。实用的新项目。",
          love: "关系中的物质承诺。",
          career: "新工作或商业机会。",
          finance: "财务新机会，投资良机。"
        },
        reversed: {
          meaning: "错失机会，财务延迟。物质主义。",
          love: "关系缺乏物质基础。",
          career: "工作机会流失。",
          finance: "投资时机不佳。"
        }
      },
      {
        id: "pentacles-2",
        name: "Two of Pentacles",
        nameCN: "星币二",
        suit: "pentacles",
        number: 2,
        element: "earth",
        keywords: ["平衡", "适应", "优先级", "时间管理"],
        upright: {
          meaning: "平衡多个优先事项。适应变化。时间和资源管理。",
          love: "平衡关系和其他责任。",
          career: "多任务处理，工作生活平衡。",
          finance: "管理多个财务责任。"
        },
        reversed: {
          meaning: "失衡，无法应对。过度承担。",
          love: "关系被忽视。",
          career: "工作压力过大。",
          finance: "财务管理混乱。"
        }
      },
      {
        id: "pentacles-3",
        name: "Three of Pentacles",
        nameCN: "星币三",
        suit: "pentacles",
        number: 3,
        element: "earth",
        keywords: ["团队合作", "技能", "学习", "建设"],
        upright: {
          meaning: "团队合作和协作。技能发展。建设性的工作。",
          love: "共同建设关系基础。",
          career: "团队项目成功，技能认可。",
          finance: "合作投资，技能带来收入。"
        },
        reversed: {
          meaning: "团队不和，技能不足。缺乏合作。",
          love: "关系中缺乏共同建设。",
          career: "团队冲突，工作质量差。",
          finance: "合作投资失败。"
        }
      },
      {
        id: "pentacles-4",
        name: "Four of Pentacles",
        nameCN: "星币四",
        suit: "pentacles",
        number: 4,
        element: "earth",
        keywords: ["控制", "安全", "节俭", "占有"],
        upright: {
          meaning: "控制和保护资源。财务安全。可能过于节俭或占有。",
          love: "关系中占有欲或过于谨慎。",
          career: "工作稳定但缺乏冒险。",
          finance: "财务保守，储蓄为主。"
        },
        reversed: {
          meaning: "释放控制，慷慨。财务不稳定。",
          love: "关系中更加开放。",
          career: "承担新的风险。",
          finance: "财务流动性增加。"
        }
      },
      {
        id: "pentacles-5",
        name: "Five of Pentacles",
        nameCN: "星币五",
        suit: "pentacles",
        number: 5,
        element: "earth",
        keywords: ["困境", "贫困", "孤立", "担忧"],
        upright: {
          meaning: "财务困境和物质匮乏。感到孤立。需要寻求帮助。",
          love: "关系中感到不被支持。",
          career: "失业或工作不稳定。",
          finance: "财务困难，债务压力。"
        },
        reversed: {
          meaning: "财务状况改善，找到帮助。从困境中走出。",
          love: "关系支持增加。",
          career: "工作状况改善。",
          finance: "财务恢复。"
        }
      },
      {
        id: "pentacles-6",
        name: "Six of Pentacles",
        nameCN: "星币六",
        suit: "pentacles",
        number: 6,
        element: "earth",
        keywords: ["慷慨", "慈善", "给予", "接受"],
        upright: {
          meaning: "慷慨和慈善。给予和接受帮助。资源分享。",
          love: "关系中的给予和接受平衡。",
          career: "得到帮助或帮助他人。",
          finance: "慈善捐赠，或接受财务帮助。"
        },
        reversed: {
          meaning: "不平等的给予，附加条件。利用或被利用。",
          love: "关系中权力不平衡。",
          career: "工作中不公平待遇。",
          finance: "财务援助带有条件。"
        }
      },
      {
        id: "pentacles-7",
        name: "Seven of Pentacles",
        nameCN: "星币七",
        suit: "pentacles",
        number: 7,
        element: "earth",
        keywords: ["耐心", "投资", "评估", "长期"],
        upright: {
          meaning: "长期投资和耐心等待。评估进展。可能需要调整策略。",
          love: "关系需要时间培养。",
          career: "职业发展需要耐心。",
          finance: "长期投资评估。"
        },
        reversed: {
          meaning: "缺乏耐心，投资无回报。需要改变方向。",
          love: "关系停滞不前。",
          career: "职业努力未见成效。",
          finance: "投资回报不佳。"
        }
      },
      {
        id: "pentacles-8",
        name: "Eight of Pentacles",
        nameCN: "星币八",
        suit: "pentacles",
        number: 8,
        element: "earth",
        keywords: ["勤奋", "技能", "学徒", "专注"],
        upright: {
          meaning: "勤奋工作和技能发展。专注于精进。学徒阶段。",
          love: "投入精力建设关系。",
          career: "技能学习，职业发展。",
          finance: "通过努力工作增加收入。"
        },
        reversed: {
          meaning: "缺乏专注，技能停滞。完美主义或懒惰。",
          love: "关系中缺乏投入。",
          career: "工作质量下降。",
          finance: "收入停滞。"
        }
      },
      {
        id: "pentacles-9",
        name: "Nine of Pentacles",
        nameCN: "星币九",
        suit: "pentacles",
        number: 9,
        element: "earth",
        keywords: ["独立", "奢华", "成就", "自给自足"],
        upright: {
          meaning: "财务独立和物质丰盛。享受成就。自给自足。",
          love: "独立的关系，物质丰足。",
          career: "职业成功，财务自由。",
          finance: "财务独立，投资成功。"
        },
        reversed: {
          meaning: "缺乏独立，财务依赖。过度物质主义。",
          love: "关系中财务依赖。",
          career: "职业不稳定。",
          finance: "财务不安全。"
        }
      },
      {
        id: "pentacles-10",
        name: "Ten of Pentacles",
        nameCN: "星币十",
        suit: "pentacles",
        number: 10,
        element: "earth",
        keywords: ["财富", "传承", "家族", "稳定"],
        upright: {
          meaning: "长期财务稳定和家族财富。传承和遗产。物质圆满。",
          love: "稳定的家庭关系，婚姻承诺。",
          career: "职业稳定，家族企业。",
          finance: "财富积累，遗产继承。"
        },
        reversed: {
          meaning: "财务不稳定，家族冲突。遗产纠纷。",
          love: "家庭关系紧张。",
          career: "职业不稳定，失去保障。",
          finance: "财富流失，遗产问题。"
        }
      },
      {
        id: "pentacles-page",
        name: "Page of Pentacles",
        nameCN: "星币侍从",
        suit: "pentacles",
        number: 11,
        element: "earth",
        keywords: ["学习", "机会", "雄心", "实用"],
        upright: {
          meaning: "学习新技能，实用的机会。雄心和计划。",
          love: "关系中的实际承诺。",
          career: "新工作或学习机会。",
          finance: "新的投资机会。"
        },
        reversed: {
          meaning: "缺乏计划，不切实际。机会流失。",
          love: "关系缺乏实际基础。",
          career: "学习进展缓慢。",
          finance: "投资计划不成熟。"
        }
      },
      {
        id: "pentacles-knight",
        name: "Knight of Pentacles",
        nameCN: "星币骑士",
        suit: "pentacles",
        number: 12,
        element: "earth",
        keywords: ["可靠", "勤奋", "保守", "责任"],
        upright: {
          meaning: "可靠和勤奋的工作态度。保守稳健。负责任。",
          love: "可靠稳定的伴侣。",
          career: "勤奋工作，稳步前进。",
          finance: "保守的投资策略。"
        },
        reversed: {
          meaning: "过于保守，停滞不前。懒惰或无聊。",
          love: "关系缺乏激情。",
          career: "工作倦怠，缺乏进步。",
          finance: "过于保守错失机会。"
        }
      },
      {
        id: "pentacles-queen",
        name: "Queen of Pentacles",
        nameCN: "星币王后",
        suit: "pentacles",
        number: 13,
        element: "earth",
        keywords: ["滋养", "实际", "富足", "安全"],
        upright: {
          meaning: "实际和滋养。财务安全。照顾他人和自己。",
          love: "关怀实际的伴侣，物质安全。",
          career: "平衡工作和家庭，实际成就。",
          finance: "财务管理得当，富足生活。"
        },
        reversed: {
          meaning: "过度物质主义，忽视自我。财务不安全感。",
          love: "关系中过度关注物质。",
          career: "工作生活失衡。",
          finance: "财务焦虑，过度消费。"
        }
      },
      {
        id: "pentacles-king",
        name: "King of Pentacles",
        nameCN: "星币国王",
        suit: "pentacles",
        number: 14,
        element: "earth",
        keywords: ["成功", "富有", "领导力", "稳定"],
        upright: {
          meaning: "财务成功和富有。商业头脑和领导力。物质稳定。",
          love: "成功稳定的伴侣，物质丰足。",
          career: "商业成功，领导地位。",
          finance: "财务成功，投资丰厚回报。"
        },
        reversed: {
          meaning: "贪婪，财务不当。缺乏商业道德。",
          love: "关系中过于物质化。",
          career: "商业失败，管理不善。",
          finance: "财务损失，投资失败。"
        }
      }
    ]
  }
};
