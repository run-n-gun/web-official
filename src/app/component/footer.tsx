import React from 'react';
import Link from 'next/link'; // Next.js에서 Link 사용

const Footer: React.FC = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.companyInfo}>
          <h3>(주)런앤건</h3>
          <p>서울특별시 강남구 봉은사로 51길 3-3</p>
          <p>사업자등록번호: 144-88-03168</p>
          <p>이메일: support@runngun.fun</p>
          <p>대표: 김민석</p>
        </div>
        <div style={styles.policyLinks}>
          <Link href="https://runngun.notion.site/Terms-of-Use-23db9eb685b04031b67b5ef372b9b07a" target='_blank' >
            이용약관
          </Link>
          <Link href="https://runngun.notion.site/Privacy-Policy-a8a8b439a77b47c482f1f3c3b470395f" target='_blank'>
            <h4>개인정보처리방침</h4>
          </Link>
        </div>
      </div>
      <div style={styles.copyRight}>
        <p>© {new Date().getFullYear()} Run&Gun Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    width: '100%',
    backgroundColor: 'rgb(47,47,47)',
    padding: '60px 40px',
    textAlign: 'center' as const,
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: 40
  },
  companyInfo: {
    textAlign: 'left' as const,
    fontSize: 14,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  },
  policyLinks: {
    display: 'flex',
    textAlign: 'right' as const,
    gap: 20,
    fontSize: 14,
  },
  copyRight: {
    marginTop: '40px',
    color: '#6c757d',
    fontSize: 12,
  },
};

export default Footer;
