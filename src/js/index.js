var React = require('react');
var ReactDOM = require('react-dom')

import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import PCIndex from './components/pc_index.js'
import PCNewsDetails from './components/pc_news_detail.js'
import PCUserCenter from './components/pc_usercenter.js'
import MobileIndex from './components/mobile_index.js'
import MediaQuery from 'react-responsive'
// ReactDOM.render(
//     <h1>H21111121d!</h1>,
//     document.getElementById('example')
// )

class Index extends React.Component { 
	
  render() {
    return (
        <div>
           <MediaQuery query='(min-device-width:1224px)'>
               <Router>
                  <Switch>   
                    <Route exact path="/" component={PCIndex}/>                   
                    <Route exact path="/details/:uniqueKey" component={PCNewsDetails}/>
                    <Route exact path="/usercenter/" component={PCUserCenter}/>
                                      
                  </Switch>
                </Router>
            
           </MediaQuery>
           <MediaQuery query='(max-device-width:1224px)'>
              <MobileIndex></MobileIndex>
           </MediaQuery>
           
        </div>        
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('mainContainer')
);
