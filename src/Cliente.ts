export class Cliente{
    private  _nome:string

    constructor(nome:string){
        this._nome=nome
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }
}
