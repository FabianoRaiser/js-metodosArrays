const botoes = document.querySelectorAll('.btn');
 botoes.forEach(btn => btn.addEventListener('click', filtarLivros))

function filtarLivros () {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livroFiltrados = categoria == 'disponivel' ? filtarDisponibilidade() : filtarCategoria(categoria);
    exibeLivroTela(livroFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcValorTotalLivrosDisp(livroFiltrados);
        exibeValorTotalLivrosDisponiveis (valorTotal)
    }
}

function filtarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotalLivrosDisponiveis(valorTotal) {
    elementValorLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}