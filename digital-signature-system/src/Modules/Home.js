import React, { Component } from 'react'
import Navbar from './Comp/Navbar'
import './Home.css'
import SignedDoc from './Comp/SignedDoc'
import UnsignedDoc from './Comp/UnsignedDoc'

 


export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             page:1
        }
    }
    changePage=(value)=>{
        this.setState({
            page:value
        })
    }
   
    renderSwitch(param) {
        switch(param) {
          case 1:return <SignedDoc/>
          case 2:return <UnsignedDoc />
          default:return <UnsignedDoc />
        }
    }
    
   
    render() {
        return (
            <div className="home">
                <Navbar changePage={this.changePage} {...this.props}/>  
                <div className="body">
                    {this.renderSwitch(this.state.page)}
                </div>                            
            </div>
        )
    }
}

export default Home
