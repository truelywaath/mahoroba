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
          <h1 className="text-7xl text-white pt-96"> エドまちライブラリ </h1>
          <h1 className="text-5xl text-white pt-20 pb-96"> 画面からあなたが本当に行きたい場所へ </h1>
          <div className="py-32"></div>
          <div className="bg-rose-800 py-20">
            <h1 className="text-xl">エドまちライブラリとは</h1>
            <h1 className="text-xl">東京都内のあなたにとって素敵な場所との出会いをお手伝いします。</h1>
            <h1 className="text-xl">訪れるエリアと時間帯から、気になる情景を探索してみましょう</h1>
          <ul>
              <li className="my-12">
                <Link className="bg-rose-800 border-4 border-rose text-rose font-bold p-6 rounded-full text-3xl px-32" to="/area">
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
