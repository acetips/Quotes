import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value:any):any{
    if(value){
      let timeElapsed = Math.floor  ((+new Date()-value)/1000);
      if(timeElapsed<60){
        return timeElapsed+"seconds ago"
      }
      let secToMin = 60;
      let mins =  Math.floor(timeElapsed / secToMin);

      if (mins == 1){
        return 'Posted '+mins +' minute ago';
      }
      if (mins >=1 && mins < 60){
        return 'Posted '+mins +' minutes ago';
      }
      let secondsInDay=86400;
      let days=Math.floor(timeElapsed/secondsInDay)
      if(days>=1){
        return days + " day(s) passed."
      }
    }
    else{
      return value;
    }
  }
}