import { Component } from '@angular/core';
import { PlaceholderService } from './placeholder.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
export interface Users {
  user: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private placeholderService: PlaceholderService) {}
  users: Users[] = [];
  filterForm = new FormControl('');

  ngOnInit() {

    this.filterForm.valueChanges.subscribe(change=>{
      if(change){
        this.users = this.users.filter(user=>user.user.includes(change))
      }
    })

    this.placeholderService.getUsers().subscribe((usersList: any) => {
      console.log(usersList)
      this.users = usersList.map((user: { name: any; email: any }) => {
        return { user: user.name, email: user.email };
      });
    });
  }
}
