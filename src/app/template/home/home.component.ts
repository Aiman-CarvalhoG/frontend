import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string ='Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png'
  dataValidade = '2021-12-31'

  constructor() {
    //this.anuncio = 'O ' + this.nomeProduto + ' está em promoção';
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('Id: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

   /* var variavel1;
    let variavel2;
    const variavel3 : number = 10;
    /*var idade = 15;
    console.log('Minha idade é:', idade);

    let idadelet = 20;
    console.log('Minha idade é:', idadelet);

    function imprimeIdade() {
      var idade = 20;
      console.log('Minha idade é:', idade);
    }

    function imprimeIdade() {
      var idade = 20;
      console.log('Minha idade é:', idade);
    }

    let idade=12
    function imprimeIdadefor() {
      for(let idade = 30; idade <= 40; idade++){
      console.log('Odade dentro do for: ', idade);
    }
    console.log('Idade fora do for: ', idade);
    }
    imprimeIdade();
    imprimeIdadefor();*/
  }

    ngOnInit(): void {
    }

}
