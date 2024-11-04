import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user-service.service';
import { User } from '../Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-mt',
  templateUrl: './user-mt.component.html',
  styleUrls: ['./user-mt.component.css']
})
export class UserMTComponent implements OnInit {
  users$!: Observable<User[]>; // Initialize users$ as undefined
  showPopup: boolean = false; // Variable to control the visibility of the popup
  newUser: User = new User(0, '', '', '','');
  
  constructor(private userService: UserService,private router : Router ) { }

  ngOnInit(): void {
    // Call the getUsers method from UserService to fetch the list of users
    this.loadUsers();
    this.users$ = this.userService.getUsers();

  } 
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  

  loadUsers(): void {
    // Load users from the service
    this.users$ = this.userService.getUsers();
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/front']);
  }

  deleteUser(userId: number): void {
    // Call the deleteUser method from UserService to delete the user
    this.userService.deleteUser(userId).subscribe(
      () => {
        // User deleted successfully
        console.log('User deleted successfully');
        // Refresh the list of users
        this.loadUsers();
      },
      (error) => {
        // Handle error
        console.error('Error deleting user:', error);
      }
    );
  }
  toggleSuccessPopup(): void {
    this.showPopup = !this.showPopup;
  }

  addUser(): void {
    // Call the createUser method from UserService to add the user
    this.userService.createUser(this.newUser).subscribe(
      () => {
        // User added successfully
        console.log('User added successfully');
        this.togglePopup(); 
        this.newUser = new User(0, '', '', '', '');; // Reset the user object to its initial state
        // Close the popup after a delay


        // Refresh the list of users
        this.loadUsers();
        // Hide the add user form
      },
      (error) => {
        // Handle error
        console.error('Error adding user:', error);
      }
    );
  }
}
