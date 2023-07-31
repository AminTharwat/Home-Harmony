import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/home/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
  {path:'hero',component:HeroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
