describe("Agendamento", () => {

    let agenda;

    beforeEach(() => {
        agenda = new Agendamento();
        paci = new PacienteBuilder().constroi(); 
    });

    it("deve agendar para 20 dias depois", () => {

        let consulta = new Consulta(
            paci, [], false, false, new Date(2014, 7, 1));
        let novaConsulta = agenda.para(consulta);
        
        expect(novaConsulta.getData().toString())
            .toEqual(new Date(2014, 7, 21).toString());

    });

    it("deve pular final de semana", ()=> {
        let consulta = new Consulta(
            paci, [], false, false, new Date(2014, 5, 30));
        let novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString())
            .toEqual(new Date(2014,6,21).toString())        
    });
});