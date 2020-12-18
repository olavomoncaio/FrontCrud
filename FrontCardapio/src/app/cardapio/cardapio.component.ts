import { Component, OnInit } from '@angular/core';
import { CardapioModel } from './cardapio.model';
import { CardapioService } from '../cardapio/cardapio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  providers: [CardapioService]
})
export class CardapioComponent implements OnInit {
  cardapioModel: CardapioModel[];
  criarNovo: boolean = false;
  novoItem: CardapioModel = new CardapioModel;

  constructor(
    private _service: CardapioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obterProdutos();
  }

  obterProdutos(){
    this._service.listar().subscribe(resposta => {
      this.cardapioModel = resposta.itens;
    })
  }

  excluir(cardapioId: number){
    this._service.excluir(cardapioId).subscribe(resposta => {
      this.cardapioModel = resposta.itens;
      this.obterProdutos();
    });
  }

  editar(id: number){
    this.router.navigate([`/cardapio/editar/${id}`]);
  }

  exibirCriacao(){
    this.criarNovo = true;
  }

  cancelarCriacao(){
    this.criarNovo = false;
    this.novoItem = null;
  }

  salvar() {
    this._service.salvar(this.novoItem).subscribe(resposta => {
      this.obterProdutos();
    })
  }
}
