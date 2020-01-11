import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private userName: String;
  private user: User;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userName = params.get('userName'); 
      this.userService.getUser("me")
     .subscribe(
       result => this.user = <User>result,
       err => console.error('Got an error: ' + err),
       () => console.log('Got a complete notification')
     );
    });

    
  }

}
