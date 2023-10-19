import { LightningElement } from 'lwc';

export default class BoolParent extends LightningElement {

    constructor()
    {
        super();
        console.log('constructor on the Parent is called');
    }
    connectedCallback()
    {
        console.log('connected callback on the Parent is called');
    }
    renderedCallback()
    {
        console.log('rendered callback on the Parent is called');
    }
    disconnectedCallback()
    {
        console.log('disconnected callback on the Parent is called');
    }
}