import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hash'
})
export class HashPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return "#" + value;
  }

}
