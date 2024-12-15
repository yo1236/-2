import React from "react";
import { Link } from "react-router-dom";
import "./side.css";
import pic1 from "./word.png";

function Newsitem() {

    return (
        <div className="item_all">
            <h2>세상 이야기 🌏</h2>
            <Link to="https://news.naver.com/section/102">
                <button onClick={Link}>Naver 뉴스 </button>
            </Link>

            <Link to="https://news.daum.net/society"></Link>
            <button onClick={Link}>다음 뉴스 </button>

            <Link to="https://news.google.com/home?hl=ko&gl=KR&ceid=KR:ko"></Link>
            <button onClick={Link}>구글 뉴스 </button>

            <Link to="https://imnews.imbc.com/news/2024/society/#page=1"></Link>
            <button onClick={Link}> mbc 뉴스 </button>

            <Link to="https://www.hani.co.kr/"></Link>
            <button onClick={Link}>한겨례 뉴스</button>

            <Link to="https://www.bbc.com/korean"></Link>
            <button onClick={Link}>BBC 뉴스</button>

            <Link to="https://edition.cnn.com/"></Link>
            <button onClick={Link}>CNN 뉴스</button>

            <Link to="https://www3.nhk.or.jp/nhkworld/ko/news/"></Link>
            <button onClick={Link}>NHK 뉴스</button>

            <img src={pic1} alt="picture1" height='150px' width='180px' />

        </div>
    )
}

export default Newsitem; 