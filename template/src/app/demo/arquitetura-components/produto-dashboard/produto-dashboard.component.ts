import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { fromEvent, Observable } from "rxjs";
import { ProdutoCountComponent } from "../components/produto-count.component";
import { Produto } from "../models/produto";

@Component({
  selector: "app-produto-dashboard",
  templateUrl: "./produto-dashboard.component.html",
  styles: [],
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[];

  @ViewChild("teste", { static: false }) mensagemTela: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false })
  contador: ProdutoCountComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.produtos = this.route.snapshot.data["produtos"];
    console.log(this.route.snapshot.data['teste']);    
  }

  ngAfterViewInit(): void {
    console.log("Objeto contador", this.contador.produtos);

    let clickText: Observable<any> = fromEvent(
      this.mensagemTela.nativeElement,
      "click"
    );

    clickText.subscribe(() => {
      alert("Clicou no texto");
      return;
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
