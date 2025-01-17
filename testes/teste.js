// Estado das mesas: true = disponível, false = ocupada
let mesas = [true, false, true, true, false, true, true, false, true, false]; 

// Função para exibir a disponibilidade das mesas
function exibirMesas() {
    const mesasContainer = document.getElementById("mesas");
    mesasContainer.innerHTML = '';  // Limpa o conteúdo antes de adicionar novamente

    mesas.forEach((disponivel, index) => {
        const mesa = document.createElement("div");
        mesa.classList.add("mesa");
        mesa.classList.add(disponivel ? "disponivel" : "ocupada"); // Define a classe baseada na disponibilidade
        mesa.textContent = `Mesa ${index + 1}`;

        // Adiciona um evento de clique para mostrar o status da mesa e alternar seu estado
        mesa.onclick = () => {
            mostrarStatusMesa(index, disponivel);
            // Alterna o estado da mesa ao clicar (disponível <-> ocupada)
            mesas[index] = !disponivel; 
            exibirMesas(); // Atualiza a exibição das mesas
        };

        mesasContainer.appendChild(mesa); // Adiciona a mesa ao container
    });
}

// Função para mostrar o status da mesa
function mostrarStatusMesa(numeroMesa, disponivel) {
    const mensagemStatus = document.getElementById("mensagemStatus");
    if (disponivel) {
        mensagemStatus.innerHTML = `A Mesa ${numeroMesa + 1} está OCUPADA.`;
    } else {
        mensagemStatus.innerHTML = `A Mesa ${numeroMesa + 1} está DISPONÍVEL.`;
    }
}

// Chama a função para exibir as mesas ao carregar a página
exibirMesas();




