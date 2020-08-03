import React, { Component } from 'react'
import {authApi} from '../../apiCall' 
import AddSign from './AddSign'

export class UnsignedDoc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            unSignedDoc:[],
           
        }
    }
    componentDidMount(){
        this.getUnSignedDoc()
    }
    getUnSignedDoc=()=>{
        authApi.get('/getdata/unsigned').then(res=>{
            this.setState({
                unSignedDoc:res.data
            })
        })

    }

   
    render() {

        return (
            
            <div className="info">
                <div  className="info-inner">
                   {this.state.unSignedDoc.map(data=>{
                       return <AddSign data={data} getUnSignedDoc={this.getUnSignedDoc}/>
                   })}   
                </div>
            </div>       
        )
    }
}

export default UnsignedDoc
