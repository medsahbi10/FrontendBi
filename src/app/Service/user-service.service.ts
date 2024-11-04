import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { User } from '../Model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private router: Router) { }
  private baseUrl = 'http://localhost:5000'; // Adjust this URL to your Flask API's URL


  // Method to create a new user
  createUser(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/register', user);
  }

  // Method to get all users
  getUsers1(): Observable<User[]> {
    return this.http.get<User[]>('http://127.0.0.1:5000/users');
  }
  getUsers(): Observable<User[]> {
    return this.http.get<{ users: User[] }>('http://127.0.0.1:5000/users').pipe(
      map(response => response.users)
    );
  }

  // Method to get a specific user by ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`http://127.0.0.1:5000/users/${userId}`);
  }

  // Method to update a user
  updateUser(user: User): Observable<any> {
    return this.http.put(`http://127.0.0.1:5000/users/${user.id}`, user);
  }

  // Method to delete a user by ID
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:5000/users/${userId}`);
  }

  // Method for user login
  login(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post(this.baseUrl + '/login', credentials).pipe(
      tap((response: any) => {
        // Store the token in local storage
        localStorage.setItem('token', response.access_token);
      }),
      catchError((error: any) => {
        // Handle error
        console.error('Login failed:', error);
        throw error;
      })
    );
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/front']);
  }
  getRoleByUsername(username: string): Observable<any> {
    return this.http.get(`http://127.0.0.1:5000/role/${username}`);

  }

  predictOrderTime(productNumber: number, grossQuantity: number, temperature: number): Observable<any> {
    const data = {
      product_number: productNumber,
      gross_quantity: grossQuantity,
      temperature: temperature
    };
    return this.http.post<any>('http://127.0.0.1:5000/predict_time', data);
  }
  predictAddQ(grossQuantity: number, supplierNumber : number, productNumber: number): Observable<any> {
    const data = {
      GROSS_QUANTITY: grossQuantity,
      SUPPLIER_NUMBER : supplierNumber,
      TERMINAL_PRODUCT_NUMBER: productNumber,
      
      
    };
    return this.http.post<any>('http://127.0.0.1:5000/rrf', data);
  }
}
