import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '@constants/constants';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(text: string, length: number = Constants.TWENTY, suffix: string = '...'): string {

    if (text.length > length) {
      let truncated: string = text.substring(Constants.ZERO, length).trim() + suffix;
      return truncated;
    }

    return text;
  }

}
