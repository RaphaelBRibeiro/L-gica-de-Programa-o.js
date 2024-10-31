/*Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */

let idade = prompt ('Informe a sua idade.');

if (idade >= 18){
    alert ('Você já é maior de idade e já pode tira a CNH. ');
} else {
    alert ('Você ainda não é maior de idade por isso ainda não pode tira a CNH. ');
}