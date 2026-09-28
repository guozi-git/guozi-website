export type KitItem = {
  id: string;
  name: string;
  status: 'active' | 'retired';
  note: string;
  image?: string;
  source?: string;
};

// Display order is top to bottom; racket order follows the user's bottom-to-top list.
export const kit: Record<'racket' | 'shirt' | 'shoes', KitItem[]> = {
  racket: [
    {
      id: 'astrox-88dp',
      name: 'YONEX 天斧 88D Pro',
      status: 'active',
      note: '新色 · 黑 / 银',
      image: '/equipment/88dp.webp',
      source: 'https://us.yonex.com/products/astrox-88d-pro',
    },
    {
      id: 'halbertec-clean',
      name: '李宁 战戟 8000',
      status: 'active',
      note: '漆水全新',
      image: '/equipment/halbertec8000.jpg',
      source: 'https://li-ningfamily.com/products/li-ning-halbertec-8000',
    },
    {
      id: 'halbertec-chipped',
      name: '李宁 战戟 8000',
      status: 'active',
      note: '有轻微磕碰',
      image: '/equipment/halbertec8000.jpg',
      source: 'https://li-ningfamily.com/products/li-ning-halbertec-8000',
    },
    {
      id: 'rocket11',
      name: '的幸 火箭 11',
      status: 'retired',
      note: '已退役',
      image: '/equipment/rocket11.jpg',
      source: 'https://detail.youzan.com/show/goods?alias=361rlbi85fymgf2',
    },
  ],
  shoes: [
    {
      id: '65z3',
      name: 'YONEX 65Z3',
      status: 'retired',
      note: '纯白 · 黑色 Logo',
      image: '/equipment/65z3-white.webp',
      source: 'https://www.yonexmall.com/m2/goods/view.php?goodsno=6845',
    },
    {
      id: 'blade2p',
      name: '李宁 刀锋 2P',
      status: 'active',
      note: '标准白 / 银色',
      image: '/equipment/blade2p-white-silver.webp',
      source:
        'https://li-ningsports.co.uk/products/li-ning-blade-2-pro-badminton-shoes-white-and-blue',
    },
  ],
  shirt: [
    {
      id: 'aayw045',
      name: '李宁 AAYW045',
      status: 'active',
      note: '白色 · 中青队大赛系列',
      image: '/equipment/aayw045.webp',
      source:
        'https://li-ning-europe.eu/en/products/unisex-china-national-shirt-dragon-blaze-2026-wei-aayw045-2',
    },
  ],
};
