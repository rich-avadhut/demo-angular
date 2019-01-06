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
  comments: Comment[]
  constructor(public http : HttpClient) {
    this.progressFlag = true
   }

  ngOnInit() {
    this.progressFlag = false
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments/?postId='+this.id)
      .subscribe(data => {
        this.comments = data
        this.progressFlag = true
      })
  }

}
