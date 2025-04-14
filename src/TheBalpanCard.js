import { Mail, Phone, MapPin } from "lucide-react";

export default function TheBalpanCard() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        borderRadius: '1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        padding: '1.5rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>THE BALPAN</h1>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>더 발판</p>

        <p style={{ marginTop: '1rem', fontWeight: '600', color: '#1f2937' }}>CEO 김형일</p>

        <div style={{ marginTop: '1rem' }}>
          <a href="tel:0333458588" style={linkStyle}><Phone size={16} />&nbsp;033-345-8588</a><br/>
          <a href="tel:01032153344" style={linkStyle}><Phone size={16} />&nbsp;010-3215-3344</a><br/>
          <a href="tel:0333437072" style={linkStyle}><Phone size={16} />&nbsp;033-343-7072</a><br/>
          <a href="mailto:ahdongdo34@naver.com" style={linkStyle}><Mail size={16} />&nbsp;ahdongdo34@naver.com</a><br/>
          <a href="https://map.kakao.com/?q=강원특별자치도 횡성군 우천면 제2농공단지로65-69"
            target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <MapPin size={16} />&nbsp;강원 횡성군 우천면 제2농공단지로 65-69
          </a>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  color: '#2563eb',
  textDecoration: 'none',
  margin: '0.25rem 0'
};
