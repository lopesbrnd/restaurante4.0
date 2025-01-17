import { Mesa } from "./Mesa";
import { Pedido } from "./Pedido";
export class Garcom{
    private _nome:string
    private _disponibilidade:boolean=true
    private _taxa:number=0.05
    private _numero:number

    constructor(nome:string, disponibilidade: boolean, taxa: number, numero: number){
        this._nome=nome;
        this._disponibilidade = disponibilidade;
        this._taxa = taxa;
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

    get taxa(): number {
        return this._taxa;
    }

    set taxa(taxa: number) {
        this._taxa = taxa;
    }

    get numero(): number {
        return this._numero 
    }

    set numero(numero: number) {
        this._numero = numero
    }

    registrarPedido(mesa: Mesa, pedido: Pedido): void {
        mesa.realizarPedido(pedido);
        console.log(`Garçom ${this.nome} registrou o pedido para a mesa ${mesa._numero}.`);
    }

    calcularConta(mesa: Mesa): number {
        let total = mesa.calcularConta();
        let total_com_taxa=total*(1+this.taxa);
        console.log(`Conta total para a mesa ${mesa._numero}: R$ ${total_com_taxa.toFixed(2)}`);
        return total_com_taxa;
    }

    atualizarMesa(mesa: Mesa, status: boolean): void {
        mesa.atualizarDisponibilidade(status);
        let statusMesa = status ? 'disponível' : 'indisponível';
        console.log(`Mesa ${mesa._numero} está ${statusMesa}.`);
    }
