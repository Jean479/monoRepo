import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
  standalone: true,
  pure: false
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, multiplier = 2): number {
    return value * multiplier;
  }
}
