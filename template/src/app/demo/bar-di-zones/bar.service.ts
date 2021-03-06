import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BarService {
  constructor(private http: HttpClient) {}

  obterBebidas(): string {
    return "Bebidas";
  }

  obterPorcoes(): string {
    return "Porcoes";
  }

  obterRefrigerantes(): string {
    return "Refrigerantes";
  }
}
