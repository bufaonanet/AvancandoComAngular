import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { NgBrazil } from "ng-brazil";
import { TextMaskModule } from "angular2-text-mask";
import { CustomFormsModule } from "ng2-validation";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";

import { SobreComponent } from "./institucional/sobre/sobre.component";
import { CadastroComponent } from "./demo/reactiveForms/cadastro/cadastro.component";
import { NavegacaoModule } from "./navegacao/navegacao.module";
import { AuthGuard } from "./services/app.guard";
import { CadastroGuard } from "./services/cadastro.guard";
import { FilmesComponent } from "./demo/pipes/filmes/filmes.component";
import { FileSizePipe } from "./demo/pipes/filmes/filesize.pipe";
import { ImageFormaterPipe } from "./demo/pipes/filmes/image.pipe";
import { BarModule } from "./demo/bar-di-zones/bar.module";
import { BarService } from "./demo/bar-di-zones/bar.service";
import { HttpClientModule } from "@angular/common/http";
import { TodoModule } from "./demo/todo-list/todo.module";


export const BAR_PROVIDERS: Provider[] = [BarService];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
    
    
  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule,
    HttpClientModule,
    TodoModule

  ],
  providers: [
    AuthGuard, 
    CadastroGuard, 
    //BAR_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
