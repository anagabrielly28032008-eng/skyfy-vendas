
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Skyfy Vendas iniciado com sucesso!');

    // Exibir a data atual no Dashboard
      const campoData = document.getElementById('dataAtual');

        if (campoData) {
            const hoje = new Date();

                campoData.textContent = hoje.toLocaleDateString('pt-BR', {
                      weekday: 'long',
                            day: '2-digit',
                                  month: 'long',
                                        year: 'numeric'
                                            });
                                              }
                                              });
                                              