import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import User from "../app/models/user";

@Injectable({ providedIn: "root" })
export default class UserService {
    constructor(
        private readonly http: HttpClient) { }

    get = () => this.http.get<User>(`https://localhost:44347/getUserDetails`);
}