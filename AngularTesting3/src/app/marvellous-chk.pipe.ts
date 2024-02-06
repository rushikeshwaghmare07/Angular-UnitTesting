// marvellous-chk.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value: number, parameter: string): string {
    switch (parameter) {
      case 'Prime':
        return this.isPrime(value) ? 'Prime' : 'Not Prime';
      case 'Perfect':
        return this.isPerfect(value) ? 'Perfect' : 'Not Perfect';
      case 'Even':
        return value % 2 === 0 ? 'Even' : 'Odd';
      case 'Odd':
        return value % 2 !== 0 ? 'Odd' : 'Even';
      default:
        return 'Invalid Parameter';
    }
  }

  private isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }
}
