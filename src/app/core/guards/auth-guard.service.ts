import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  async canActivate() {
    try {
      const address = localStorage.getItem('address');
      if(address == null){
        this.router.navigate(['403']);
        // return false;
      }
      let result = true
      if (!result) {
        //this.notificationService.warning("Erreur authentification", "Cet espace n'est accessible qu'une fois authentifié")
      }
      return result;
    } catch (error) {
      return false
    }
  }
}