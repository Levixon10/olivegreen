export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'var(--outer-bg)', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
