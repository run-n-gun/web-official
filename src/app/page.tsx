import Footer from "./component/footer";
import Main from "./component/main";

export default function Home() {
  return (
    <div style={styles.container}>
      <Main />
      <Footer/>
    </div>
  );
}

const styles = {
  container: {
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column' as const, 
    alignItems: 'center',
    maxWidth: 560, 
    margin:  '0px auto'
  },
};
