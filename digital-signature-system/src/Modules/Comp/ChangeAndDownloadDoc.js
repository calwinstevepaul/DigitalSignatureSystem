import React, { Component } from 'react'
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export class ChangeAndDownloadDoc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             preview:false,
             pdfBytes:[]
             
        }
    }

    submit= async()=> {
        


        const url = this.props.data.doc.url
        const existingPdfBytes = await fetch(url)
        .then(res => res.arrayBuffer())

        const pdfDoc = await PDFDocument.load(existingPdfBytes)

        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

        const pages = pdfDoc.getPages()
        let x = parseInt(this.props.data.pageNumber)
        let y = x-1
        const firstPage = pages[y]


        firstPage.drawText(this.props.data.sign, {
            x: 50,
            y: 50,
            size: 17,
            font: helveticaFont,
            color: rgb(0.95, 0.1, 0.1),
        })

        const pdfBytes = await pdfDoc.save()
       

        const element = document.createElement("a");
        const file = new Blob([pdfBytes], {type: "pdf"});
        element.href = URL.createObjectURL(file);
        element.download = `${this.props.data.doc.docName}Changed.pdf`;
        document.body.appendChild(element); 
        element.click();

    }

    render() {
        return (
            <div>
                <div className="addsign-preview" onClick={()=>{this.setState({preview:!this.state.preview})}}>
                    
                    <strong>
                    {this.props.data.doc.docName} {this.state.preview?<i class="fas fa-caret-up"></i>:<i class="fas fa-caret-down"></i>}
                    </strong>
                   
                </div>
                {this.state.preview 
                ?
                    <div className="addsign-dropdown">
                        <iframe src={this.props.data.doc.url} width="80%" height="300px" title="preview" />
                        <div className="addsign-dropdown-inner">
                            <h4>Signature Info</h4>
                            <h5>NAME: {this.props.data.user.name}</h5>
                            <h5>SIGN: {this.props.data.sign} </h5>
                            <h5>PAGE NUMBER: {this.props.data.pageNumber}</h5>

                            
                            <button className="button" onClick={()=>this.submit()}>Change and Download</button>
                        </div>

                    </div>
                :
                    <></>
                }
                
            </div>
        )
    }
}

export default ChangeAndDownloadDoc
