import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'src/app/models/user-model';
import { UserService } from '../../services/user-service'

@Component({
    selector: 'app-delete-user',
    templateUrl: './delete-user.component.html'
})
export class DeleteUserComponent implements OnInit {

    users: User[];

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
        console.log("Perform deletion of the user!");
    }
}