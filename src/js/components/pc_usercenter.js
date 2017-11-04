import React from 'react';
import { Row, Col ,Menu,Icon,Tabs,message,Form,Input,Button,CheckBox,Modal,Card} from 'antd';
import {comments} from '../api.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// const { getFieldDecorator} = this.props.form;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.itemGroup;
const SubMenu = Menu.SubMenu;

export default class CommonComments extends React.Component { 
    constructor(){
        super()
        this.state = {
          
        }
    }

    render(){      
        return (
            <div>
              <Tabs>
                <TabPane tab="我的收藏列表" key="1">

                </TabPane>

                <TabPane tab="我的评论列表" key="2">

                </TabPane>

                <TabPane tab="我的收藏列表" key="3">

                </TabPane>
              </Tabs>
            </div>
        )
    }
}



// export default CommonComments = Form.create({})(CommonComments)
