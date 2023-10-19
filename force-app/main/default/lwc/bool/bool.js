import { LightningElement, api } from "lwc";

export default class Bool extends LightningElement {
  @api show = "Hello World";

  constructor() {
    super();
    console.log("constructor on the child is called");
  }
  connectedCallback() {
    console.log("connected callback on the child is called");
  }
  renderedCallback() {
    console.log("rendered callback on the child is called");
  }
  disconnectedCallback() {
    console.log("disconnected callback on the child is called");
  }
}
