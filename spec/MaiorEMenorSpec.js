describe('Maior e Menor', function() {

  it('deve entender numeros em ordem nao sequencial', function(){

    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([5,15,7,9]);

    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor()).toEqual(5);
  });

  it('deve entender numeros em ordem crescente', function() {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([5,6,7,8]);

    expect(algoritmo.pegaMaior()).toEqual(8);
    expect(algoritmo.pegaMenor()).toEqual(5);
  });

  it('deve entender numeros em ordem decrescente', function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([8,7,6,5]);

    expect(algoritmo.pegaMaior()).toEqual(8);
    expect(algoritmo.pegaMenor()).toEqual(5);
  });

  it('deve entender um unico numero', function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([10]);

    expect(algoritmo.pegaMaior()).toEqual(10);
    expect(algoritmo.pegaMenor()).toEqual(10);
  });

});
