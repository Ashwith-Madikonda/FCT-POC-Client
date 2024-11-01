import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import AppAuth from "../app/models/auth";

@Injectable({ providedIn: "root" })
export default class AppAuthService {
    constructor(
        private readonly http: HttpClient,
        private readonly router: Router) { }

    authenticated = () => !!this.token();

    auth(auth: AppAuth): void {
        this.http
            .post<any>("https://localhost:44347/login", auth,{observe: 'response'})
            .subscribe((result: any) => {
                console.log(result);
                if (!result || !result.body.token) return;
                localStorage.setItem("token", result.body.token);
                debugger
                this.router.navigate(["/fct"]);
            });
    }

    signin = () => this.router.navigate(["/"]);

    signout() {
        localStorage.clear();
        this.signin();
    }

    token = () => localStorage.getItem("token");
}
