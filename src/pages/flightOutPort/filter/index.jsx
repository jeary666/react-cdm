import React, { Component } from "react";
import { DownOutlined } from "@ant-design/icons";
import { DatePicker, Button, Menu, Dropdown, Radio } from "antd";
import "./index.scss";

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
      <div className="container">
        <div className="left">
          <span className="title">出港： 999</span>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              全部 <DownOutlined />
            </a>
          </Dropdown>

          <Radio.Group size="large" defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">不筛选</Radio.Button>
            <Radio.Button value="b">等待池</Radio.Button>
            <Radio.Button value="c">开车申请池</Radio.Button>
            <Radio.Button value="d">关注</Radio.Button>
          </Radio.Group>
        </div>
        <div className="right">
          <RangePicker showTime />
          <Button type="primary">查询</Button>
        </div>
      </div>
    );
  }
}

export default Filter;
