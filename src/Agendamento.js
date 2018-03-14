function Agendamento() {
    let clazz = {
        para: (consulta) => {
            let umDiaEmMilisegundos = 1000 * 60 * 60 * 24;
            let vinteDiasEmMilisegundos = umDiaEmMilisegundos * 20;
            let novaData = new Date(
                consulta.getData().getTime() + vinteDiasEmMilisegundos);

            while (novaData.getDay() == 0 || novaData.getDay == 6) {
                novaData = new Date(novaData.getTime() + umDiaEmMilisegundos);
            }

            let novaConsulta = new Consulta(
                consulta.getNome(),
                consulta.getProcedimentos(),
                consulta.isParticular(),
                consulta.isRetorno(),
                novaData
            );
            return novaConsulta;
        }
    };

    return clazz;
}
