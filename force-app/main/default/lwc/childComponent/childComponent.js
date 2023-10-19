import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {

    @track Message;

    @api
    changeMessage(strString)
    {
        this.Message = strString.toUpperCase();
    }
}