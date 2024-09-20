import Footer from "./component/footer";
import Main from "./component/main";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* <main className={styles.main}>
        <Image src="/images/default-white-orange.png" alt="LOGO" width={300} height={300} />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main> */}

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
