import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/Operators';

@Injectable()
export class PostServiceService {
	constructor(private httpclient: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.httpclient
			.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
			.pipe(map((posts) => posts.map((post) => post)));
	}
}
