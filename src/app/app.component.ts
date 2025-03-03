import { Component } from '@angular/core';
import { PlaceholderService } from './placeholder.service';
import { CommonModule } from '@angular/common';
export interface Users {
  user: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private placeholderService: PlaceholderService) {}
  users: Users[] = [];

  ngOnInit() {
    this.placeholderService.getUsers().subscribe((usersList: any) => {
      this.users = usersList.map((user: { name: any; email: any }) => {
        return { user: user.name, email: user.email };
      });
    });
  }
}
