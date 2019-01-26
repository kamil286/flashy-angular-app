import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { UserService } from './services/user-service';
import { FlashcardService } from './services/flashcard-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateNewFlashcardComponent } from './components/create-new-flashcard/create-new-flashcard.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { DeleteFlashcardComponent } from './components/delete-flashcard/delete-flashcard.component'
import { FlashcardMockService } from './services/flahscard-service-mock.component';

import {
  MatCommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarMatComponent } from '../app/components/nav-bar-mat/nav-bar-mat.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlashcardBoardMatComponent } from '../app/components/flashcard-board-mat/flashcard-board-mat.component';
import { MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { routing } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewFlashcardComponent,
    CreateNewUserComponent,
    DeleteFlashcardComponent,
    DeleteUserComponent,
    NavBarMatComponent,
    FlashcardBoardMatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatCommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    UserService,
    FlashcardService,
    FlashcardMockService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }