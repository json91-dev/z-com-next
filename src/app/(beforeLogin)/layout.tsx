import { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost 일때는 children -> page.tsx, modeal-> @modal/default.tsx
// 주소가 localhost:3001/i/flow/login 일때는 children-> i/flow/login/page.tsx, modal-> @modal/i/flow/login/page.tsx
