import React from 'react';
import {Card} from 'antd';
import {newsData} from '../api.js'
//import PCNewsDetails from './pc_news_detail.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class PCNewsBlock extends React.Component { 
    constructor(){
        super();
        this.state = {
            news : ''
        }
    }
    componentWillMount() {
        console.log(newsData)
        console.log('传递过来的新闻条数是: ' + this.props.count)
        console.log('传递过来的新闻类型是: ' + this.props.type)
        this.setState({
            news : newsData
        })
    }
    render(){
        const {news} = this.state;
        const newsList = news.length ? 
        //数组映射
        news.map((item,i)=>
            /*<Link to={`details/${item.uniquekey}`} target="_blank">*/
                 <li key={i}>
                    {item.title}
                </li>
            /*</Link>*/
        )
        :
        '没有加载任何新闻'

        return (
            <div className="topNewsList">
                <Card>
                    <ul>{newsList}</ul>
                </Card>            
                    
             
            </div>
        )
    }
}
