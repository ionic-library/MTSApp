import { Injectable } from '@angular/core';

@Injectable()
export class ProvincesProvider {

  getProvinces = (): Array<string> => [ "AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK", "NT", "NU", "YT" ];

}
@Injectable()
export class FakeProvincesProvider {

  getProvinces = (): Array<string> => [ "foo", "bar", "baz"];

}
