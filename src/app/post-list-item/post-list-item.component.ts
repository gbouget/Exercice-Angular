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

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {}

  ngOnInit() {
  }

  ajouterLike(nombre) {
	  this.loveIts = this.loveIts + nombre;
  }
}
