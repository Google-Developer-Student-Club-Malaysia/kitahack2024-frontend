import { Component, OnInit } from '@angular/core';
import { ClientPageService } from '../../services/clientpage.service';
import { ClientPage } from '../../types/clientpage.type';

@Component({
  selector: 'layout-default',
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent implements OnInit {
  clientPages: ClientPage[] = [];

  constructor(private clientPageService: ClientPageService) {}

  ngOnInit(): void {
    this.clientPageService.getClientPages().subscribe((clientPages) => {
      this.clientPages = clientPages;
    })
  }
}
