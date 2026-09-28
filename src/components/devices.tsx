import { assetPath } from '@/lib/asset-path';
import Image from 'next/image';

import { hardware, peripherals } from '@/lib/devices';

export function Devices() {
  return (
    <section className="devices-page" aria-labelledby="devices-title">
      <header className="devices-heading">
        <span className="eyebrow">MY SETUP</span>
        <h3 id="devices-title">我的设备</h3>
        <p>桌面、主机，还有每天用到的外设。</p>
      </header>
      <figure className="devices-photo">
        <Image
          src={assetPath('/devices/setup.webp')}
          alt="果子的设备展示：主机、显示器、键盘与鼠标"
          width={1448}
          height={1086}
          sizes="(max-width: 700px) 90vw, 790px"
        />
        <figcaption>我的桌面</figcaption>
      </figure>
      <section className="devices-section" aria-labelledby="hardware-title">
        <div className="devices-section-title">
          <span className="eyebrow">INSIDE THE PC</span>
          <h4 id="hardware-title">主机配置</h4>
        </div>
        <dl className="devices-specs">
          {hardware.map(([label, name, detail]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {name}
                {detail && <small>{detail}</small>}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="devices-section" aria-labelledby="peripherals-title">
        <div className="devices-section-title">
          <span className="eyebrow">ON THE DESK</span>
          <h4 id="peripherals-title">桌面外设</h4>
        </div>
        <div className="devices-peripherals">
          {peripherals.map(([number, label, name, image]) => (
            <article key={label} className={`peripheral-card peripheral-${image}`}>
              <Image
                className="peripheral-photo"
                src={assetPath(`/devices/peripherals/${image}.webp`)}
                alt=""
                fill
                sizes={image === 'speaker-camo' ? '260px' : '(max-width: 600px) 85vw, 420px'}
              />
              <span className="eyebrow">
                {number} / {label}
              </span>
              <h5>{name}</h5>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
