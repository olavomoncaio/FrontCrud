import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardapioModel } from '../cardapio.model';
import { CardapioService } from '../cardapio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
  providers: [CardapioService]
})

export class EditarComponent implements OnInit {
  id: number;
  model: CardapioModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CardapioService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== null && this.id !== undefined)
          this.aoObter(this.id);
      else
        this.router.navigate(['/cardapio']);
    });
  }

  aoObter(id: number) {
    this.service.obter(id).subscribe(resposta => {
      this.model = resposta.item;
    })
  }

  aoSalvar() {
    this.service.editar(this.model).subscribe(resposta => {
    });
    this.router.navigate(['/cardapio']);
  }

  aoCancelar() {
    this.router.navigate(['/cardapio']);
  }
}
