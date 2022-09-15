describe("index.js", () => {
  it("la variable cambiaDeValor existe", () => {
    expect(cambiaDeValor).to.exist;
  });

  it("la variable cambiaDeValor equivale a false", () => {
    expect(cambiaDeValor).to.equal(false);
  });

  it("la variable comida equivale a tacos", () => {
    expect(comida).to.equal('tacos');
  });

  it("la variable temperatura equivale al numero 35", () => {
    expect(temperatura).to.equal(35);
  });
});
