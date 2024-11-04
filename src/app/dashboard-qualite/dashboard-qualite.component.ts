import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../Service/user-service.service';

@Component({
  selector: 'app-dashboard-qualite',
  templateUrl: './dashboard-qualite.component.html',
  styleUrls: ['./dashboard-qualite.component.css']
})
export class DashboardQualiteComponent {
  trustedUrl: SafeResourceUrl;
  showPopup = false;
  productNumber !: number;
  supplierNumber !: number;
  grossQuantity!: number;
  temperature!: number;
  prediction: any;


  constructor(private sanitizer: DomSanitizer,private userService: UserService, private router: Router) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://app.powerbi.com/reportEmbed?reportId=e6e99838-6ca5-4bc8-b6cb-6b16796fe24c&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730");
  }
  togglePopup(): void {
    this.showPopup = !this.showPopup;

  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/front']);
  }

  submitForm1(): void {
    this.userService.predictAddQ(this.grossQuantity,this.supplierNumber,this.productNumber  )
      .subscribe(
        (response: any) => {
          this.prediction = response.prediction;
          console.log(response.prediction);
          
        },
        (error) => {
          console.error('Error predicting order time:', error);
        }
      );
  }
}
