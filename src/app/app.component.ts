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
	Posts: Post[];
	cancreate = true;

	selected: Post = new Post();
	constructor(private postService: PostServiceService) {
		postService.getPosts().subscribe((Response) => (this.Posts = Response));
	}

	EditPost(post: Post): void {
		this.selected = post;
		this.cancreate = false;
	}
	Clean(): void {
		this.selected = new Post();
		this.cancreate = true;
	}

	Create(): void {
		const id = this.Posts.length + 1;
		this.selected.id = id;
		this.Posts.push(this.selected);
		this.selected = new Post();
	}

	Delete(id: number): void {
		this.Posts = this.Posts.filter((post: Post) => post.id !== id);
		console.log(this.Posts);
		this.selected = new Post();
		this.cancreate = true;
	}
}
