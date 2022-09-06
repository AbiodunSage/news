import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                {this.props.footerText}
            </div>
        )
    }
}
export default Footer;