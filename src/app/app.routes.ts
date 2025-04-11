import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { PnfComponent } from './pages/pnf/pnf.component';
import { CalculaterComponent } from './pages/calculater/calculater.component';
import { TemplateFormsComponent } from './pages/template-forms/template-forms.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { ResponsiveComponent } from './pages/responsive/responsive.component';
import { LoginComponent } from './login/login.component';
import { ArrayCrudComponent } from './pages/array-crud/array-crud.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},

    {path:"dashbord",component:DashbordComponent},
    {path:"calculater",component:CalculaterComponent},
    {path:"template-forms",component:TemplateFormsComponent},
    {path:"reactive-forms",component:ReactiveFormComponent},
    {path:"responsive", component:ResponsiveComponent},
    {path:"login",component:LoginComponent},
    {path:'arrayCrud',component:ArrayCrudComponent},
    {path:"**",component:PnfComponent}
];
