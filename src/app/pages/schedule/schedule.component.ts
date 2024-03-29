import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OfferedService } from 'src/app/models/offeredService';
import { ScheduleAvailable } from 'src/app/models/scheduleAvailable';
import { OfferedServicesService } from 'src/app/services/offered-services.service';
import { SchedulesService } from 'src/app/services/schedules.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  offeredService!: OfferedService;
  schedulesAvailable!: ScheduleAvailable[];
  modalAberto = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private offeredServicesService: OfferedServicesService,
    private schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.getAvailableServices();
  }

  getAvailableServices() {
    const offeredServiceId = this.route.snapshot.paramMap.get('id') as string;

    this.offeredServicesService.getById(offeredServiceId).subscribe({
      next: res => {
        this.offeredService = res;
        console.log(this.offeredService);

        this.schedulesService.getAllAvailable(this.offeredService.companyId, offeredServiceId).subscribe({
          next: res => {
            this.schedulesAvailable = res;
            console.log(this.schedulesAvailable);
          }
        }); 
      }
    });
 
  }

  navigateToServices(companyId: string) {
    this.router.navigate(['/services', companyId]);
  }
  
}
