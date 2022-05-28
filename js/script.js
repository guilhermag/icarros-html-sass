let contactForm = document.querySelector('#contact_form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let name = document.querySelector('#name').value,
    email = document.querySelector('#email').value,
    phone = document.querySelector('#phone').value,
    message = document.querySelector('#story').value;

  let loaderContent = document.querySelector('#loader');
  loaderContent.classList.remove('loader-inative');
  loaderContent.classList.add('loader-active');

  axios.post('https://webhook.site/416933d6-6aad-4e27-84e4-b5e568b98613',
  {
    name,
    email,
    phone,
    message
  }
  ).finally(
    () => {
      loaderContent.classList.remove('loader-active');
      loaderContent.classList.add('loader-inative');
    }
  )


})