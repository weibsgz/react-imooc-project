import React from 'react';
import {Row, Col ,Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block.js'
import PCNewsImageBlock from './pc_news_image_block.js'
const TabPane = Tabs.TabPane;
const carouselSettings = {
    autoplay : true,
    dots:true,
    speed:500
}

// const a = {
//    autoplay : true,
//     dots:true
// }

// const b = {
//     b:'ok',
//     ...a
// }

// console.log('b: ' + b)

export default class PCNewsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            count:10
        }
    }
    render(){
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...carouselSettings}>
                                    <div><h3>1</h3></div>
                                    <div><h3>2</h3></div>
                                    <div><h3>3</h3></div>
                                    <div><h3>4</h3></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={3} cardTitle='xxxxx' width='400px' imageWidth="122px"></PCNewsImageBlock>
                        </div>
                        <Tabs className="tab_news">
                            <TabPane tab="新闻" key="1" width="100%" >
                                 <PCNewsBlock count={this.state.count} type="3"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际" key="2" width="100%" >
                                 <PCNewsBlock count={this.state.count} type="4"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                        

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
} 
