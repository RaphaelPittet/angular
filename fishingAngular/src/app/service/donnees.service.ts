import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  name: string;
  size: number;
  city: string
  constructor() { }

  getFishs()
  {
    return [
    {name: 'truite' , size: 54, city: 'fribourg'},
    {name: 'saumon' , size: 54, city: 'fribourg'},
    {name: 'alvin' , size: 54, city: 'fribourg'}
  ];
  }
}
