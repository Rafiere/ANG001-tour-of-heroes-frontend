import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Esse atributo diz que esse service estará disponível na aplicação inteira.
})
export class MessageService {

  private messages: string[] = []; //Apenas esse serviço terá acesso a essa propriedade. Estamos realizando o encapsulamento.

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = []; //Método para limpar as mensagens do array.
  }

  getMessages(): string[] { //Método "getter" para garantir o encapsulamento.
    return this.messages;
  }
}
