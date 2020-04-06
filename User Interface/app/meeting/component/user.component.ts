import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { ActivatedRoute, Router } from '@angular/router';

import { userService } from '../service/user.service';
import { AlertService } from '../../_services/index';

import { IUser } from '../interface/user.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/meeting/template/user.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class userComponent {
    private _userService: userService;
    private _alertService: AlertService;
    private _router: Router;

    constructor(private route: ActivatedRoute, private router: Router, _userService: userService, _alertService: AlertService) {
        this._userService = _userService;
        this._alertService = _alertService;
        this._router = router;
    }

    ListOfUsers: IUser[] = [];

    user: IUser = {
        ID: 0,
        Username: '',
        Password: ''
    };

    ngOnInit() {
        this.user.ID = 0;
        this.user.Username = '';
        this.user.Password = '';

        this.LoadUsers();
    };

    LoadUsers(): void {
        this._userService.getUsers()
            .subscribe(resultData => {
                this.ListOfUsers = resultData;
            }, error => {
                if (error.status == 401) {
                    let link = ['/login'];
                    this._router.navigate(link);
                }
                else {
                    this._alertService.error("Something went wrong. Please try again.");
                }
            });
    };

    LoadSingleUser(SelectedUser: IUser): void {
        this.user = SelectedUser;
    };

    IsValid(user: IUser): boolean {
        if (user.Username == "") {
            this._alertService.error("Please enter username.");
            return false;
        }
        else if (user.Password == '') {
            this._alertService.error("Please enter password.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateUser(): void {
        if (this.IsValid(this.user) == true) {
            if (this.user.ID == 0) {
                this._userService.saveUser(this.user)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadUsers();
                            //return true;
                        }
                        else {
                            this._alertService.success("Save Failed");
                            //return false;
                        }
                    }, error => {
                        if (error.status == 401) {
                            let link = ['/login'];
                            this._router.navigate(link);
                        }
                        else {
                            this._alertService.error("Something went wrong. Please try again.");
                        }
                    });
            }
            else {
                this._userService.updateUser(this.user)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadUsers();
                            //return true;
                        }
                        else {
                            this._alertService.success("Update Failed");
                            //return false;
                        }
                    }, error => {
                        if (error.status == 401) {
                            let link = ['/login'];
                            this._router.navigate(link);
                        }
                        else {
                            this._alertService.error("Something went wrong. Please try again.");
                        }
                    });
            }
        }
    };

    DeleteUser(SelectedUser: IUser): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._userService.deleteUser(SelectedUser)
                .subscribe(result => {
                    this.LoadUsers();
                }, error => {
                    if (error.status == 401) {
                        let link = ['/login'];
                        this._router.navigate(link);
                    }
                    else {
                        this._alertService.error("Something went wrong. Please try again.");
                    }
                });
        }
    };
}