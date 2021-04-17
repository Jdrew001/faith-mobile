import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key: string, obj) {
    return await Storage.set({
      key: key,
      value: JSON.stringify(obj)
    });
  }

  async getObject(key) {
    const ret = await Storage.get({ key: key });
    return JSON.parse(ret.value);
  }

  async setItem(key: string, item) {
    return await Storage.set({
      key: key,
      value: item
    });
  }

  async getItem(key) {
    const { value } = await Storage.get({ key: key });
    return value;
  }

  async removeItem(key) {
    return await Storage.remove({ key: key });
  }

  async keys() {
    const { keys } = await Storage.keys();
    return keys;
  }
  
  async clear() {
    return await Storage.clear();
  }
}
