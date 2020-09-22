import { Component, OnInit } from '@angular/core';
import { DonneesService} from '../../service/donnees.service';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  public name: string;
  public age: number;
  public adresse: string;
  public hobby: Hobby;
  public fishs = [];



  constructor(private donnees: DonneesService) {
    this.name = 'Raphael';
    this.age = 23;
    this.adresse = 'route de la fin 26';
    this.hobby = {
      hobbyUn: 'Fitness',
      hobbyDeux: 'Lire',
      hobbyTrois: 'apprendre'
    };

  }

  ngOnInit(): void {
    this.fishs = this.donnees.getFishs();
    console.log(this.fishs);
  }

  onClick(){
    alert('aucune Infos');
  }

}

interface Hobby {
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;
}
