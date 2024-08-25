import styles from "./module.css";
import Image from 'next/image'
import myImage from '../../../public/Moodswings in This Order.jpg';

export default function GiwanPage() {
  return(
    <main>
      <h1>안녕하세요. 저는 윤기완입니다!</h1>
      <p>제 MBTI는 INFJ입니다.</p>
      <p>이번 ATC 웹개발팀 팀원분들과 친해지고 싶습니다..!</p>
      <p>잘부탁드립니다 :) </p>
      <Image 
        src={myImage}
        alt="image"
        width={500}
        height={500}
        />
    </main>
    
  )
}