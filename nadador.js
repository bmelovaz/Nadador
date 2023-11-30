const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite a idade do nadador: ', (idadeInput) => {
    const idade = parseFloat(idadeInput)

    if(!isNaN(idade) ){

        if(idade >= 5 && idade <= 7) {
            console.log('Você é da categoria infantil A')
        }

        if(idade >= 8 && idade <= 10) {
            console.log('Você é da categoria infantil B')
        }

        if(idade >= 11 && idade <= 13) {
            console.log('Você é da categoria infantil C')
        }

        if(idade >= 14 && idade <= 16) {
            console.log('Você é da categoria infantil D')
        }

        if(idade >= 16 && idade <= 18) {
            console.log('Você é da categoria infantil E')
        }
    } else {
        console.log('Digite somente números')
    }

    rl.close()
})