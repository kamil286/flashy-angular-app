import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user-model'
import { environment } from 'src/environments/environment';

import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    private getUsersUrl = environment.urlUserAll;

    public getUsers() {
        return this.http.get<User[]>(this.getUsersUrl);
    }
}