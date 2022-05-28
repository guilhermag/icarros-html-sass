// End poit API
let baseURL = 'https://e-carros-api.herokuapp.com/'

// Ref elements
let findForm = document.querySelector('#findapi');
let brandSection = document.querySelector('#brands');

let allBrands = [];

const getApiData = () => {
  brandSection.innerHTML = `
    <p>Aguarde carregando</p>
  `;


  axios.get(baseURL + 'brands').then(
    res => {
      allBrands = res.data;
      brands.innerHTML = `
      <select id="getDataBrands">
        ${ allBrands.map(
          item => (
            `
            <option value="${item.id}">${item.id}</option>
          `)
        ).join(', ')}
      </select>
    `
    }
  );
}

getApiData();

let parameters = document.querySelector('#parameters')
let allParameters = []
function getParameters() {
  axios.get(baseURL + 'parameters').then(
    res => {
      allParameters = res.data;
      console.log(allParameters[0])
      parameters.innerHTML = `
        ${
          allParameters.map( item => {
            return `
            <input type="radio" value="${item.title}">
            <label>${item.title}</label>
            <br />
            `;
          }
          ).join('')
        }
      `;
    }
  );
}

getParameters();

// Send api function
findForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let getDataBrands = document.querySelector('#getDataBrands').value;
  
  let getUrl = '';

  if (getDataBrands === '') {
    getUrl = `${baseURL}adverts`;
  } else {
    getUrl = `${baseURL}adverts?brand=${getDataBrands}`;
  }

  axios.get(getUrl).then( res => console.log(res.data));
    })
