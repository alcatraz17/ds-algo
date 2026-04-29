class CelToFar {
  celToFar(celsius) {
    return celsius * 1.8 + 32;
  }
}

const celToFar = new CelToFar();

console.log(celToFar.celToFar(100));
