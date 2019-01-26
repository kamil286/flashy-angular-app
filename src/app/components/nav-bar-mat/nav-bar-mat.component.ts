import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar-mat',
  templateUrl: './nav-bar-mat.component.html',
  styleUrls: ['./nav-bar-mat.component.scss'],
})
export class NavBarMatComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  createFlashcard() {
    this.router.navigate(["/create"]);
  }
}
