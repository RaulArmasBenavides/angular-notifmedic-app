import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreedsServices } from '../../services/breeds.services';

@Component({
  selector: 'perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css'],
  providers :[BreedsServices]
})
export class perroComponent implements OnInit {
  
 
  public perro : any;
  public nombreperro:any;
 

  constructor(private _peticionesService : BreedsServices)  
  {
  }

    ngOnInit() {
     //MostrarImagen();
     // this.CargarLista();
  }

  /*CargarLista()
  {
      this._peticionesService.getBreeds().subscribe(
        result=> {
          console.log(result.message);
          this.perros = result.message as breed[];
        },
        error => {
          console.log(<any>error);
        }
    )
  }*/ 

  MostrarImagen() 
  {
      this._peticionesService.getBreedImage(this.nombreperro).subscribe(
        result=> {

          this.perro = result;
          console.log(result);
         // this.perros = result.message as breed[];
        },
        error => {
          console.log(<any>error);
        }
    )
  }

}
