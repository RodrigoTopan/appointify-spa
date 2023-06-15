import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() categoryName!: string;
  @Input() serviceName!: string;
  @Input() serviceDescription!: string;
  @Input() servicePrice!: string;
  @Input() companyName!: string;
  @Input() employeeName!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
}
