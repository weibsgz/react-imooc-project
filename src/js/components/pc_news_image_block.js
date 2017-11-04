import React from 'react';
import {Card} from 'antd';
import {newsData} from '../api.js'
import {Link} from 'react-router-dom'

export default class PCNewsImageBlock extends React.Component { 
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
        const styleImage = {
            display:'block',
            width:this.props.imageWidth,
            height:'90px'
        }
        const newsList = news.length ? 
        //数组映射
        news.map((item,i)=>           
             <div key={i} className="imageblock">         
                 <Link to={`/details/${item.uniquekey}`}>
                    <div className="custom-image">
                        <img src={item.thumbnail_pic_s} style={styleImage} />
                    </div>
                    <div className="custom-card">
                        <h3>{item.title}</h3>
                    </div>
                    <p>{item.author_name}</p>
                 </Link>       
             </div>
            
        )
        :
        '没有加载任何新闻'

        return (
            <div className="topNewsList">
                <Card title={this.props.cardTitle} style={{width:this.props.width}}>
                    <ul>{newsList}</ul>
                </Card>            
                    
             
            </div>
        )
    }
}
