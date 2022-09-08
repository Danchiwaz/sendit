import { Routes } from "@angular/router";
import { AdminComponent } from "../Admin/admin.component";
import { LoginComponent } from "../Auth/login/login.component";
import { SigninComponent } from "../Auth/signin/signin.component";
import { HomeComponent } from "../Home/components/home/home.component";
import { UserComponent } from "../User/components/user/user.component";

export const routes:Routes = [
    {path:'', component:HomeComponent},
    { path: 'admin', loadChildren: () => import('../Admin/admin.module').then(m => m.AdminModule)},
    {path:'auth', children:[
        {path:"login", component:LoginComponent},
        {path: "signup", component:SigninComponent}
    ]},
    {path:'user', loadChildren: () => import('../User/usern.module').then(m => m.UsernModule)}
    
]