// Only collection content is transcribed; no transaction or account data is stored.
// Approximate ordering follows the supplied records, not live market values.
export const csCollection = [
  {
    id: 'flip-marble',
    float: '0.017889',
    seed: 709,
    type: '折叠刀',
    finish: '渐变大理石',
    wear: '崭新出厂',
  },
  {
    id: 'gloves-marble',
    float: '0.229135',
    seed: 559,
    type: '专业手套',
    finish: '渐变大理石',
    wear: '久经沙场',
  },
  {
    id: 'talon-doppler',
    float: '0.034102',
    seed: 699,
    type: '锯齿爪刀',
    finish: '多普勒',
    wear: '崭新出厂',
    note: 'P4',
  },
  { id: 'boreal', float: '0.160666', type: '蝴蝶刀', finish: '北方森林', wear: '久经沙场' },
  {
    id: 'superconductor',
    float: '0.384122',
    seed: 833,
    type: '运动手套',
    finish: '超导体',
    wear: '破损不堪',
  },
  {
    id: 'gamma',
    float: '0.016153',
    seed: 606,
    type: '蝴蝶刀',
    finish: '伽马多普勒',
    wear: '崭新出厂',
    note: 'P1',
  },
  {
    id: 'vulcan',
    float: '0.075272',
    seed: 954,
    type: 'AK-47',
    finish: '火神',
    wear: '略有磨损',
  },
  { id: 'rust', float: '0.898080', type: '锯齿爪刀', finish: '外表生锈', wear: '战痕累累' },
  {
    id: 'ultraviolet',
    float: '0.378961',
    seed: 460,
    type: '运动手套',
    finish: '紫外狂潮',
    wear: '久经沙场',
  },
  { id: 'marble', float: '0.023724', type: '蝴蝶刀', finish: '渐变大理石', wear: '崭新出厂' },
  {
    id: 'autotronic',
    float: '0.174188',
    seed: 130,
    type: 'M9 刺刀',
    finish: '自动化',
    wear: '久经沙场',
  },
  {
    id: 'fade',
    float: '0.010270',
    seed: 207,
    fade: '87.4%',
    type: '爪子刀',
    finish: '渐变之色',
    wear: '崭新出厂',
  },
  {
    id: 'laminate',
    float: '0.371366',
    seed: 597,
    type: '爪子刀',
    finish: '黑色层压板',
    wear: '久经沙场',
  },
];

export const favoriteCombination = ['superconductor', 'vulcan', 'gamma'];

export const otherCollection = [
  'gloves-marble',
  'rust',
  'boreal',
  'flip-marble',
  'laminate',
  'ultraviolet',
  'autotronic',
  'talon-doppler',
  'marble',
  'fade',
]
  .reverse()
  .map((id) => csCollection.find((item) => item.id === id)!);
