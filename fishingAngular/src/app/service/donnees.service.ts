import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {


  fishs = [
    {id: 1, name: 'truite' , size: 54, city: 'fribourg'},
    {id: 2, name: 'saumon' , size: 54, city: 'fribourg'},
    {id: 3, name: 'alvin' , size: 54, city: 'fribourg'}
  ];
  id: number;
  constructor() {
  }

  getFishs()
  {
    return this.fishs ;
  }

  getFishById(id: number){
    const fish = this.fishs.find((fishsObject) =>{
      return fishsObject.id === id;
    });
    return fish;
  }
}
