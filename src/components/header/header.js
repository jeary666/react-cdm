import React,{ useState } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './header.less'

const { SubMenu } = Menu;

const Header = ()=> {
  const [ current , setCurrent ] = useState('mail');

  function handleClick(e) {
    setCurrent({
      current: e.key,
    });
  }

  return (
    <div className="header">
       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
           运行态势
          </Menu.Item>
          <SubMenu icon={<SettingOutlined />} title="航班协同">
          <Menu.ItemGroup >
            <Menu.Item key="setting:1">航班动态出港</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
          <Menu.Item key="process"  icon={<AppstoreOutlined />}>
           进程管控
          </Menu.Item>
          <Menu.Item key="system"  icon={<AppstoreOutlined />}>
           系统管理
          </Menu.Item>
        </Menu>
    </div>
  )
}

export default Header
