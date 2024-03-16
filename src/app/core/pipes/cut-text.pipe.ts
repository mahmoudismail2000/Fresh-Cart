import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText',
  standalone: true
})
export class CutTextPipe implements PipeTransform {

  transform(text:string, lastIndex:number): unknown {
    return text.split(' ').slice(0,lastIndex).join(' ');
  }

}
