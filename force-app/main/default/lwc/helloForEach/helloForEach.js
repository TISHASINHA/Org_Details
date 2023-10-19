import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {
            id:1,
            Name:"Amy",
            Title:"VP of Engineering"
        },
        {
            id:2,
            Name:"Cassi",
            Title:"VP of Sales"
        },
        {
            id:3,
            Name:"Jax",
            Title:"CEO"
        }
    ]
}