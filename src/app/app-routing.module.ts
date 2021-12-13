import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'add', component: AddPostComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/:id', component: CategoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
