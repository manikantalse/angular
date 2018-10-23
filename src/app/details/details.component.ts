import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public currentBook;
  public currentCharacter;
  public currentHouse;

  constructor(private _route: ActivatedRoute, private router: Router, public gameHttpService: DataService) {
    console.log("constructor is called");
  }

  ngOnInit() {
    console.log("ngOnInit called")
    //getting bookId from route
    let bookId = this._route.snapshot.paramMap.get('bookId');
    console.log(bookId);

    this.gameHttpService.getSingleBookInformation(bookId).subscribe(
      data => {
        console.log(data);
        this.currentBook = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    let characterId = this._route.snapshot.paramMap.get('characterId');
    console.log(characterId);

    this.gameHttpService.getSingleCharacterInformation(characterId).subscribe(
      data => {
        console.log(data);
        this.currentCharacter = data;


      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    let houseId = this._route.snapshot.paramMap.get('houseId');
    console.log(houseId);

    this.gameHttpService.getSingleHouseInformation(houseId).subscribe(
      data => {
        console.log(data);
        this.currentHouse = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

}
