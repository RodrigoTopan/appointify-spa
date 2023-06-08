import { Component, OnInit } from "@angular/core";
import { AppointmentsService } from "src/app/services/appointments.service";
import { CategoriesService } from "src/app/services/categories.service";
import { OfferedServicesService } from "src/app/services/offered-services.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  categories: any[] = [];
  usedServices: any[] = [];
  appointments: any[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private offeredService: OfferedServicesService,
    private appointmentsService: AppointmentsService
  ) {}

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
}
