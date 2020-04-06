import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { loginService } from '../app/login.service';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
    templateUrl: '/app/login.component.html',
})

export class LoginComponent {
    private _route: ActivatedRoute;
    private _router: Router;
    private _loginService: loginService;

    constructor(_loginService: loginService, private route: ActivatedRoute, private router: Router) {
        this._route = route;
        this._router = router;
        this._loginService = _loginService;
    }

    IsLoggedIn: boolean;
    LoginFailed: boolean;

    ngOnInit() {
        if (sessionStorage.getItem('access_token')) {
            this.IsLoggedIn = true;
        };
    };

    username: string;
    password: string;

    UserLogin(): void {
        this._loginService.login(this.username, this.password)
            .subscribe(result => {
                if (result.access_token) {
                    this.IsLoggedIn = true;
                    sessionStorage.setItem('access_token', result.access_token);
                }
                else {
                    this.LoginFailed = true;
                    this.IsLoggedIn = false;
                    sessionStorage.removeItem("access_token");
                }
            }, error => {
                this.LoginFailed = true;
                this.IsLoggedIn = false;
                sessionStorage.removeItem("access_token");
                //console.log(error);
                //this._alertService.success("Save Failed");
            });
    };

    UserLogout(): void {
        this.IsLoggedIn = false;
        sessionStorage.removeItem("access_token");
    };
}