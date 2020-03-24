import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateComponent } from './components/create/create.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { ListComponent } from './components/list/list.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { 
  MatButtonModule,
  MatCardModule, 
  MatCheckboxModule,
  MatDividerModule, 
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,  
  MatInputModule,
  MatListModule,
  MatMenuModule, 
  MatOptionModule, 
  MatRadioModule,
  MatSelectModule, 
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule, 
  MatToolbarModule,
  MatTooltipModule
  } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ViewComponent } from './components/view/view.component';

//The path variables link to the corrisponding component
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'create-profile/:email/:password', component: CreateProfileComponent},
  {path: 'edit-profile/:id', component: EditProfileComponent},
  {path: 'edit-recipe/:id', component: EditRecipeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'view/:id', component: ViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    CreateComponent,
    CreateProfileComponent,
    EditProfileComponent,
    EditRecipeComponent,
    HomeComponent,
    ListComponent,
    MainNavComponent,
    SignInComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    MatTooltipModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule, 
    MatCardModule,
    MatCheckboxModule, 
    MatDividerModule,
    MatExpansionModule, 
    MatFormFieldModule, 
    MatGridListModule,
    MatIconModule, 
    MatInputModule, 
    MatListModule,
    MatMenuModule,
    MatOptionModule, 
    MatRadioModule,
    MatSelectModule, 
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule, 
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
