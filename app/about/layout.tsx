export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
