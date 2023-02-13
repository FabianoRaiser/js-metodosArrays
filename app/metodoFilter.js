const botoes = document.querySelectorAll('.btn');
 botoes.forEach(btn => btn.addEventListener('click', filtarLivros))

function filtarLivros () {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livroFiltrados = livros.filter(livro => livro.categoria == categoria);
    console.table(livroFiltrados)
}