import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = localStorage.getItem('role') as string;
      const token = localStorage.getItem('token') as string;
      if(role === 'admin' && token){
        this.router.navigate(['/admin']);
      }
      else if (!role && !token){
        this.router.navigate(['/auth/login']);
      }
    return true;
  }
  
}
