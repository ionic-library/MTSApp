import { FormControl, ValidationErrors } from "@angular/forms";
import luhn from 'luhn';
export class SinValidator {

  /**
   * Validates the contents of control against the Luhn algorithm.
   * https://en.wikipedia.org/wiki/Luhn_algorithm
   * @param control The Control to be validated
   */
  static isValid(control: FormControl) : ValidationErrors | null{
    const input : string = control.value;

    if(!luhn.validate(input)){
      //TODO: Figure out what to return
      return { "foo": "bar" };
    }
    return null;
  }
}

