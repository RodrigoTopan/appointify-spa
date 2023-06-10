import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { OfferedService } from 'src/app/models/offeredService';
import { CompaniesService } from 'src/app/services/companies.service';
import { OfferedServicesService } from 'src/app/services/offered-services.service';

@Component({
  selector: 'app-offered-service',
  templateUrl: './offered-service.component.html',
  styleUrls: ['./offered-service.component.scss']
})
export class OfferedServiceComponent implements OnInit {
  company!: Company;
  offeredServices!: OfferedService[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private offeredServicesService: OfferedServicesService,) { }

  ngOnInit(): void {
    this.getCompanyData();
  }

  getCompanyData() {
    const companyId = this.route.snapshot.paramMap.get('id') as string;
    console.log(companyId)

    this.companiesService.getById(companyId).subscribe({
      next: res => {
        this.company = res;
        console.log(this.company);
      }
    });

    this.offeredServicesService.getAllByCompanyId(companyId).subscribe({
      next: res => {
        this.offeredServices = res;
        console.log(this.offeredServices);
      }
    });
  }

  navigateToServices(companyId: string) {
    this.router.navigate(['/services', companyId]);
  }
}
