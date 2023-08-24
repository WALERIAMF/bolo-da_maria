import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';
import * as M from 'materialize-css';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
