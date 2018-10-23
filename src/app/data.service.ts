import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {
    console.log("game-http service was called");
  }

  public getAllCharacters(): any {
    return this._http.get('https://anapioficeandfire.com/api/characters/')
  }

  public getAllBooks(): any {
    return this._http.get('https://anapioficeandfire.com/api/books/')
  }

  public getAllHouses(): any {
    return this._http.get('https://anapioficeandfire.com/api/houses/')
  }
  //method to get particular book,character,houses
  public getSingleBookInformation(bookId): any {
    let myResponseOfBooks = this._http.get('https://anapioficeandfire.com/api' + '/books' + '/' + bookId)
    return myResponseOfBooks;
  }
  public getSingleCharacterInformation(characterId): any {
    let myResponseOfCharacter = this._http.get('https://anapioficeandfire.com/api' + '/characters' + '/' + characterId)
    return myResponseOfCharacter;
  }
  public getSingleHouseInformation(houseId): any {
    let myResponseOfHouse = this._http.get('https://anapioficeandfire.com/api' + '/houses' + '/' + houseId)
    return myResponseOfHouse;
  }

}
