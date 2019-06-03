import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';

const initHeadInfo = {
  '/': '首页',
  '/message': '消息',
  '/find': '发现',
  '/my': '我的',
}

const Header = (props) => {

        const { pathname, barRoutes } = props;
        const text = initHeadInfo[pathname];
        
        //有tab的不显示返回
        const showBack = barRoutes.indexOf(pathname) >= 0 ? false : true;
        
        return (
            <div className={styles.header}>
                <NavBar
                    mode="dark"
                    className={styles.barColor}
                    style={{ backgroundColor: "#fff" }}
                    icon={showBack ? (
                        <Icon type="left" />
                    ) : (null)
                    }
                    onLeftClick={() => {
                        //这里需要做指定式跳转，手机页面会涉及到用户刷新的问题
                        router.go(-1);
                    }}
                >
                    {text}
                </NavBar>
            </div>

        );
}

Header.defaultProps = {
    isNavBar: true,
    text: '首页',
    pathname: '/',
};

export default Header;

