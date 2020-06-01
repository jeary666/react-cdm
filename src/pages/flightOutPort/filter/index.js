import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { DatePicker } from 'antd';

class Filter extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>航班延误</Menu.Item>
        <Menu.Item danger>不正常航班</Menu.Item>
      </Menu>
    );

    const { RangePicker } = DatePicker;

    return (
      <div>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            全部 <DownOutlined />
          </a>
        </Dropdown>
        <RangePicker showTime />
      </div>
    );
  }
}

export default Filter;
