import React from 'react'
import { Row, Col ,Menu,Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const FormItem = Form.Item;
class PCHeader extends React.Component { 

  constructor(){
    super()
    this.state = {
         current: 'top',
         modalVisible:false,
         action:'login',
         hasLogined:false,
         userNickName:'weibsgz',
         userid:0
    }
  }
  showModal() {
    this.setState({
      modalVisible: true,
    });
  }

  handleCancel(){
    this.setState({
      modalVisible: false,
    });
  }

  handleOk(){
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    {/* 判断是否登录*/}
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" className="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        
        <Button type="dashed" htmlType="button">个人中心</Button>
   
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" className="register" >
        <Icon type="appstore" onClick={this.showModal.bind(this)}></Icon>注册/登录
    </Menu.Item>

    return (
        <div>
            <header>
                <Row>
                  <Col span={2}></Col>
                  <Col span={4}>
                    <a href="/" className="logo">
                        <i className="iconfont icon-4"></i>
                        <span>ReactNews</span>
                    </a>
                  </Col>
                  <Col span={16}>
                    <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                        <Menu.Item key="top">
                            <Icon type="appstore" />头条
                        </Menu.Item >
                        <Menu.Item key="shehui">
                            <Icon type="appstore" />社会
                        </Menu.Item>
                        <Menu.Item key="guonei">
                            <Icon type="appstore" />国内
                        </Menu.Item>
                        <Menu.Item key="guoji">
                            <Icon type="appstore" />国际
                        </Menu.Item>
                        <Menu.Item key="yule">
                            <Icon type="appstore" />娱乐
                        </Menu.Item>
                        <Menu.Item key="tiyu">
                            <Icon type="appstore" />体育
                        </Menu.Item>
                        <Menu.Item key="keji">
                            <Icon type="appstore" />科技
                        </Menu.Item>
                        <Menu.Item key="shishang">
                            <Icon type="appstore" />时尚
                        </Menu.Item>

                        {userShow}
                    
                    </Menu>
        
                    <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={this.handleCancel.bind(this)} onOk={this.handleOk.bind(this)}></Modal>
                  </Col>
                  <Col span={2}></Col>
                </Row>
            </header>
        </div>
        
    )
  }
}



export default PCHeader = Form.create({})(PCHeader)