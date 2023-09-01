import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const style = {
  width: "auto",
  backgroundImage: `url(images/toppage.jpg)`,
  backgroundSize: "contain",
 };

export function TopPage() {
  return(
    <>
    <div style={ style }>
      <div className="text-center">
        <div className="pt-[670px]"></div>
        <div className="py-[40px]">
          <div className="py-20 bg-rose-0/30">
            <p className="mt-[40px] text-8xl font-extrabold text-white"> エドまちライブラリ </p>
            <p className="text-[40px] font-semibold text-white "> 画像からあなたが本当に行きたい場所へ </p>
          </div>
        </div>
          <div className="py-32"></div>
          <div className="bg-rose-800 py-20 font-normal">
            <p className="text-3xl">エドまちライブラリとは</p>
            <p className="text-3xl">東京都内のあなたにとって素敵な場所との出会いをお手伝いします。</p>
            <p className="text-3xl">訪れるエリアと時間帯から、気になる情景を探索してみましょう</p>
          <ul>
              <li className="mt-16">
                <Link className="bg-rose-800 border-8 border-rose text-rose font-bold py-2 rounded-full text-5xl px-64" to="/area">
                  Start
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
    );
}
