import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { UserService } from './services/user-service';
import { FlashcardService } from './services/flashcard-service';
import { FlashcardBoardComponent } from './components/flashcard-board/flashcard-board.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CreateNewFlashcardComponent } from './components/create-new-flashcard/create-new-flashcard.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { DeleteFlashcardComponent } from './components/delete-flashcard/delete-flashcard.component'

@NgModule({
  declarations: [
    AppComponent,
    FlashcardBoardComponent,
    NavBarComponent,
    CreateNewFlashcardComponent,
    CreateNewUserComponent,
    DeleteFlashcardComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    UserService,
    FlashcardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }