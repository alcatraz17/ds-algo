class QuadraticRoots {
  getQuadraticRoots(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return [-1];
    }

    const sqrtDiscriminant = Math.sqrt(discriminant);

    const firstRoot = Math.floor(((-b + sqrtDiscriminant) / 2) * a);
    const secondRoot = Math.floor(((-b - sqrtDiscriminant) / 2) * a);

    return [firstRoot, secondRoot];
  }
}

const quadraticRootsResult = new QuadraticRoots();

console.log(quadraticRootsResult.getQuadraticRoots(1, -2, 1));
