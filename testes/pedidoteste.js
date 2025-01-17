// Classe para representar um prato
class Prato {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}

// Lista de pratos disponíveis
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

// Função para carregar os pratos no cardápio
function carregarCardapio() {
    const cardapioList = document.getElementById('cardapioList');
    cardapioList.innerHTML = '';

    cardapio.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nome} - R$ ${item.preco} <button onclick="adicionarAoPedido(${index})">Adicionar</button>`;
        cardapioList.appendChild(li);
    });
}

let pedido = [];

// Função para adicionar um prato ao pedido
function adicionarAoPedido(index) {
    pedido.push(cardapio[index]);
    alert(`${cardapio[index].nome} foi adicionado ao seu pedido.`);
}

// Função para finalizar o pedido
function finalizarPedido() {
    if (pedido.length === 0) {
        alert("Por favor, adicione algum prato ao pedido.");
        return;
    }
    
    let total = 0;
    pedido.forEach(item => total += item.preco);

    document.getElementById('totalPedido').textContent = `Total do pedido: R$ ${total}`;
}

// Função para reservar mesa
function reservarMesa() {
    const numeroMesa = document.getElementById('numeroMesa').value;
    
    if (numeroMesa < 1 || numeroMesa > 10) {
        document.getElementById('reservaMensagem').textContent = "Por favor, escolha um número de mesa entre 1 e 10.";
        return;
    }

    document.getElementById('reservaMensagem').textContent = `Mesa ${numeroMesa} reservada com sucesso!`;
}

// Função para escolher garçom
function escolherGarcom() {
    const nomeGarcom = document.getElementById('garcomSelect').value;
    document.getElementById('garcomMensagem').textContent = `Garçom escolhido: ${nomeGarcom}`;
}

// Carregar o cardápio ao iniciar
carregarCardapio();

