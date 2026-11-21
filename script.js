(function() {
  'use strict';

  // Aguarda o DOM carregar completamente
  document.addEventListener('DOMContentLoaded', function() {
    
    // Sistema de abas
    const botoes = document.querySelectorAll('.tab-btn');
    const abas = document.querySelectorAll('.aba-conteudo');

    /**
     * Ativa a aba correspondente ao idAba informado
     * @param {string} idAba - identificador da aba (stats, carreira, conquistas, frases)
     */
    function ativarAba(idAba) {
      // Remove classe ativo de todos os botões e abas
      botoes.forEach(btn => btn.classList.remove('ativo'));
      abas.forEach(aba => aba.classList.remove('ativo'));

      // Adiciona classe ativo ao botão clicado
      const botaoAtivo = Array.from(botoes).find(btn => btn.dataset.aba === idAba);
      if (botaoAtivo) botaoAtivo.classList.add('ativo');

      // Adiciona classe ativo à aba correspondente
      const abaAtiva = document.getElementById(`aba-${idAba}`);
      if (abaAtiva) abaAtiva.classList.add('ativo');
    }

    // Adiciona evento de clique em cada botão
    botoes.forEach(btn => {
      btn.addEventListener('click', () => {
        const idAba = btn.dataset.aba;
        ativarAba(idAba);
      });
    });

    // Garante que a aba inicial "stats" esteja ativa
    if (!document.querySelector('.aba-conteudo.ativo')) {
      ativarAba('stats');
    }
  });

})();