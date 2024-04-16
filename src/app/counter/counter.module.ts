import { NgModule } from "@angular/core";
import { CounterComponnet } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        CounterComponnet
    ],
    exports: [
        CounterComponnet
    ]

})


export class CounterModule {
}