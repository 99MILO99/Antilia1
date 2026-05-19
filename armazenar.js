// 1. Criamos a lista (array) para guardar os itens
let banco_de_dados = [];

function registrarAchado() {
    // 2. Pegamos o elemento de input pelo ID
    const inputItem = document.querySelector("#txt_achado");
    
    // 3. Extraímos o valor
    const nomeItem = inputItem.value;

    // 4. Verificamos se não está vazio (trim remove espaços em branco)
    if (nomeItem.trim() !== "") {
        
        // 5. Criamos o objeto do item
        const novoItem = {
            nome: nomeItem,
            tipo: "achado",
            status: "disponível"
        };

        // 6. Adicionamos na lista (em JS usamos .push em vez de .append)
        banco_de_dados.push(novoItem);

        // 7. Feedback no console
        console.log(`Sucesso! Item "${nomeItem}" registrado.`);
        console.table(banco_de_dados); // Exibe a lista de forma bonita no console

        // 8. Limpamos o campo
        inputItem.value = "";
    } else {
        alert("Por favor, digite o nome do item.");
    }
}