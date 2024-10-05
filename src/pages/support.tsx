import Image from "next/image";

const SupportPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <Image src="/images/default-white-orange.png" alt="LOGO" width={300} height={300} />
        <div style={styles.slogan}>
          <p>This is Run&Gun Inc.</p>
          <p>the developer of Bell`s Nail Art Salon.</p>
          <p>If you have any inquiries regarding account data deletion, restoration, or withdrawal,</p>
          <p>please send the Google or Apple account information you used for data integration to support@runngun.fun.</p>
        </div>
      </div>
    </div>
  )
}

export default SupportPage;


const styles = {
  container: {
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column' as const, 
    alignItems: 'center',
    maxWidth: 560, 
    margin:  '0px auto'
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
    fontSize: 20,
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
