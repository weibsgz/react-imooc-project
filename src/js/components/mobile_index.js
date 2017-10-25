import React from 'react'
import MobileHeader from './mobile_header.js'
import MobileFooter from './mobile_footer.js'
export default class PCIndex extends React.Component { 
    
  render() {
    return (
        <div>
          <MobileHeader></MobileHeader>
          <MobileFooter></MobileFooter>
        </div>
        
    )
  }
}
