import Header from "@/components/minkyun/Header";
import React from "react";
import Image from 'next/image'
import './global.css'


export default function MinkyunPage({children}) {
  return (
    <html lang="ko">
      <body>
        <main>
          <Header />
          <section>
            <h1>MinkyunPage</h1><br></br>
            <h4>MBTI</h4>
              <p>ISFP</p><br></br>
            <h4>최근 있었던 일</h4>
              <h2>후쿠오카에서 첫날에 카드를 잃어버렸는데, 둘째날에는 지갑을 잃어버렸습니다...</h2><br></br>
            <h4>하고싶은 말</h4>
              <p>Next 어렵네요...</p><br></br>
          </section> 
        </main>
      </body>
    </html>
  );
}