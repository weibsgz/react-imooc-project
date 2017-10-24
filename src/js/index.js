var React = require('react');
var ReactDOM = require('react-dom')

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import PCIndex from './components/pc_index.js'

// ReactDOM.render(
//     <h1>H21111121d!</h1>,
//     document.getElementById('example')
// )

class Index extends React.Component { 
	
  render() {
    return (
        <div>
           <PCIndex></PCIndex>
        </div>        
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('mainContainer')
);