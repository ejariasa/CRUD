import { PostServiceService } from './post-service.service';
import { Post } from './post.model';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	posts$;

	selected: Post;
	constructor(private postService: PostServiceService) {
		this.posts$ = postService.getPosts();
		this.selected = new Post();
	}

	EditPost(post: Post): void {
		console.log(post);
		this.selected = post;
	}

	UpdatePost(): void {
		console.log(this.selected);
	}

	Create(post: Post): void {
		this.selected = post;
	}
}
