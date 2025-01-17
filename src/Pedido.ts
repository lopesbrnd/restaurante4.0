import { Prato } from "./Prato";
import { Cliente } from "./Cliente";

export class Pedido {
    private cliente: Cliente;   // Renomeado para evitar conflito com o getter/setter
    private itensPrato: Prato[];  // Renomeado para evitar conflito com o getter/setter

    constructor(cliente: Cliente) {
        this.cliente = cliente;
        this.itensPrato = [];
    }

    // Getter de cliente
    get cliente(): Cliente{
        return this.cliente;
    }

    // Setter de cliente
    set cliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    // Getter de pratos
    get pratos(): Prato[] {
        return this.itensPrato;
    }

    // Setter de pratos
    set pratos(pratos: Prato[]) {
        this.itensPrato = pratos;
    }

    // Método para adicionar prato
    adicionarPrato(prato: Prato): void {
        this.itensPrato.push(prato);
    }

    calcularSomaPratos(pratos: Prato[]): string {
        const total = pratos.reduce((total, prato) => total + (prato.preco * prato.quantidade), 0);
        return total.toFixed(2);  // Retorna o valor com 2 casas decimais
    }
}
