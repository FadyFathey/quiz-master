import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlDecode',
})
export class HtmlDecodePipe implements PipeTransform {
  transform(value: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = value;
    return txt.value;
  }
}
