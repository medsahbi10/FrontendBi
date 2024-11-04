import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-demand',
  templateUrl: './dashboard-demand.component.html',
  styleUrls: ['./dashboard-demand.component.css']
})
export class DashboardDemandComponent {
  trustedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://app.powerbi.com/reportEmbed?reportId=e6e99838-6ca5-4bc8-b6cb-6b16796fe24c&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730");
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/front']);
  }
}
