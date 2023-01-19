import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

interface Props {}

export const MainLayout = (props: Props) => {
  return (
    <div className={styles.layoutWrapper}>
      <Outlet />
    </div>
  );
};
