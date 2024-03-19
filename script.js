document.addEventListener("DOMContentLoaded", function() {
  var textInput = document.getElementById('input-texto');
  var outputText = document.getElementById('output-texto');
  var criptografarBtn = document.getElementById('btn-criptografar');
  var descriptografarBtn = document.getElementById('btn-descriptografar');
  var copiarBtn = document.getElementById('btn-copiar');
  var sobreBtn = document.getElementById('btn-sobre');
  var modal = document.getElementById('modal');
  var closeModal = document.getElementById('close');
  var modalMessage = document.getElementById('modal-message');

  criptografarBtn.addEventListener('click', function() {
      outputText.value = criptografarTexto(textInput.value);
  });

  descriptografarBtn.addEventListener('click', function() {
      outputText.value = descriptografarTexto(textInput.value);
  });

  copiarBtn.addEventListener('click', function() {
      outputText.select();
      document.execCommand('copy');
      exibirMensagemNaModal('Texto copiado para a área de transferência!');
  });

  sobreBtn.addEventListener('click', function() {
      exibirMensagemNaModal('Desenvolvido em março/2024 através do programa #ONE, Oracle Next Education em participação da Alura pelo aluno Richard Bryan.');
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });

  function criptografarTexto(texto) {
      return texto.replace(/e/g, "enter")
                  .replace(/i/g, "imes")
                  .replace(/a/g, "ai")
                  .replace(/o/g, "ober")
                  .replace(/u/g, "ufat");
  }

  function descriptografarTexto(textoCriptografado) {
      return textoCriptografado.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
  }

  function exibirMensagemNaModal(mensagem) {
      modalMessage.textContent = mensagem;
      modal.style.display = 'block';
      setTimeout(function() {
          modal.style.display = 'none';
      }, 3000); // Oculta após 3 segundos
  }
});
