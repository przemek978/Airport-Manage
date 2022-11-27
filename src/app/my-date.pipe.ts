import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe extends DatePipe implements PipeTransform {

  // transform(value: Date, ...args: any[]): any {
  //   const date = super.transform(value,'dd MMMM YYYY, HH:MM');;
  //   const dateTab = date.split(' ');
  //   let datePlForm = '';
  //   switch (dateTab[1]) {
  //     case '01': dateTab[1] = 'stycznia'; break;
  //     case '02': dateTab[1] = 'lutego'; break;
  //     case '03': dateTab[1] = 'marca'; break;
  //   }
  //   dateTab.forEach((el, ind) => {
  //     if (ind === 2) { el += ' godzina'; }
  //     datePlForm += el + ' ';
  //   });
  //   return datePlForm;
  // }

}
