import { Component } from '@angular/core';
import { appRoutesKey } from 'src/app/app-routing.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public get loginUrl(): string {
    return `/${appRoutesKey.login}`;
  }
}
