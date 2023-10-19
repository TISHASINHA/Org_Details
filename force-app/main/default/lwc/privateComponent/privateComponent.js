import { LightningElement, track} from 'lwc';

export default class PrivateComponent extends LightningElement {
    @track reactiveProperty;
    nonReactiveProperty;

    changeHandler1(event)
    {
        this.reactiveProperty = event.target.value;
    }
    changeHandler2(event)
    {
        this.nonReactiveProperty = event.target.value;
    }

}