export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
