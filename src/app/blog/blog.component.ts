import { DevService } from '../devBlog-service/dev.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private _devService: DevService, private _spinner: NgxSpinnerService) {}
  public devLatestArticle: any;

  public ngOnInit(): void {
    this.getDevLatestBlog();
  }
  public getDevLatestBlog() {
    this._spinner.show();
    this._devService.getLatestDevArticle().subscribe((res:any) => {
      this.devLatestArticle = res.body;
      this._spinner.hide();
      this.showBlog(this.devLatestArticle);
    });
  }
  public showBlog(devLatestArticle: any) {
    console.log(devLatestArticle);
  }

  public onClick(event: any){
    let selectedCard = event.target.textContent;
    var result = this.devLatestArticle.filter((x: any) => {
      return x.title === selectedCard;
    });
    console.log(result[0].url);
  }
}
