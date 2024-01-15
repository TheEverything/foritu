async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="select-none h-svh">
      <div className="fixed top-0 left-0 right-0 h-[60px] flex flex-row justify-center items-center gap-2 px-6 overflow-hidden">Foritu</div>
      {children}
    </div>
  );
}

export default Layout;
