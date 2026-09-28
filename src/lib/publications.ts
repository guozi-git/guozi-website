export const publications = [
  {
    id: 'grid-dissociation',
    title: 'Enumeration of dissociation sets in grid graphs',
    shortTitle: '棋盘上，有多少种选法？',
    year: '2024',
    status: '已发表',
    venue: 'AIMS Mathematics',
    citation: 'AIMS Mathematics 9(6), 14899–14912 · 24 April 2024',
    authors: ['Wenke Zhou', 'Guo Chen', 'Hongzhi Deng', 'Jianhua Tu'],
    summary:
      '在方格网的交点上选一些点，每个选中的点最多只能与另一个选中的点相连。我们给出了一套逐步计算的方法，数清这样的选法。',
    question:
      '在网格图中，有多少种顶点选择方式，使选出的顶点所诱导的子图中，每个顶点至多与一个其他顶点相邻？',
    approach:
      '这样的顶点集合称为 dissociation set。论文使用状态矩阵递推算法，对网格图中的这类集合进行计数。',
    tags: ['Graph theory', 'Enumeration'],
    identifier: '10.3934/math.2024721',
    source: 'https://www.aimspress.com/article/doi/10.3934/math.2024721',
    fullText: 'https://www.aimspress.com/aimspress-data/math/2024/6/PDF/math-09-06-721.pdf',
    access: '开放获取的期刊 PDF，在新标签页打开。',
  },
  {
    id: 'dissociation-roots',
    title: 'Bounds on the maximum modulus of dissociation roots',
    shortTitle: '方程的解，能离零多远？',
    year: '2025',
    status: '已发表',
    venue: 'Discrete Applied Mathematics',
    citation: 'Discrete Applied Mathematics 376, 193–207 · 15 December 2025',
    authors: ['Guo Chen', 'Hongzhi Deng', 'Jianhua Tu', 'Wenke Zhou'],
    summary:
      '把一张点线网络中的合规选法记成一个多项式。我们为它的解离零最远能有多远，给出了上限和下限。',
    question:
      '用多项式记录不同大小的 dissociation sets 后，它的复数根最远可以距离原点多远？这一距离如何随图的顶点数增长？',
    approach:
      '论文分别考察所有 n 阶图和所有 n 阶树，给出根的最大模的上下界，并确定其对数尺度上的渐近增长率。',
    tags: ['Graph polynomials', 'Root bounds'],
    identifier: '10.1016/j.dam.2025.06.034',
    source: 'https://www.sciencedirect.com/science/article/abs/pii/S0166218X25003440',
    fullText: null,
    access: '出版社页面提供摘要；全文可能需要机构订阅或购买。',
  },
  {
    id: 'bipartite-stability',
    title: 'The stability of independence polynomials of complete bipartite graphs',
    shortTitle: '点变多了，解会“越界”吗？',
    year: '2025',
    status: '预印本 · 已投稿',
    venue: 'arXiv · math.CO',
    citation: 'arXiv:2505.24381v1 · 30 May 2025',
    authors: ['Guo Chen', 'Bo Ning', 'Jianhua Tu'],
    summary:
      '把两组点之间的连线关系记成多项式，它的解会一直待在经过零的竖线左侧吗？我们发现并不总是如此，并找出了几类会越界、不会越界的情况。',
    question: '完全二部图的独立多项式是否总是稳定，也就是它的全部根都位于复平面的闭左半平面？',
    approach:
      '论文证明 K₂,ₙ 和 K₃,ₙ 稳定；当两侧大小之差固定时，足够大的图稳定；当两侧大小之比是固定的有理数且大于 1 时，足够大的图不稳定。',
    tags: ['Independence polynomials', 'Stability'],
    identifier: 'arXiv:2505.24381',
    source: 'https://arxiv.org/abs/2505.24381',
    fullText: 'https://arxiv.org/pdf/2505.24381',
    access: '公开预印本 PDF；已投稿，尚未标记为正式发表。',
  },
] as const;

export type Publication = (typeof publications)[number];
