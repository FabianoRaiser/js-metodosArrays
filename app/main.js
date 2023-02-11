let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

getBuscarLivrosDaAPI ();
const elementoInsertLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibeLivroTela(livrosComDesconto);
}
