// pages/about.tsx
import Card from '@/app/component/card';
import Head from 'next/head';

const NailArtSalon = () => {
  return (
    <>
      <Head>
        {/* 기본적인 SEO 메타 태그 */}
        <title>Bell&apos;s Nail Art Salon</title>
        <meta name="description" content="Learn more about us on this page" />
        <meta name="keywords" content="about, information, company" />

        {/* Open Graph 메타 태그 */}
        <meta property="og:title" content="Bell's Nail Art Salon" />
        <meta property="og:description" content="Satisfy your customers with unique designs and grow your nail art salon!" />
        <meta property="og:image" content="https://d246jgzr1jye8u.cloudfront.net/development/admin/1729404270037-0.png" />
        <meta property="og:url" content="https://runngun.fun/nail-art-salon" />
        <meta property="og:type" content="website" />

        {/* 트위터 카드 메타 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bell's Nail Art Salon" />
        <meta name="twitter:description" content="Satisfy your customers with unique designs and grow your nail art salon!" />
        <meta name="twitter:image" content="https://d246jgzr1jye8u.cloudfront.net/development/admin/1729404270037-0.png" />
      </Head>

      <div style={styles.container}>
        <Card 
          imageSrc="/images/nail-art.png"
          title="Bell's Nail Art Salon"
          description="2024.10.21. Released"
        />

      </div>
    </>
  );
};

export default NailArtSalon;

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
