import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DonneesService} from '../../service/donnees.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.css']
})
export class AddFishComponent implements OnInit {

  constructor(private fishs: DonneesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const name = form.value.name;
    const size = form.value.size;
    const city = form.value.city;
    this.fishs.addFish(name, size, city);
    this.router.navigate(['profil']);
  }
}
