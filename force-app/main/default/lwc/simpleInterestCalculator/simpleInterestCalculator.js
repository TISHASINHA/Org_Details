import { LightningElement, track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
@track currentOutput;
principal;
rateOfInterest;
noOfYears;

principalChangeHandler(event)
{
    this.principal = event.target.value
}
timeChangeHandler(event){
    this.noOfYears =event.target.value
}
rateChangeHandler(event){
    this.rateOfInterest = event.target.value
}
calculateSIHandler()
{
    this.currentOutput  = 'Simple Interest is : '+(this.principal*this.rateOfInterest*this.noOfYears)/100;
}

}