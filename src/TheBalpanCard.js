export default function TheBalpanCard() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      background: 'linear-gradient(to right, white 50%, #1f2937 50%)',
      position: 'relative'
    }}>
      {/* 황토색 곡선 배경 장식 */}
      <svg style={{
        position: 'absolute',
        left: '49%',
        top: 0,
        bottom: 0,
        height: '100%',
        zIndex: 1
      }} width="80" viewBox="0 0 100 500" preserveAspectRatio="none">
        <path d="M0,0 C100,200 0,300 100,500 L0,500 Z" fill="#c4a259"/>
      </svg>

      <div style={{
        backgroundColor: '#1f2937',
        color: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        zIndex: 2,
        position: 'relative'
      }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>(유) 더 발판</h1>
        <p style={{ fontWeight: '500', marginBottom: '1rem' }}>관리부장 <strong style={{ fontWeight: 700 }}>이우덕</strong></p>

        {/* 아이콘 + 정보 */}
        <div style={{ fontSize: '0.95rem', lineHeight: '2' }}>
          <p><span style={iconStyle}>☎</span> 033-345-8588</p>
          <p><span style={iconStyle}>🖨</span> 033-343-7072</p>
          <p><span style={iconStyle}>📱</span> 010-3035-4473</p>
          <p><span style={iconStyle}>✉</span> <strong>so--simple@naver.com</strong></p>
          <p><span style={iconStyle}>🏠</span> 강원특별자치도 횡성군 우천면<br/>우천제2농공단지로 65-69</p>
        </div>
      </div>
    </div>
  );
}

const iconStyle = {
  display: 'inline-block',
  width: '1.8rem',
  textAlign: 'center'
};
