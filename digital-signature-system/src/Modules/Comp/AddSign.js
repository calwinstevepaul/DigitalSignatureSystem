import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'

export class AddSign extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             preview:false,
             text:"",
             pageNumber:""
        }
    }

    submit=(id)=>{
        authApi.post('/update/addsign',{
            docId:id,
            text:this.state.text,
            pageNumber:this.state.pageNumber
        }).then(res=>{
            this.props.getUnSignedDoc()
            swal({icon:"success",text:"done!!"})  

        })        
    }
    
    render() {
        return (
            <div>
                <div className="addsign-preview" onClick={()=>{this.setState({preview:!this.state.preview})}}>
                    
                    <strong>
                    {this.props.data.docName} {this.state.preview?<i class="fas fa-caret-up"></i>:<i class="fas fa-caret-down"></i>}
                    </strong>
                   
                </div>
                {this.state.preview 
                ?
                    <div className="addsign-dropdown">
                        <iframe src={this.props.data.url} width="80%" height="300px" title="preview" />
                        <div className="addsign-dropdown-inner">
                            <h4>Add Signature to this file</h4>
                            <input value={this.state.text} onChange={(e)=>{this.setState({text:e.target.value})}} type="text" className="inputbox-1" placeholder="Text"/>
                            <input value={this.state.pageNumber} onChange={(e)=>{this.setState({pageNumber:e.target.value})}} type="number"className="inputbox-1" placeholder="Page Number"/>
                            <button className="button" onClick={()=>this.submit(this.props.data.id)}>Add Signature</button>
                        </div>

                    </div>
                :
                    <></>
                }
                
            </div>
        )
    }
}

export default AddSign
