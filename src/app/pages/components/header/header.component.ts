import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isModalOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  

  openProfileModal() {
    this.isModalOpen = true;
  }

  closeProfileModal() {
    this.isModalOpen = false;
  }
}
