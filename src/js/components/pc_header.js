import React from 'react'
import { Row, Col ,Menu,Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
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

  componentWillMount(){
    if(localStorage.userid){
      this.setState({hasLogined:true})
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

  handleSubmit(e){
    //页面FORM提交
    e.preventDefault();
    //formData 是所有表单元素的value的 集合
    let formData = this.props.form.getFieldsValue();
    console.log(formData)
    message.success('用户名是'+ formData.r_userName)
    this.setState({
      modalVisible: false,
    });
    if(this.state.action =='login'){
      this.setState({hasLogined:true})
      localStorage.userid = 'weibin'
    }

  }

  handleClick(e){
    if(e.key === 'register'){
      this.setState({current:'register'})
      this.setState({modalVisible:true})
    }
    else{
      this.setState({current:e.key})
    }
  }

  callBack(e){
    if(e === '1'){
      this.setState({action:'login'})
    }
    else if(e === '2'){
      this.setState({action:'register'})
    }
  }

  logOut(){
    localStorage.userid = '';
    this.setState({hasLogined:false})
  }

  render() {
    const { getFieldDecorator} = this.props.form;
    
    console.log(getFieldDecorator)
    {/* 判断是否登录*/}
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" className="register">
        
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
       
        <Link to='/usercenter/'>
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
       
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button" onClick={this.logOut.bind(this)}>退出</Button>
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
                    <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
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
        
                    <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={this.handleCancel.bind(this)} onOk={this.handleOk.bind(this)}>
                        <Tabs type="card" onChange={this.callBack.bind(this)}>                         
                          <TabPane tab="登录" key="1">
                            <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                              <FormItem label="账户">
                                {getFieldDecorator('userName')(
                                  <Input placeholder="Username" />
                                )}
                              </FormItem>
                              <FormItem label="密码">
                                {getFieldDecorator('password')(
                                  <Input placeholder="password" />
                                )}
                              </FormItem>
                              <Button htmlType="submit" type="primary">登录</Button>
                            </Form>
                          </TabPane>  



                          <TabPane tab="注册" key="2">
                            <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                              <FormItem label="账户">
                                {getFieldDecorator('r_userName')(
                                  <Input placeholder="Username" />
                                )}
                              </FormItem>
                              <FormItem label="密码">
                                {getFieldDecorator('r_password')(
                                  <Input placeholder="password" />
                                )}
                              </FormItem>
                              <FormItem label="确认密码">
                                {getFieldDecorator('r_confirmPassword')(
                                  <Input placeholder="confrimPassword" />
                                )}
                              </FormItem>
                              <Button htmlType="submit" type="primary">注册</Button>
                            </Form>
                          </TabPane>
                         
                        </Tabs>
                    </Modal>
                  </Col>
                  <Col span={2}></Col>
                </Row>
            </header>
        </div>
        
    )
  }
}



export default PCHeader = Form.create({})(PCHeader)
