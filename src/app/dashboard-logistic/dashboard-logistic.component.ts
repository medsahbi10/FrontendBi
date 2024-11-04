import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-logistic',
  templateUrl: './dashboard-logistic.component.html',
  styleUrls: ['./dashboard-logistic.component.css']
})
export class DashboardLogisticComponent {

  showPopup = false;
  productNumber !: number;
  grossQuantity!: number;
  temperature!: number;
  prediction: any;
  trustedUrl: SafeResourceUrl | undefined;
  
  constructor(private sanitizer: DomSanitizer, private userService: UserService, private router: Router) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://app.powerbi.com/reportEmbed?reportId=e6e99838-6ca5-4bc8-b6cb-6b16796fe24c&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730");
  }
  submitForm(): void {
    this.userService.predictOrderTime(this.productNumber, this.grossQuantity, this.temperature)
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
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/front']);
  }
  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }
}
