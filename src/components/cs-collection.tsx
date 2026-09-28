import { assetPath } from '@/lib/asset-path';
import { csCollection, favoriteCombination, otherCollection } from '@/lib/cs-collection';
import Image from 'next/image';

export function CsCollection() {
  return (
    <div className="cs-collection">
      <div className="cs-favorite">
        <span className="eyebrow">MY FAVORITE COMBINATION</span>
        <h6>最喜欢的搭配</h6>
        <div className="cs-combination">
          {favoriteCombination.map((id) => {
            const item = csCollection.find((entry) => entry.id === id)!;
            return (
              <div key={id}>
                <Image
                  className="cs-combination-image"
                  src={assetPath(`/cs/${item.id === 'gamma' ? 'gamma-inspect' : item.id}.webp`)}
                  alt={`${item.type} · ${item.finish}`}
                  width={480}
                  height={300}
                  sizes="(max-width: 600px) 80vw, 240px"
                />
                <span>{item.type}</span>
                <strong>{item.finish}</strong>
                <small>
                  {item.wear}
                  {item.note ? ` · ${item.note}` : ''}
                </small>
                <dl className="cs-item-info">
                  <div>
                    <dt>磨损值（约）</dt>
                    <dd>{item.float}</dd>
                  </div>
                  {item.seed !== undefined && (
                    <div>
                      <dt>模板编号</dt>
                      <dd>{item.seed}</dd>
                    </div>
                  )}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cs-collection-heading">
        <h6>玩过的饰品</h6>
        <span>{otherCollection.length} 件记录</span>
      </div>
      <ol className="cs-items">
        {otherCollection.map((item, index) => (
          <li key={item.id}>
            <Image
              className="cs-item-image"
              src={assetPath(`/cs/${item.id}.webp`)}
              alt={`${item.type} · ${item.finish}`}
              width={600}
              height={380}
              sizes="(max-width: 600px) 80vw, 380px"
            />
            <span className="cs-item-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <span className="cs-item-type">{item.type}</span>
              <h6>{item.finish}</h6>
              <p>
                {item.wear}
                {item.note ? ` · ${item.note}` : ''}
              </p>
              <dl className="cs-item-info">
                <div>
                  <dt>磨损值（约）</dt>
                  <dd>{item.float}</dd>
                </div>
                {'seed' in item && (
                  <div>
                    <dt>模板编号</dt>
                    <dd>{item.seed}</dd>
                  </div>
                )}
                {'fade' in item && (
                  <div>
                    <dt>渐变率</dt>
                    <dd>{item.fade}</dd>
                  </div>
                )}
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
