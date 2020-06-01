// 出港页面
import React, { Component } from "react";
import { Table } from "antd";
import { getTableDatas } from "../../api/flightOutPort";

import "./index.scss";

import Filter from "./filter/index";

class FlightOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 表格查询条件
      selectTtemList: {
        pageIndex: 1,
        pageSize: 0,
        query: {
          inOrOut: "1",
          telState: "",
          startTime: "",
          endTime: "",
          service: "",
          sortState: "",
          controlPoint: "",
          outPoint: "",
          fltState: "",
          flightFollow: "",
          airlineCompany: "",
          instruct: "",
        },
      },
      dataSource: [],
    };
  }

  componentDidMount() {
    this.getTableDatas();
  }

  async getTableDatas() {
    let res = await getTableDatas(this.state.selectTtemList);
    console.log(res);
    let dataSource = res.body.datas;
    dataSource.forEach((item,index)=> {
      item.key = index
    })
    this.setState({
      dataSource,
    });
  }

  render() {

    const columns = [
      {
        title: "航班号",
        dataIndex: "callSign",
        key: "callSign",
      },
      {
        title: "落地机场",
        dataIndex: "adesName",
        key: "adesName",
      },
      {
        title: "当前时刻/状态",
        dataIndex: "fltState",
        key: "fltState",
      },
    ];
    return (
      <div className="out-port">
        <Filter></Filter>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          pagination={false}
          className="main-table"
          scroll={{y: 700}}
        />

      </div>
    );
  }
}

export default FlightOut;
