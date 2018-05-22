import { FormControl } from "@angular/forms";
import luhn from 'luhn';
export class SinValidator {
  static isValid(control: FormControl){
    let input :string = control.value;
    return luhn.validate(input);
  }
}

