import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,  // ✅ This makes it a standalone component
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  // ✅ Fix typo here
})
export class HeaderComponent implements OnInit { 
  constructor( private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    
  }
  goToHome() { 
    this.router.navigate(['home']);

  }

  logout() {
    console.log('Logout button clicked'); // ✅ Add log for debugging
    this.auth.logout();

  }
}
