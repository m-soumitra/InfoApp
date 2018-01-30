import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppServices {

    private _postsUrl = 'https://www.reddit.com/r/{}/top.json';
    private _postNewsApi = 'https://newsapi.org/v2/top-headlines';

    constructor(private _httpClient: HttpClient) {

    }

    public getPosts(category: string, country: string): Observable<any> {
        const params = new HttpParams().set('country', country).set('category', category)
        .set('apiKey', '182ea3432fa94118b7b2f6549524c60b');        
        // const url = this._postNewsApi.replace('{}', category);
        // console.log('Url : ', url)
        return this._httpClient.get(this._postNewsApi, { params });
    }

}
