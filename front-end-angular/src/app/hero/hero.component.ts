import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  data = { text: "", author: "" };
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getterfunc();
  }

  async getterfunc() {
    this.data = await this.httpClient.get('http://localhost:8008/').toPromise();
  }

  copyfunc = () => {
    const selBox = document.createElement('textarea');
    selBox.value = this.data.text + " - " + this.data.author;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
