import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    let words = value.split(' ');
 
    for(var i=0; i<words.length; i++) {

      let word = words[i].toLowerCase();

      if(i > 0 && this.isPreposition(word))
        words[i] = word;
      else {
        words[i] = this.getTitleCase(word);
      }
    }

    return words.join(' ');
  }

  private getTitleCase(word: string) : string {
    return word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
  }

  private isPreposition(word: string): boolean {
    let preposition = [
      'for', 'the', 'of', ''
    ];

    return preposition.includes(word);
  }
}
