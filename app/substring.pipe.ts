import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: any, start?: number, end?: number): any {
    return value.slice(start,end);
  }

}
