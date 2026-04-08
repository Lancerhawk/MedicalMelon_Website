import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f8f8',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '4em' }}>404</h1>
      <h2 style={{ fontSize: '1.5em', margin: '0.5em 0' }}>Page Not Found</h2>
      <Link href="/" style={{
        padding: '0.6em 1em',
        backgroundColor: '#0070f3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease'
      }}>
        Go back to Homepage
      </Link>
    </div>
  );
}