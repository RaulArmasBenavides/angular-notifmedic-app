import { Injectable } from "@angular/core";
import {breed} from '../models/breed';
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders}  from '@angular/common/http'; 

@Injectable()
export class BreedsServices
{
   public url:string;
   //public raza:Array<breed>;

    constructor(public _http:HttpClient){ 
        //this.url = "https://dog.ceo/api/breeds/list/all";
          this.url = "https://dog.ceo/api/breed/{0}/images/random";
    }

    getBreeds():Observable<any>
    {
        return this._http.get(this.url);
    }


    getBreedImage(foto:string):Observable<any>
    {
        this.url = "https://dog.ceo/api/breed/" + foto + "/images/random";
        return this._http.get(this.url);
    }

    getBreedImageElephant(foto:string):Observable<any>
    {
        this.url = "https://dog.ceo/api/breed/" + foto + "/images/random";
        return this._http.get(this.url);
    }
    
}