var React = require('react');
var ReactDOM = require('react-dom')

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import PCIndex from './components/pc_index.js'
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
              <PCIndex></PCIndex>
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