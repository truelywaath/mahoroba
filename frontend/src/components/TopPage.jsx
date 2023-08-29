import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const style = {
  width: "auto",
  backgroundImage: `url(images/toppage.jpg)`,
  backgroundSize: "cover",
 };

export function TopPage() {
  return(
    <>
    <div style={ style }>
      <div className="bg-black bg-opacity-30">
      <div className="text-center">
        <div className="py-8"></div>
          <h1 className="text-7xl font-bold text-white pt-96"> エドまちライブラリ </h1>
          <h1 className="text-5xl text-white pt-20 pb-96"> 画面からあなたが本当に行きたい場所へ </h1>
          <div className="py-32"></div>
          <div className="bg-rose-800 py-32">
            <p className="text-3xl">エドまちライブラリとは</p>
            <p className="text-3xl">東京都内のあなたにとって素敵な場所との出会いをお手伝いします。</p>
            <p className="text-3xl">訪れるエリアと時間帯から、気になる情景を探索してみましょう</p>
          <ul>
              <li className="mt-20">
                <Link className="bg-rose-800 border-4 border-rose text-rose font-bold p-6 rounded-full text-5xl px-32" to="/area">
                  start
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
    );
}
