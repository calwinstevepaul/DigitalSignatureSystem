import React, { Component } from 'react'
import Navbar from './Comp/Navbar'
import SignedDoc from './Comp/SignedDoc'
import AddDoc from './Comp/AddDoc'



export class AdminHome extends Component {
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
          case 1:return <SignedDoc />
          case 2:return <AddDoc />
          default:return <SignedDoc />
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

export default AdminHome
