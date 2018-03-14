describe("Consulta", function () {
    
    var guilherme;

    beforeEach(function() {
        guilherme = new PacienteBuilder().constroi();
    });

    describe("Consultas não particulares", function() {
        it("nao deve cobrar nada caso a consulta seja um retorno", function () {
            var consulta = new Consulta(guilherme, [], false, true);

            expect(consulta.preco()).toEqual(0);
        });

        it("deve cobrar 25 por cada procedimento comum", function () {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar preco especifico dependendo do procedimento", function () {
            var consulta = new Consulta(guilherme, ["proc-comum1", "raio-x", "proc-comum2", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

    describe("Consultas particulares", function() {

        it("deve cobrar o preco da consulta particular", function () {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(50 * 2);
        });

        it("deve cobrar o preco por cada procedimento comum da consulta particular", function () {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);
    
            expect(consulta.preco()).toEqual(100);
        });
    
        it("deve cobrar o preco por cada procedimento especial da consulta particular", function () {
            var consulta = new Consulta(guilherme, ["gesso", "raio-x"], true, false);
    
            expect(consulta.preco()).toEqual(174);
        });
    });

});