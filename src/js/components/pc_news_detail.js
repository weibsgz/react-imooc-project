import React from 'react';
import {Row, Col,BackTop} from 'antd';
import {newsDetail} from '../api.js'
import PCNewsImageBlock from './pc_news_image_block.js'
import CommonComments from './common_comments.js'

export default class PCNewsDetails extends React.Component { 
    constructor(){
        super()
        this.state = {
            newsItem : ''
        }
    }

    componentWillMount() {
        this.setState({
            newsItem : newsDetail
        })
        
        // document.title = this.state.newsItem.title + '--React News'
        // document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    } 

    componentDidMount() {
         console.log('213: ' + this.state.newsItem)
        document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    }

    createMarkup(){       
        return {__html: this.state.newsItem.pagecontent}; 
    }

    handleClick(e){
            console.log(e)
    }

    render(){
        return (
            <div>            
               <Row>
                   <Col span={2}></Col>
                   <Col span={14} className='container'>

                        <div className='article-content' dangerouslySetInnerHTML={this.createMarkup()} onClick={this.handleClick.bind(this)}>
                        </div>  
                        <CommonComments></CommonComments>
                   </Col>

                   <Col span={6}>
                        <PCNewsImageBlock count={3} type="a" cardTitle='xxx123xx'></PCNewsImageBlock>
                   </Col>
                   <Col span={2}></Col>
               </Row> 
               {CommonComments} 
               <BackTop />
            </div>
        )
    }
}
