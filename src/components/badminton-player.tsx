import { assetPath } from '@/lib/asset-path';
export const equipment = [
  { id: 'racket', name: '球拍', label: 'RACKETS', number: '01', x: 473, y: 37 },
  { id: 'shirt', name: '球服', label: 'APPAREL', number: '02', x: 411, y: 180 },
  { id: 'shoes', name: '球鞋', label: 'COURT SHOES', number: '03', x: 500, y: 455 },
] as const;

export function Player({ selected }: { selected?: string }) {
  return (
    <svg
      className="player-illustration"
      viewBox="0 0 800 520"
      role="img"
      aria-label="羽毛球跳杀装备图，01球拍、02球服、03球鞋"
    >
      <image
        href={assetPath('/equipment/badminton-player.webp')}
        x="205"
        y="5"
        width="390"
        height="510"
        preserveAspectRatio="xMidYMid meet"
      />
      <g className="equipment-wires" fill="none" stroke="#97aa8b" strokeWidth="1.3">
        <path
          className={selected === 'racket' ? 'wire-selected' : ''}
          d="M473 37H563L603 116H622"
        />
        <path
          className={selected === 'shirt' ? 'wire-selected' : ''}
          d="M411 180H301L240 220H178"
        />
        <path
          className={selected === 'shoes' ? 'wire-selected' : ''}
          d="M500 455H558L600 379H622"
        />
      </g>
      {equipment.map((item) => (
        <g
          key={item.id}
          className={selected === item.id ? 'equipment-node is-active' : 'equipment-node'}
        >
          <circle cx={item.x} cy={item.y} r="12" />
          <text x={item.x} y={item.y + 3.5} textAnchor="middle">
            {item.number}
          </text>
        </g>
      ))}
    </svg>
  );
}
