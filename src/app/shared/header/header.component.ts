import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  isLogin(): boolean {
    return this.localStorageService.get('address');
  }

  
}
