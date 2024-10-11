const log = document.querySelector(".event-log");

document.querySelector(".xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent} Finalizado con el estado ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );
  xhr.send();
  log.textContent = `${log.textContent} Inicio de la solicitud XHR`;
});

document.querySelector(".reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
