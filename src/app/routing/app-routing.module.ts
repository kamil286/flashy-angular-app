import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CreateNewFlashcardComponent } from '../components/create-new-flashcard/create-new-flashcard.component';
import { FlashcardBoardMatComponent } from '../components/flashcard-board-mat/flashcard-board-mat.component';
import { DeleteFlashcardComponent } from '../components/delete-flashcard/delete-flashcard.component';

const routes: Routes = [
  { path: '', component: FlashcardBoardMatComponent },
  { path: 'create', component: CreateNewFlashcardComponent },
  { path: 'delete', component: DeleteFlashcardComponent },
  { path: 'edit', component: CreateNewFlashcardComponent },
];

export const routing = RouterModule.forRoot(routes);

