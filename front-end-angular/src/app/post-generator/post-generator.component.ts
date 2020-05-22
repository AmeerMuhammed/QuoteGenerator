import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post-generator',
  templateUrl: './post-generator.component.html',
  styleUrls: ['./post-generator.component.scss']
})
export class PostGeneratorComponent implements OnInit {
  data = { text: '', author: '' }
  id: Number;
  handle: string;
  bgNum: Number = Math.floor(Math.random() * (+10 - +0)) + +0; //random num between 0 & 10 -> 10bg images in assets folder
  bgUrl: string = "../../assets/bg" + this.bgNum + ".jpg";
  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.handle = this.route.snapshot.params['handle'];
    this.loadQuote();
  }
  loadQuote = async () => {
    this.data = await this.httpClient.get('http://localhost:8008/' + this.id).toPromise();
    this.data.text = await this.setPunctuation(this.data.text);
  }
  setPunctuation = (str: string) => {
    str = str.replace(/:/gi, ':<br />');
    str = str.replace(/;/gi, ';<br />');
    str = str.replace(/,/gi, ',<br />');
    str = str.replace('.', '.<br />');
    console.log(str);
    return str;
  }
}