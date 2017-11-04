import React from 'react'
import { Row, Col ,Menu,Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
export default class mobileHeader extends React.Component { 
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
  login(){

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

  render() {
    const userShow = this.state.hasLogined
    ?
    <Link>
        <Icon type="inbox"></Icon>
    </Link>
    :
    <Icon type="setting" onClick={this.login.bind(this)}></Icon>
    return (
        <div id="mobileheader">
            <header>
                <i className="iconfont icon-4"></i>
                <span>ReactNews</span>
                {userShow}
            </header>
        </div>
        
    )
  }
}
