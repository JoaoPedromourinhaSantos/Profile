function contactMe() {
  alert("Olá! Você pode entrar em contato comigo via e-mail ou LinkedIn. 😊");
}
function contactMe() {
  alert("Olá! Você pode entrar em contato comigo via e-mail ou LinkedIn. 😊");
}

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  const formatted = now.toLocaleDateString('pt-BR', options);
  document.getElementById('datetime').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();
