import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './component/calculator/calculator.component';

const routes: Routes = [
  {
    path:'' ,redirectTo:'calc',pathMatch:'full'

  },
  {
    path:'calc',component:CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
