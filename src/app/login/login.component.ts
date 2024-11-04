import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  #router = inject(Router);
  #userservice = inject(UserService);
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  onSubmit2(): void {
    this.userService.login({
      username: this.username || '',
      password: this.password || ''
    }).subscribe({
      next: (response: any) => {
        if (response.success) {
          console.log('Login successful', response);
          // You may want to store the token and redirect the user
          this.userService.getRoleByUsername(this.username).subscribe({
            next: (roleResponse: any) => {
              const role = roleResponse.role;
              switch (role) {
                case 'ADMIN':
                  this.router.navigate(['/dashboard']);
                  break;
                case 'CONTROL_QUALITY':
                  this.router.navigate(['/dashboardQualite']);
                  break;
                case 'DEMAND_INSIGHT':
                  this.router.navigate(['/dashboardDemand']);
                  break;
                case 'LOGISTICS':
                  this.router.navigate(['/dashboardLogistic']);
                  break;
                default:
                  // Redirect to a default page if the role is not recognized
                  this.router.navigate(['/front']);
                  break;
              }
            },
            error: (roleError: any) => {
              console.error('Error retrieving role:', roleError);
              // Redirect to a default page
              this.router.navigate(['/front']);
            }
          });
        } else {
          console.log('Login failed');
          // Handle login failure
        }
      },
      error: (error: any) => {
        console.error('Login error', error);
        // Handle login errors
      }
    });
  }
  
  
}
