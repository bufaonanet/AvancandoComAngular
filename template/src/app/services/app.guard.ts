import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad,CanActivate {
  user: { admin: true; logged: false };

  constructor() {}

  canLoad(): boolean {
    return this.user.admin;
  }

  canActivate(): boolean {
    return this.user.logged;
  }
}
