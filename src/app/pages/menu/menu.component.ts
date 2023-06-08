import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { OfferedServicesService } from 'src/app/services/offered-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categories: any[] = [];
  usedServices: any[] = [];
  appointments: any[] = [];

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private offeredService: OfferedServicesService,
    private appointmentsService: AppointmentsService
  ) { }

  ngOnInit(): void {
    //this.loadAppointments();
    this.loadUsedServices();
    this.loadCategories();
  }

  loadAppointments(): void {
    this.appointmentsService.getAll().subscribe({
      next: res => {
        console.log(res);
        this.appointments = res;
      }
    });
  }

  loadUsedServices(): void {
    this.offeredService.getAll().subscribe({
      next: res => {
        console.log(res);
        this.usedServices = res;
      }
    });
  }

  loadCategories(): void {
    this.categoriesService.getAll().subscribe({
      next: res => {
        console.log(res);
        this.categories = res;
      }
    });
  }

  navigateToCategories() {
    this.router.navigate(['/categories']);
  }

}
