import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from "@angular/router";
import { BannerComponent } from './banner/banner.component';

@NgModule({
    declarations:[
        BannerComponent,
        HeaderComponent,
        FooterComponent,
        ContainerComponent
  ],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports:[
        BannerComponent,
        HeaderComponent,
        FooterComponent,
        ContainerComponent
    ]
})

export class SharedModule{}