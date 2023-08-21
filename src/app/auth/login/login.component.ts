import { Component } from '@angular/core';
import { appRoutesKey } from 'src/app/app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public get registerUrl(): string {
    return `/${appRoutesKey.register}`;
  }
}
