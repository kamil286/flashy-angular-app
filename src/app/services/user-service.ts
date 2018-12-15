import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user-model'
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    private getUsersUrl = environment.urlUserAll;

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.getUsersUrl);
    }
}