import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'

export class AddDoc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             doc:[],
             docName:""
        }
    }
    
    submit=()=>{
        if(this.state.doc.length !== 0 && this.state.name !== ""){
            const formdata=new FormData();
            formdata.append("doc",this.state.doc);
            formdata.append("docName",this.state.docName);
            let config={
                headers: {
                    'content-type': 'multipart/form-data',
            
                }
            }
            authApi.post("/update/adddoc",formdata,config)
            .then(res=>{
                swal({icon:"success",text:"Uploded!!"})           
    
    
            })

        }
        else{
            swal({icon:"error",text:"Please Uplode and fill all the fields!!"})           

        }
    }


    render() {
        return (
            <div className="moderators">
                <div className="moderators-inner">
                    <h3>Uplode The Document</h3>
                    <input type="file"  className="inputbox-1"  onChange={(e)=>this.setState({doc:e.target.files[0]})} />
                    <input type="text" className="inputbox-1" placeholder="Document Name" onChange={(e)=>this.setState({docName:e.target.value})} value={this.state.docName} />
                    <button className="button" onClick={()=>this.submit()}>
                        Add Document
                    </button>
                </div>
            </div>          
        )
    }
}

export default AddDoc
