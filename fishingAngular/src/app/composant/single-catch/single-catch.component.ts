import { Component, OnInit } from '@angular/core';
import {DonneesService} from '../../service/donnees.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-catch',
  templateUrl: './single-catch.component.html',
  styleUrls: ['./single-catch.component.css']
})
export class SingleCatchComponent implements OnInit {

  name: string;
  size: number;
  city: string;

  constructor(private fishs: DonneesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.fishs.getFishById(+id).name;
    this.size = this.fishs.getFishById(+id).size;
    this.city = this.fishs.getFishById(+id).city;
  }

}
