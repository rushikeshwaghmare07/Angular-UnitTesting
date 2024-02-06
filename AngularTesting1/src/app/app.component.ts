import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  CountCapital(str: string): number {
    return (str.match(/[A-Z]/g) || []).length;
  }

  CheckPassword(password: string): boolean {
    // Check if the password length is at least 8 characters
    if (password.length < 8) {
        return false;
    }

    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check if the password contains at least one digit
    if (!/\d/.test(password)) {
        return false;
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    // If all criteria are met, return true
    return true;
}

  ArrayAddition(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
}
