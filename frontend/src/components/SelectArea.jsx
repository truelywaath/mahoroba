import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

export function SelectArea() {
  const areas = [
    '浅草・上野', 
    '丸の内・銀座・秋葉原', 
    'お台場・品川・羽田空港', 
    '六本木・渋谷', 
    '新宿・池袋',
    '吉祥寺・調布・高尾',
    '八丈島・小笠原諸島'
  ];

  return(
    <>
    <div className="text-center">
      <div className="bg-blue-300">
        エリアは？
      </div>
      <ul>
          {areas.map((area) => {
            return (
              <div className="list-row">
                <li className="my-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {area}
                  </button>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">
        一つ前に戻る
      </Link>
    </>
  );
}