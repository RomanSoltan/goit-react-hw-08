import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.wrapper}>
      <AppBar />
      <Outlet />
    </div>
  );
};
export default Layout;
