function PacienteBuilder() {
    
    var nome = "Guilherme",
        idade = 28,
        peso = 72,
        altura = 1.82;

    var clazz = {
        
        comNome : function(valor) {
            nome = valor;
            return this;
        },

        comIdade : function(valor) {
            idade = valor;
            return this;
        },

        comPeso : function(valor) {
            peso = valor;
            return this;
        },

        comAltura : function(valor) {
            altura = valor;
            return this;
        },
        
        constroi : function() {
            return new Paciente(nome, idade, peso, altura);
        }
    };

    return clazz;
};