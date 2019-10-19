import { Component, Input, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItem implements OnInit {
	faThumbsUp = faThumbsUp;
	faThumbsDown = faThumbsDown;

  @Input() post;

  constructor() {}

  ngOnInit() {
  }

  ajouterLike(nombre) {
	  this.post.loveIts = this.post.loveIts + nombre;
  }
}
