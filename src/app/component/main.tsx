import Image from "next/image";
import Card from "./card";

const Main = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <Image src="/images/default-white-orange.png" alt="LOGO" width={300} height={300} />
        <div style={styles.slogan}>
          <p>사용자에게 즐거움을</p>
          <p>주는 서비스를</p>
          <p>재밌고 신나고 빠르게</p>
          <p>만들어 갑니다</p>
        </div>
      </div>

      <div style={styles.appContainer}>
        <Card 
          imageSrc="/images/nail-art.png"
          title="벨의 네일아트살롱"
          description="2024년 10월 출시 예정"
        />
        <Card 
          imageSrc="/images/nail-art.png"
          title="동물의집 (가제)"
          description="2024년 12월 출시 예정"
        />
      </div>
    </div>
  )
}

export default Main;

const styles = {
  container: {
    width: '100%', 
  },
  imgContainer: {
    display: 'flex', 
    flexDirection: 'column' as const, 
    flex: 1, 
    alignItems:'center', 
    justifyContent: 'center',
    backgroundColor: '#FE7E01',
    gap: 40,
    padding: 60,
  },
  slogan: {
    fontSize: 24,
    textAlign: 'center' as const,
    fontWeight: 700,
    lineHeight: '40px',
  },
  appContainer: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex', 
    alignItems:'center', 
    justifyContent: 'center',
    padding: '60px 20px'
  }
};
