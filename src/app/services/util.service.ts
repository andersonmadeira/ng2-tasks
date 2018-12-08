import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public generateUniqueId(): string {
    const id: string = uuid();
    return id;
  }

}
