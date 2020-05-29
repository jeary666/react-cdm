import React,{ useState } from 'react'
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './header.scss'

const { SubMenu } = Menu;

const Header = ()=> {

  const [ current , setCurrent ] = useState('system');

  function handleClick(e) {
    setCurrent({
      current: e.key,
    });
  }

  return (
    <>
    <div className="nav">
       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
          <NavLink  to="/runState/参数" >运行态势</NavLink>
          </Menu.Item>
          <SubMenu icon={<SettingOutlined />} title="航班协同">
          <Menu.ItemGroup >
            <Menu.Item key="setting:1">
            <NavLink  to="/" >航班出港页面</NavLink>
            </Menu.Item>
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
    </>
  )
}

export default Header
