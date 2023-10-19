import { LightningElement } from 'lwc';

export default class ParentComponentCommmunication extends LightningElement {
    handleChangeEvent(event)
    {
        this.template.querySelector('c-child-component').changeMessage(event.target.value);
    }
}