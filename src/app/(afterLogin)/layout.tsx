export default async function AfterLoginLayout({children}: any) {
  return(
    <div>
      애프터 로그인 레이아웃
      {children}
    </div>
  );
}

// RootLayout -> HomeLayout -> Homepage