import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';
import { Suspense } from 'react';

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
export default Layout;
