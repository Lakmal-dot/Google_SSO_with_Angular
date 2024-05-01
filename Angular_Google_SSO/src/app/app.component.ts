import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Google_SSO';
  user: any;
  loggedIn: any;
  isModalOpen = false;
  modalImageUrl = '';

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("User: ",this.user);
    });
  }

  openModal(imageUrl: string) {
    this.isModalOpen = true;
    this.modalImageUrl = imageUrl;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
