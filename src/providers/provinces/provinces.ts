import { Injectable } from '@angular/core';

@Injectable()
export class ProvincesProvider {
  public getProvinces = (): Array<string> => [ "AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK", "NT", "NU", "YT" ];
}
