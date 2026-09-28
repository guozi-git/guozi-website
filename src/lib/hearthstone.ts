type Memory = { id: string; title: string; text: string };
type MemorySection = {
  id: string;
  title: string;
  english: string;
  image: string;
  imageAlt: string;
  introduction: string;
  entries: Memory[];
};

// Personal recollections supplied by the user; no invented dates or match records.
export const hearthstoneNotes: MemorySection[] = [
  {
    id: 'ranked',
    title: '天梯',
    english: 'RANKED',
    image: '/hearthstone/ranked.webp',
    imageAlt: '果子的炉石传说天梯职业进度截图',
    introduction:
      '天梯模式最喜欢的角色是牧师，最讨厌的打法是快攻，快攻就如同现在的AI一般，把一切外壳都撕碎，只窃取走中心最甜美的果实。',
    entries: [
      { id: 'first-legend', title: '第一次传说 · 机械骑', text: '第一次上传说，用的是机械骑。' },
      {
        id: 'favorite-deck',
        title: '最喜欢的卡组 · 宇宙德',
        text: '最喜欢的卡组还是宇宙德，最爱的卡牌是古夫大帝。',
      },
      {
        id: 'freeze-mage',
        title: '玩得最久 · 冰法',
        text: '利用大法师，无限冰环、冰箱、脱罪，强调极致的随从交互。',
      },
    ],
  },
  {
    id: 'battlegrounds',
    title: '酒馆',
    english: 'BATTLEGROUNDS',
    image: '/hearthstone/battlegrounds.webp',
    imageAlt: '果子的炉石传说酒馆战棋数据与常用英雄截图',
    introduction:
      '不论版本如何更迭，我最喜欢的玩法还是第二回合上二、四上三、五上四，俗称速本赌狗玩法，玩酒馆不就得上本找大哥嘛，大不了就给了下一把。∪･ω･∪',
    entries: [
      {
        id: 'big-stats',
        title: '神仙打仗',
        text: '骄傲的自大狂，无限左脚踩右脚，两回合身材 21 亿……',
      },
    ],
  },
];
