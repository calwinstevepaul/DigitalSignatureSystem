import React, { Component } from 'react'
import '../Home.css'

export class Navbar extends Component {
    
    
    logout=()=>{
        this.props.changeLoginState(false)
        localStorage.clear();

    }

    

    render() {
        return (
            <div className="navbar">
                <div className="navbar-innet-1">
                    <h3>
                        Digital Signature system
                    </h3>
                </div>
               
               
                <div className="navbar-inner-2">
                   
                        <button onClick={()=>this.props.changePage(1)}>
                            {JSON.parse(localStorage.getItem('admin'))?
                                "Signed Doc"
                            :
                            <i class="fas fa-home"></i>
                            }
                        </button>       
                        
                              
                              
                        <button onClick={()=>this.props.changePage(2)}>
                            {JSON.parse(localStorage.getItem('admin'))?
                                <><i class="fas fa-plus"></i> Docs</>
                            :
                                "Docs"
                            }
                        </button>     

                </div>
                <div className="navbar-inner-3">
                    <button onClick={()=>{this.logout()}}>Log Out</button>
                </div>
            </div>
        )
    }
}

export default Navbar
