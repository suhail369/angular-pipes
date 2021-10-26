import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covertMiles',
})
export class CovertMilesPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    if (!value) {
      return '';
    }
    switch (targetUnits) {
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1.609344 * 1000;
      case 'cm':
        return value * 1.609344 * 1000 * 1000;
      default:
        return value * 1.609344;
    }
  }
}
