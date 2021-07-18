import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CadastroComponent } from "../demo/reactiveForms/cadastro/cadastro.component";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
  canDeactivate(component: CadastroComponent): boolean {
    if (component.mudancasNaoSalvas) {
      return window.confirm(
        "Tem certeza que deseja sair em preencher todos os dados:"
      );
    }
    return true;
  }
}
