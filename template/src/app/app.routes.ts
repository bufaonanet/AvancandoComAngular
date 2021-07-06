import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./navegacao/home/home.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { CadastroComponent } from "./demo/reactiveForms/cadastro/cadastro.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "sobre", component: SobreComponent },
  {
    path: "produtos",
    loadChildren: () =>
      import("./demo/arquitetura-components/produto.module").then(
        (m) => m.ProdutoModule
      ),
  },

  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
