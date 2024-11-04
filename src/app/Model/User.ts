export class User {
    id: number;
    username: string;
    role: string;
    password: string;
    email: string;
  
    constructor(id: number, username: string, role: string, password: string, email:string) {
      this.id = id;
      this.username = username;
      this.role = role;
      this.password = password;
      this.email = email;
    }
  }
  