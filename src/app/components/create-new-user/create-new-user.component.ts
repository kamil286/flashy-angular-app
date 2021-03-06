import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'src/app/models/user-model';
import { UserService } from '../../services/user-service'

@Component({
    selector: 'app-create-user',
    templateUrl: './create-new-user.component.html'
})
export class CreateNewUserComponent implements OnInit {

    users: User[];

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
        console.log("Perform creation of the new user");
    }
}