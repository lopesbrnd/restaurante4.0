class Prato {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}

class Pedido {
    constructor() {
        this.pratos = [];
    }

    adicionarPrato(prato) {
        this.pratos.push(prato);
        alert(`${prato.nome} foi adicionado ao seu pedido.`);
    }

    calcularTotal() {
        return this.pratos.reduce((total, prato) => total + prato.preco, 0);
    }
}

class Restaurante {
    constructor(cardapio) {
        this.cardapio = cardapio;
        this.pedido = new Pedido();
    }

    carregarCardapio() {
        const cardapioList = document.getElementById('cardapioList');
        cardapioList.innerHTML = '';

        this.cardapio.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${item.nome} - R$ ${item.preco} <button onclick="adicionarAoPedido(${index})">Adicionar</button>`;
            cardapioList.appendChild(li);
        });
    }

    adicionarAoPedido(index) {
        this.pedido.adicionarPrato(this.cardapio[index]);
    }

    finalizarPedido() {
        const total = this.pedido.calcularTotal();
        const totalPedido = document.getElementById('totalPedido');
        totalPedido.textContent = `Total do pedido: R$ ${total}`;
    }

    reservarMesa() {
        const numeroMesa = document.getElementById('numeroMesa').value;
        const reservaMensagem = document.getElementById('reservaMensagem');

        if (Number(numeroMesa) < 1 || Number(numeroMesa) > 10) {
            reservaMensagem.textContent = "Por favor, escolha um número de mesa entre 1 e 10.";
            return;
        }

        reservaMensagem.textContent = `Mesa ${numeroMesa} reservada com sucesso!`;
    }

    escolherGarcom() {
        const nomeGarcom = document.getElementById('garcomSelect').value;
        const garcomMensagem = document.getElementById('garcomMensagem');
        garcomMensagem.textContent = `Garçom escolhido: ${nomeGarcom}`;
    }
}

// Criação do cardápio
const cardapio = [
    new Prato('X-Braga', 13, 'Pão, Hambúrguer Smash, Cheddar e Molho da casa'),
    new Prato('Duplo Braga', 20, 'Pão, 2 Hambúrguer Smash, Cheddar e Molho da casa'),
    new Prato('Clássico Bacurau', 15, 'Pão, Hambúrguer de Crane de Sol, Queijo de Coalho, Cebola Roxa e Molho da casa'),
    new Prato('Garcia Burguer', 16, 'Pão, Hambúrguer de Frango, Queijo sem lactose e Molho da casa'),
    new Prato('Felix Vegetariano', 17, 'Pão, Hambúrguer de Soja assado na brasa, Alface, Tomate, Cebola e Molho da casa'),
    new Prato('Batata Arante', 10, 'Batatas Fritas com tempero do chefe (acompanha Molho da casa)'),
    new Prato('Batata Arante com Cheddar e Bacon', 15, 'Batatas Fritas com tempero do chefe, Cheddar e Bacon (acompanha Molho da casa)'),
    new Prato('Anéis de Farias', 12, 'Anéis de Cebola fritos (acompanha molho)'),
    new Prato('Giva Shake de Morango', 16, 'Milk Shake de morango com calda de morango batido na hora'),
    new Prato('Giva Shake de Ninho com Nutella', 18, 'Milk Shake de Ninho com cobertura de Nutella batido na hora'),
    new Prato('Petit Gateau a La França', 22, 'Petit Gateau de chocolate com sorvete de creme e calda de chocolate'),
    new Prato('Refrigerante 2L', 15, 'Coca-Cola, Cajuína, Guaraná, Sprite'),
    new Prato('Refrigerante 1L', 10, 'Coca-Cola, Cajuína, Guaraná, Pepsi'),
    new Prato('Refrigerante Latinha', 6, 'Coca-Cola, Guaraná, Sprite'),
    new Prato('Suco (Copo)', 7, 'Limão, Morango, Maracujá e Laranja'),
    new Prato('Suco (Jarra)', 15, 'Limão, Morango, Maracujá e Laranja')
];

// Instância global de restaurante
const restaurante = new Restaurante(cardapio);

// Tornar a função acessível globalmente
window.adicionarAoPedido = function(index) {
    restaurante.adicionarAoPedido(index);
};

// Carregar o cardápio
restaurante.carregarCardapio();
