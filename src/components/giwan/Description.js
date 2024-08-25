import React from "react";
import styles from "./Description.module.css";
import Image from "next/image";
import myImage from "/public/Moodswings in This Order.jpg";

export default function Description() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>안녕하세요. 저는 윤기완입니다!</h1>
            <div className={styles.p}>
                <p>제 MBTI는 INFJ입니다.</p>
                <p>이번 ATC 웹개발팀 팀원분들과 친해지고 싶습니다..!</p>
                <p>잘 부탁드립니다 :)</p>
            </div>
            <Image src={myImage} alt="image" width={500} height={500} />
        </main>
    );
}
