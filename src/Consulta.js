function Consulta(paciente, procedimentos, particular, retorno, data) {
    
    var clazz = {

        preco : function() {
            if (retorno) return 0;

            var precoFinal = 0;

            procedimentos.forEach((procedimento) => {
                if(procedimento == "raio-x") precoFinal += 55;
                else if (procedimento == "gesso") precoFinal += 32;
                else precoFinal +=25;
            });

            if (particular) precoFinal *= 2;

            return precoFinal;
        },

        getNome: () => paciente,
        getProcedimentos: () => procedimentos,
        isParticular: () => particular,
        isRetorno: () => retorno,
        getData: () => data

    };

    return clazz;

};