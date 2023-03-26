import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: IProdutoCarrinho[] = []; 

  constructor() { }

  obtemcarrinho(){
    this.items =  JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.items;
  }

  addAoCarrinho(produto: IProdutoCarrinho){
    this.items.push(produto); 
    localStorage.setItem("carrinho", JSON.stringify(this.items));
  }

  limparCarrinho(){
    this.items = [];
    localStorage.clear();
  }
  removerProdutoCarrinho(produtoId:number){
    this.items = this.items.filter(item=> item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.items));
  }
}
