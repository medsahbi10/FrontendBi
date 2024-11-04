import { Component } from '@angular/core';
import { UserService } from '../Service/user-service.service';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User(0, '', '', '',''); // Initialize user with default values
  showSuccessPopup: boolean = false; // Variable to control the visibility of the success popup

  constructor(private userService: UserService) { }

  createUser(): void {
    // Set the role to "admin"
    
    // Call the createUser method from UserService
    this.userService.createUser(this.user).subscribe(
      (response: any) => {
        // User created successfully
        console.log(response.message); 
        this.toggleSuccessPopup(); // Show the success popup
        // Log the response message
        // Optionally, perform any other actions such as redirecting to another page
      },
      (error) => {
        // Handle error
        console.error(error); 
        // Log the error
        // Optionally, display an error message to the user
      }
    );
  }
    toggleSuccessPopup(): void {
      this.showSuccessPopup = !this.showSuccessPopup;
    }
}
