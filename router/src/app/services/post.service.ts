import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './../models/post.model'
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    private postUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {

    }

    getPosts(): Observable<Post[]> {
        return this.http.get(this.postUrl).map(this.extractData);
    }

    extractData(response: Response): Post[] {
        const result: Post[] = [];

        response.json().forEach(element => {
            const post = new Post(element.userId, element.id, element.title, element.body);
            result.push(post);
        });

        return result;
    }
}