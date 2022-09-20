import { Routes } from "@angular/router";
import { AdminComponent } from "../Admin/admin.component";
import { LoginComponent } from "../Auth/login/login.component";
import { SigninComponent } from "../Auth/signin/signin.component";
import { ErrorComponent } from "../ErrorPage/error.component";
import { AdminGuard } from "../Guards/admin.guard";
import { AuthGuard } from "../Guards/auth.guard";
import { UserGuard } from "../Guards/user.guard";
import { HomeComponent } from "../Home/components/home/home.component";
import { UserComponent } from "../User/components/user/user.component";

export const routes:Routes = [
    {path:'', component:HomeComponent},
    { path: 'admin', canActivate:[AdminGuard] ,loadChildren: () => import('../Admin/admin.module').then(m => m.AdminModule)},
    {path:'auth', canActivate:[AuthGuard], children:[
        {path:"login", component:LoginComponent},
        {path: "signup", component:SigninComponent}
    ]},
    {path:'user', canActivate:[UserGuard] ,loadChildren: () => import('../User/usern.module').then(m => m.UsernModule)},
    {path:"**", component:ErrorComponent}
    
]