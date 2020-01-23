import { Component, OnInit } from '@angular/core';
import { ApiUnsplashService } from '../../layout/api-unsplash/api-unsplash.service';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  constructor(private api: ApiUnsplashService) {
    this.getData();
  }

  public resultPicture = [];
  public dataPicture = [];
  public pictures = [];
  

  ngOnInit() {
  } 

  getData() {
    this.api.getDataApi().subscribe(
      (pictures) => {
        console.log(pictures);
        this.resultPicture.push(pictures);
        this.resultPicture.forEach(element => {
          this.dataPicture = element.results;
          // console.log(this.dataPicture);
          this.getPictures(this.dataPicture);
        });
      }
    );
  }

  getPictures(result: any) {
    result.forEach( data => {
      this.pictures.push({
        img: data.urls.regular,
        description: data.description,
        tag: data.tag,
        id: data.id
      });
      console.log(this.pictures);
    });
  }

}
