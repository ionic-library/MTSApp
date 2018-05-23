import { FormControl, ValidationErrors } from "@angular/forms";
import luhn from 'luhn';
export class SinValidator {

  static isValid(control: FormControl) : ValidationErrors | null{
    let input :string = control.value;

    if(!luhn.validate(input)){
      return { "foo": "bar" };
    }
    return null;
  }
}

