import { Injectable } from '@angular/core';

export enum LangCodes {
  EN = 'en',
  FR = 'fr'
}

@Injectable()
export class Lang {

  static GetCurrentLang(){
    return LangCodes.EN;
  }

}
