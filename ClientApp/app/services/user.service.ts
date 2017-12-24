import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http:Http) { }

    SendRequest(idSender: number, idReceiver: number) {
        return this.http.post("/api/user/sendRequest/"+idSender+ "/" + idReceiver, {})
            .map(res => res);
    }

    getUsers(id:number) {
        return this.http.post("api/user/getUsers/" + id, {})
            .map(response => response.json());
    }
    getFriends(id:number) {
        return this.http.get('api/user/friends/' + id)
                   .map(res => res.json());
    }
}
