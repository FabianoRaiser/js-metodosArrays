const elementoInsertLivros = document.getElementById('livros');
const elementValorLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibeLivroTela(listaLivros) {
    elementValorLivrosDisponiveis.innerHTML = '';
    elementoInsertLivros.innerHTML = '';
    listaLivros.forEach(livro => {
      // let disponibilidade = verificaDisponibilidade(livro);
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel';
        elementoInsertLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    });
}

// function verificaDisponibilidade(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'livros__imagens indisponivel';
//   }
// }