import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterates',
  standalone: true
})
export class IteratesPipe implements PipeTransform {

  transform(value: number): unknown[] {
    return Array.from({ length: value }, (_, index) => index + 1);
  }

}
