function cadastrarUsuario() {
    /*informações para cadastro*/
    const email = document.getElementById("criar_login").value;
    const nome = document.getElementById("criar_nome").value;
     const telefone = document.getElementById("telefone-cadastro").value;
    const senha = document.getElementById("criar_senha").value;
     const senha1 = document.getElementById("repetir_senha").value;

    if (email === "" || senha === "" || senha1 === "" || nome === "" || telefone === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Salvando no LocalStorage
    localStorage.setItem("user_email", email);
    localStorage.setItem("user_nome", nome);
    localStorage.setItem("user_telefone", telefone);
    localStorage.setItem("user_new-password", senha1);
    localStorage.setItem("user_password", senha);

    alert("Conta criada com sucesso!");
    window.location.href = 'login.html'; // Redireciona após salvar
}

function verificarLogin() {
    // Recuperando o que foi salvo no sistema
    const emailCadastrado = localStorage.getItem("user_email");
    const senhaCadastrada = localStorage.getItem("user_password");

    // Usando oq o usuario digitou
    const emailDigitado = document.getElementById("txt_login").value;
    const senhaDigitada = document.getElementById("txt_senha").value;

    if (emailDigitado === emailCadastrado && senhaDigitada === senhaCadastrada) {
        alert("Login realizado com sucesso!");
        // window.location.href = 'dashboard.html';
    } else {
        alert("Gmail ou senha incorretos");
    }
}