import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class HelperService {

  constructor() { }

  public getResourceUrl(resourceUrl: string, isAsset = false): string {
    return (isAsset ? environment.ASSET_URL : environment.BASE_URL) + resourceUrl;
  }

  public getPayPalURL(resourceUrl: string): string {
    return environment.PAY_PAL_URL + resourceUrl;
  }
}
