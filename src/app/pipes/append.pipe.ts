import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(dataToBeTrannsform:string,appendtext:string): string {
    return dataToBeTrannsform+"  "+appendtext;
  }

} 
