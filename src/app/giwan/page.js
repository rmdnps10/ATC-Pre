import Image from 'next/image'
import myImage from '../../../public/Moodswings in This Order.jpg';
import Description from "@/components/giwan/Description";

export default function GiwanPage() {
  return(
    <main>
      <Description/>
      <Image 
        src={myImage}
        alt="image"
        width={500}
        height={500}
        />
    </main>
    
  )
}