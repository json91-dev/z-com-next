import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>

      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        <Link href="login" className={styles.login}>로그인</Link>
      </div>
    </div>
  )
}
