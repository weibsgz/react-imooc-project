import React from 'react';
import { Row, Col ,Menu,Icon,Tabs,message,Form,Input,Button,CheckBox,Modal,Card} from 'antd';
import {comments} from '../api.js'
class CommonComments extends React.Component { 
    constructor(){
        super()
        this.state = {
           comments:''
        }
    }

    componentWillMount(){
      //console.log('uniqueKey: ' + this.props.uniqueKey)
      this.setState({
        comments : comments
      })
    }
    addUserCollection(){
      
    }

    handleSubmit(){
       //页面FORM提交
      e.preventDefault();
      //formData 是所有表单元素的value的 集合
      let formData = this.props.form.getFieldsValue();

      console.log(formData.remark)
    }

    render(){
        const { getFieldDecorator} = this.props.form;
        const FormItem = Form.Item;
        const {comments} = this.state;
        let commentList = comments.length ?
        comments.map((comment,index) =>
          <Card key={index} title={comment.UserName} extra={`发表于${comment.dateTime}`}>
            <p>{comment.comments}</p>
          </Card>
        )
        :
        '没有加载到任何评论'
        return (
            <div>
            213
              <div className="comment">
                <Row>
                  <Col span={24}>   
                    {commentList}                 
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label='您的评论'>
                          <Input type='textarea' placeholder='请输入您的评论' />
                        </FormItem>
                        <FormItem label="您的评论">
                            {getFieldDecorator('remark')(
                              <Input type='textarea' placeholder="输入评论" />
                            )}
                      
                        </FormItem>
                        <Button htmlType="submit" type="primary">提交评论</Button>
                        <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button> 
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
        )
    }
}



export default CommonComments = Form.create({})(CommonComments)
