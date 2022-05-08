import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<string> {

  constructor() { }
  resolve(
    route: ActivatedRouteSnapshot
  ): string {
    return 'hello world!'
  }
}
