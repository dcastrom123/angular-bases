import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>counter: {{counter}}</h3>
        <button (click)="increaseBy(2)">+1</button>
        <button (click)="reset()">reset</button>
        <button (click)="decreaseBy(2)">-1</button>
    `,
}) 
export class CounterComponnet {
    counter = 0;

    increaseBy(value: number){
        this.counter += value;
    }

    decreaseBy(value:  number){
        this.counter -= value;
    }

    reset(){
        this.counter = 10
    }
}
