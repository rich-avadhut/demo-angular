import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  id : number

  progressFlag : boolean
  
  constructor() {
    this.progressFlag = true
   }

  ngOnInit() {
    this.progressFlag = false
      fetch('https://jsonplaceholder.typicode.com/comments/?postId'+this.id)
      .then(res=>res.json())
      .then(data => {
       // this.posts = data
        this.progressFlag = true
      })
  }

}
