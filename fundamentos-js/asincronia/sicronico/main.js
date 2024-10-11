const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const ramdom = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const prime = [];

  while (prime.length < quota) {
    const candidate = ramdom(MAX_PRIME);
    if (isPrime(candidate)) {
      prime.push(candidate);
    }
  }
  return prime;
}

const quota = document.querySelector("#quota");

const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const prime = generatePrimes(quota.value);
  output.textContent = `!Finalizado! se han generado ${quota.value} numeros primos`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
