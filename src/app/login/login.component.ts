import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/chanteur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent implements OnInit {


  user = new User();
  err : number = 0;
  message : string ="login ou mot de passe erronés..";

  constructor(private authService : AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin()
    {
      this.authService.login(this.user).subscribe({
        next: (data) => {
          let jwToken = data.headers.get('Authorization')!;
         
          this.authService.saveToken(jwToken);
           this.router.navigate(['/']); 
        },
        error: (err: any) => {
          this.err = 1; 
          if (err.error.errorCause=="disabled")
               this.message = "L'utilisateur est désactivé !";

      
        }
        });
        
        
    }

    

}
