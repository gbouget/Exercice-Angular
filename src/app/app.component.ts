import { Component } from '@angular/core';
import { Post } from './object/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  
  posts = [ ];
  
  constructor() {
	this.loadData();
  }
  
  loadData() {
	// Post 1
	let post01 = new Post();
	post01.setTitle('Titre 1');
	post01.setContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt mauris feugiat leo ullamcorper, vitae bibendum felis facilisis. Maecenas a fringilla ipsum, vel tristique tortor.');
	post01.setLoveIts(4);
	post01.setCreatedAt(Post.generateDate());
	
	// Post 2
	let post02 = new Post();
	post02.setTitle('Titre 2');
	post02.setContent('Mauris fringilla et massa ut aliquam. Pellentesque fringilla mi arcu, eu interdum est vehicula in. Donec dapibus gravida arcu, at sollicitudin augue aliquam nec.');
	post02.setLoveIts(-2);
	post02.setCreatedAt(Post.generateDate());
	
	// Post 3
	let post03 = new Post();
	post03.setTitle('Titre 3');
	post03.setContent('Nullam dapibus mi non velit tristique, ut imperdiet lorem dictum. Vivamus placerat suscipit tortor eu accumsan. Sed vel ex commodo, viverra tellus tempor, facilisis eros.');
	post03.setLoveIts(0);
	post03.setCreatedAt(Post.generateDate());
	
	this.posts.push(post01);
	this.posts.push(post02);
	this.posts.push(post03);
  }
  
}
