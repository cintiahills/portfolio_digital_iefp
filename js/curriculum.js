const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/95c5c3ce-e09a-4890-ac83-97434fb5e57f/9SXiI7T2C1.json'
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const mainButton = document.querySelector('.download-button');
    const buttonText = document.getElementById('buttonText');
    const languageOptions = document.getElementById('languageOptions');
  
    mainButton.addEventListener('click', function () {
      if (!languageOptions.classList.contains('show')) {
        languageOptions.classList.add('show');
        buttonText.textContent = 'Clique no idioma selecionado abaixo';
      }
    });
  
    mainButton.addEventListener('mouseenter', function () {
      if (languageOptions.classList.contains('show')) {
        buttonText.textContent = '👇🏽';
      }
    });
  
    mainButton.addEventListener('mouseleave', function () {
      if (languageOptions.classList.contains('show')) {
        buttonText.textContent = 'Clique no idioma selecionado abaixo';
      }
    });
  
    const optionButtons = document.querySelectorAll('.language-option');
  
    optionButtons.forEach(button => {
      button.dataset.originalText = button.textContent;
  
      button.addEventListener('mouseenter', function () {
        button.textContent = '🥳';
      });
      button.addEventListener('mouseleave', function () {
        button.textContent = button.dataset.originalText;
      });
  
      button.addEventListener('click', function () {
        const lang = button.getAttribute('data-lang');
        buttonText.textContent = 'Baixando...';
  
        languageOptions.classList.remove('show');
  

        let filePath = '';
        switch (lang) {
          case 'pt':
            filePath = 'documents/cintia-PT.pdf';
            break;
          case 'en':
            filePath = 'documents/ccintia-EN.pdf';
            break;
          case 'es':
            filePath = 'documents/cintia-ES.pdf';
            break;
          case 'it':
            filePath = 'documents/cintia-IT.pdf';
            break;
          default:
            filePath = 'documents/cintia-PT.pdf';
        }
  
        window.open(filePath, '_blank');
  
        setTimeout(() => {
          buttonText.textContent = 'Clique para selecionar idioma';
        }, 3000);
      });
    });
  });
  