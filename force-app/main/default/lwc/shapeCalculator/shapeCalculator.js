import { LightningElement, track } from 'lwc';

export default class ShapeCalculator extends LightningElement {
    @track currentOutput;
    width;
    height;
    side;
    diagonal1;
    diagonal2;

    sideChangeHandler(event){
        this.side = event.target.value
    }
    widthChangeHandler(event){
        this.width = event.target.value
    }
    heightChangeHandler(event){
        this.height = event.target.value
    }
    diagonal1ChangeHandler(event){
        this.diagonal1 = event.target.value
    }
    diagonal2ChangeHandler(event){
        this.diagonal2 = event.target.value
    }
    calculateSqAreaHandler(){
        const s= this.side
        this.currentOutput = 'Area of Square is : '+(s*s)
    }
    calculateRecAreaHandler(){
        const w = this.width
        const h = this.height
        this.currentOutput = 'Area of the Rectangle is : '+(w*h)
    }
    calculateRhAreaHandler(){
        const d1 = this.diagonal1
        const d2 = this.diagonal2
        this.currentOutput = 'Area of the Rhombus is : '+(d1*d2)/2
    }
}