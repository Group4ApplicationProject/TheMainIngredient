import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { APIService } from '../../api.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, 
              private router: Router, private route: ActivatedRoute, 
              public userService: UserService,
              private apiService: APIService) { }

  logOut() {
    this.userService.setAccountId(null);
    this.userService.setAccountEmail(null);
    this.userService.setAccountPassword(null);
    this.userService.setAccountLoggedIn(false);
    this.router.navigate(['']);
  }

  deleteAccount(id) {
    this.apiService.deleteAccount(id).subscribe(() => {
      this.logOut();
    });
  }
}
