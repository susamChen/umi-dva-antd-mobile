import { TabBar } from 'antd-mobile';
import router from 'umi/router';

const tabBarData = [
  {
    title: '首页',
    icon: require('../../assets/images/tabBar/home.png'),
    selectedIcon: require('../../assets/images/tabBar/home-active.png'),
    link: '/',
  },
  {
    title: '发现',
    icon: require('../../assets/images/tabBar/find.png'),
    selectedIcon: require('../../assets/images/tabBar/find-active.png'),
    link: '/find',
  },
  
  {
    title: '消息',
    icon: require('../../assets/images/tabBar/message.png'),
    selectedIcon: require('../../assets/images/tabBar/message-active.png'),
    link: '/message',
  },
  {
    title: '我的',
    icon: require('../../assets/images/tabBar/my.png'),
    selectedIcon: require('../../assets/images/tabBar/my-active.png'),
    link: '/my',
  },
];

const getIconfunc = (icon) => {
          return <div style={{
                    width: '30px',
                    height: '30px',
                    background: `url(${icon}) center center /  24px 24px no-repeat` }}
          />
      }

const MenuBar = (props) => {

    const { isMenubar, children, pathname } = props;
    
    return (
      <TabBar hidden={isMenubar} tabBarPosition="bottom" tintColor="#41affc" unselectedTintColor="#4d4d4d">
        {tabBarData.map(({ title, icon, selectedIcon, link }) => {
          return (  
              <TabBar.Item
                key={link}
                title={title}
                icon={getIconfunc(icon)}
                selectedIcon={getIconfunc(selectedIcon)}
                selected={pathname === link}
                onPress={() => router.push(`${link}`)}
                // dot= {dot}
                // badge={badge}
              >
                {/* 匹配到的children路由进行渲染 */}
                {children.props.location.pathname === link && children}
              </TabBar.Item>
            )}
        )}
      </TabBar>
    );
}


export default MenuBar;

