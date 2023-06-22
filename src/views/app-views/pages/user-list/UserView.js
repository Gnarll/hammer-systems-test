import React, { Component } from "react";
import { Avatar, Drawer, Divider } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  LinkOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import noUserPhoto from "../../../../assets/icons/no-photo-user.png";

export class UserView extends Component {
  render() {
    const { data, visible, close } = this.props;
    return (
      <Drawer
        width={300}
        placement="right"
        onClose={close}
        closable={false}
        open={visible}
      >
        <div className="text-center mt-3">
          <Avatar size={80} src={noUserPhoto} />
          <h3 className="mt-2 mb-0">{data?.name}</h3>
          <span className="text-muted">{data?.username}</span>
        </div>
        <Divider dashed />
        <div className="">
          <h6 className="text-muted text-uppercase mb-3">Account details</h6>
          <p>
            <UserOutlined />
            <span className="ml-3 text-dark">id: {data?.id}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Address</h6>
          <p>
            <HomeOutlined />
            <span className="ml-3 text-dark">{data?.address?.street}</span>
          </p>
          <p>
            <HomeOutlined />
            <span className="ml-3 text-dark">{data?.address?.city}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Links</h6>
          <p>
            <LinkOutlined />
            <a href="/#" className="ml-3 text-dark">
              {data?.website}
            </a>
          </p>
          <p>
            <PhoneOutlined />
            <a href="/#" className="ml-3 text-dark">
              {data?.phone}
            </a>
          </p>
        </div>
        {/* <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Company</h6>
          <p>
            <RiseOutlined />
            <a href="/#" className="ml-3 text-dark">
              {data?.company.name}
            </a>
          </p>
          <p>
            <RiseOutlined />
            <a href="/#" className="ml-3 text-dark">
              {data?.company.catchPhrase}
            </a>
          </p>
        </div> */}
      </Drawer>
    );
  }
}

export default UserView;
