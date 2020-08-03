import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import ChangeAndDownloadDoc from './ChangeAndDownloadDoc'
export class SignedDoc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            signedDoc:[],
           
        }
    }
    componentDidMount(){
        this.getSignedDoc()
    }
    getSignedDoc=()=>{
        authApi.get('/getdata/signed').then(res=>{
            this.setState({
                signedDoc:res.data
            })
        })

    }
    render() {
        return (
            <div className="info">
                <div className="info-inner">
                    
                {this.state.signedDoc.map(data=>{
                       return <ChangeAndDownloadDoc data={data} getSignedDoc={this.getSignedDoc} />
                   })}   
                </div>
            </div>       
        )
    }
}

export default SignedDoc
