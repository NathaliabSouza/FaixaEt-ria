/*Desafio4: Classificação de faixa etária;
	- Crie um programa que classifica o usuário com base na idade passada
	- Utilizar variáveis e if/else
	- Faixas etárias:
		=> Criança: 0-12 anos
		=> Adolescente: 13-17 anos
		=> Adulto: 18-59 anos
		=> Idoso: 60 anos ou mais
        */
      
        
    const idadeUsuario = 80; // substituir idade para que a classificação mude também


    function classificarFaixaEtaria(idade) {
    if (idade <= 12) {
        return "Criança (0-12 anos)";
    } else if (idade <= 17) {
        return "Adolescente (13-17 anos)";
    } else if (idade <= 59) {
        return "Adulto (18-59 anos)";
    } else {
        return "Idoso (60 anos ou mais)";
    }
}


const idadeUsuario = 80; // substituir idade para que a classificação mude também

const classificacao = classificarFaixaEtaria(idadeUsuario);
console.log(`Você é classificado como: ${classificacao}`);
