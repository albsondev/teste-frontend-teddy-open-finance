import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Certifique-se de importar o RouterModule
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Importe suas rotas
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Adicionando o RouterModule com suas rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
