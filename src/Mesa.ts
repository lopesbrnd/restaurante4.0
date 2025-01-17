import { Pedido } from "./Pedido";
export class Mesa {
    private _nome:string
    private _disponibilidade: boolean=true;
    private _pedido:Pedido;
    private _numero: number;

    constructor(nome:string, disponibilidade: boolean, pedido: Pedido, numero: number) {;
        this._nome=nome;
        this._disponibilidade = disponibilidade;
        this._pedido = pedido;
        this._numero = numero;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get disponibilidade(): boolean {
        return this._disponibilidade;
    }

    set disponibilidade(disponibilidade: boolean) {
        this._disponibilidade = disponibilidade;
    }

    get pedido(): Pedido {
        return this._pedido;
    }

    set pedido(pedido: Pedido) {
        this._pedido = pedido;
    }


    atualizarDisponibilidade(status: boolean): void {
        this.disponibilidade = status;
    }

    realizarPedido(pedido: Pedido): void {
        this.pedido = pedido;
        this.atualizarDisponibilidade(false); // Mesa não está disponível após o pedido
    }

    calcularConta(): number {
        if (this.pedido) {
            return this.pedido.calcularTotal();
        }
        return 0;
    }
