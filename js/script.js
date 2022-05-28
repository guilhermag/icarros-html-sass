let contactForm = document.querySelector('#contact_form');

contactForm.addEventListener('submit', (event) => {
  let name = document.querySelector('#name').value,
    email = document.querySelector('#email').value,
    phone = document.querySelector('#phone').value,
    message = document.querySelector('#story').value;

  axios.post('https://webhook.site/94e6b897-a892-4f26-97a7-378a5dc535e8',
  {
    name,
    email,
    phone,
    message
  }
  ).finally(
    () => alert('Enviado com sucesso')
  )


})