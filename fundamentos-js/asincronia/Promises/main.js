const URL =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
const fetchPromise = fetch(URL);

console.log(fetchPromise);

//Forma incorrecta de hacer un fetch
//  fetchPromise.then((response) => {
//const jsonPromises = response.json();
//jsonPromises.then((data) => {
//    const names = data.map((e) => e.name);
//    console.log(names);
//});
//});

//Forma correcta
fetchPromise
  .then((response) => {
    //Verifico si el servidor acepto y proceso correctamente la solicitud
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const names = data.map((e) => e.name);
    console.log(names);
  })
  .catch((e) => {
    console.error(`Could not get products: ${e}`);
  });

console.log("Started request…");
