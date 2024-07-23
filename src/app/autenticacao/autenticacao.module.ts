import { NgModule } from "@angular/core";
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        CadastroComponent,
        LoginComponent,
  ],
    imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule,
    SharedModule
],
    exports:[
        CadastroComponent,
        LoginComponent
    ]
})

export class AutenticacaoModule{}