import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { EnployeesComponent } from './components/enployees/enployees.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EnployeeEditComponent } from './components/enployee-edit/enployee-edit.component';

const appRoutes : Routes = [
  { 'path' : '', component:EnployeesComponent },
  { 'path' : 'edit/:id', component:EnployeeEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EnployeesComponent,
    NavbarComponent,
    EnployeeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
