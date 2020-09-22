import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit {
  isAuth = false;
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit(): void {
  }
}
