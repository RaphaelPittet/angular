import { Injectable } from '@angular/core';
//import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {


  private fishs = [
    {id: 1, name: 'truite' , size: 54, city: 'fribourg' , released: true},
    {id: 2, name: 'saumon' , size: 54, city: 'fribourg', released: true},
    {id: 3, name: 'alvin' , size: 54, city: 'fribourg', released: false}
  ];
  constructor(private router: Router) {
  }


  getFishs()
  {
    return this.fishs ;
  }

  getFishById(id: number){
    const fish = this.fishs.find((fishsObject) => {
      return fishsObject.id === id;
    });
    return fish;
  }

  addFish(name: string, size: number, city: string){
    const fishObject = {
      id: null,
      name: '',
      size: null,
      city: '',
      released: true,
    };
    fishObject.name = name;
    fishObject.size = size;
    fishObject.city = city;
    fishObject.id = this.fishs[(this.fishs.length - 1)].id + 1;
    this.fishs.push(fishObject);

  }


}
