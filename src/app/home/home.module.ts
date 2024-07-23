import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports:[
        HomeComponent
    ]
})

export class HomeModule{}