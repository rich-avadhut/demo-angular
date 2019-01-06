import { Posts } from './Posts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts: Posts[]
  progressFlag: boolean
  constructor() {
    this.progressFlag = false
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data => {
        this.posts = data
        this.progressFlag = true
      })

   }

  ngOnInit() {
  }

}
