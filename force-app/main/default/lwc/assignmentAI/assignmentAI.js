import { LightningElement, track, api } from 'lwc';

export default class AssignmentAI extends LightningElement {
    @api recordId;
    @track searchTerm='';
    @track searchResults=[];
    acceptedFormats='.pdf';

    handleSearchChange(event){
        this.searchTerm=event.target.value;
    }

    handleSearch(){
        const simulatedSearchResults=[
            {Id:'001', Name:'Document 1'},
            {Id:'002', Name:'Document 2'},
            {Id:'003', Name:'Document 3'}
        ];
        const filteredResults=simulatedSearchResults.filter(result=>{
            return result.Name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
        this.searchResults=filteredResults;

    }
    handleUploadFinished(event){
        const uploadedFiles = event.detail.files;
        uploadedFiles.forEach(file=>{
            console.log('Uploaded File Name:', file.Name);
            console.log('File ID: ',file.documentId);
            console.log('File Type: ', file.type);
            console.log('File Size (byts) : ', file.size);
        });
    }
}