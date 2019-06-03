import MenuBar from '@/components/MenuBar';
import Header from '@/components/Header';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import styles from './index.css';

// 底部有bar菜单
const BarRoutes = ['/', '/find', '/message', '/my'];

function BasicLayout(props) {
  const { children, location } = props;
  const isbarRouter = BarRoutes.indexOf(location.pathname);

  return (
    <div className={styles.body}>
        <Header pathname={location.pathname} barRoutes={BarRoutes} />
        {isbarRouter >= 0 ? (
          //首页tab页面
          <MenuBar pathname={location.pathname} >{children}</MenuBar>
        ) : (
          //非首页tab页面
          <div>{children}</div>
        )}
    </div>
  );
}

export default withRouter(connect(({ loading }) => ({ loading }))(BasicLayout));
