import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoDetalheComponent } from "./components/produto-card-detalhe.component";
import { ProdutoRoutingModule } from "./produto.route";
import { ProdutoCountComponent } from "./components/produto-count.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponent } from "./produto-app.component";
import { ProdutoService } from "./services/produto.service";
import { ProdutoResolve } from "./services/produto.resolve";

@NgModule({
  declarations: [
    ProdutoAppComponent,
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent,
  ],
  imports: [CommonModule, ProdutoRoutingModule],
  exports: [],
  providers: [ProdutoService,ProdutoResolve],
})
export class ProdutoModule {}
