// Extrair de uma listagem de clientes apenas as informações dos dependentes.
// Criar uma lista unica de dependentes.

const clientes = [
    {
        nome: 'Adilson',
        idade: '22',
        dependentes: [{
            nome: 'Alaska',
            idade: '0.5 meses',
            parentesco: 'filha'
        }]
    },
    {
        nome: 'Milena',
        idade: '24',
        dependentes:[{
            nome: 'Aksala',
            idade: '5.0 meses',
            parentesco: 'alhif'
        }]
    },
    {
        nome: 'Alaska',
        idade: 'No Idea',
        dependentes:[{
            nome: "",
            idade: "",
            parentesco: ""
        }]
    },
    {
        nome: 'Alaska',
        idade: 'No Idea',
        dependentes:[{
            nome: "AAA",
            idade: "AAAB",
            parentesco: "AAABC"
        }]
    }
]
//const list = [...clientes[0].dependentes,...clientes[1].dependentes]
for(let i = 0; i < clientes.length; i++){
    const list = [...clientes[i].dependentes]
    console.log(list);
}
