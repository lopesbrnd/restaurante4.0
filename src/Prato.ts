export class Prato{
    private _quantidade:number
    private _nome:string
    private _preco:number
    private _descricao:string

    constructor(quantidade: number, nome: string, preco: number, descricao:string) {
        this._quantidade = quantidade 
        this._nome = nome;
        this._preco = preco;
        this._descricao=descricao
    }

    get quantidade(): number {
        return this._quantidade;
    }

    set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(preco: number) {
        this._preco = preco;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(descricao: string) {
        this._descricao = descricao
    }

    adicionar_quantidade(n:number){
        this._quantidade= n
        return;
    }
}
