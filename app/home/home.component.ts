import { Posts } from './Posts';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts: Posts[]
  progressFlag: boolean
  constructor(public http : HttpClient) {
    this.progressFlag = false
    this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data
        this.progressFlag = true
      })

   }

  ngOnInit() {
  }

}
