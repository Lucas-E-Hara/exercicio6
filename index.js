/*
⢰⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⢲⡀
⢸⠠⣶⠶⠆⣴⠶⣄⢰⡶⣦⠰⢶⡶⠆⣶⣆⠠⣶⠠⢰⡶⠶⠰⠶⣶⠈⣶⣆⡀⢸⠠
⢸⡀⣿⠒⠂⣿⡀⣿⢸⡷⣿⠁⢸⡇⢰⣇⣻⡄⣿⠐⢸⡗⠒⢀⡾⠃⢰⣇⣻⡀⢸⡀
⢸⠁⠛⢀⢀⠛⠚⠃⠘⠃⠛⠐⠘⠃⠚⠁⠘⠃⠛⠛⠛⠓⠒⠘⠓⠒⠛⠐⠘⠃⢸⠈
⢸⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⡺⠈
⠠⠱⡀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⡔⠁⠈
⠐⡀⠘⢄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⠎⠈⠐⠁
⠐⢀⡀⠈⢢⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⡠⠃⠐⠐⠁⠠
⠄⠐⠠⠈⠄⠱⡀⠻⣿⣿⣿⣿⣿⣿⣿⠈⣿⣿⣿⣿⣿⣿⣿⡿⠁⠔⠁⠄⡀⠄⠈⠈
⡀⠂⠂⡀⠠⠄⠘⢄⠙⣿⣿⣿⣿⣿⣿⠠⣿⣿⣿⣿⣿⣿⠟⢠⠊⠈⠠⠈⠁⠄⠈⠐
⠁⠂⠐⡀⢀⡀⠐⠈⠢⠈⢿⣿⣿⣿⣿⠐⣿⣿⣿⣿⣿⠋⡰⠁⠈⠈⠈⠂⢀⠈⠂⢀
⠂⠄⠁⠄⠈⠠⠄⠄⠠⠑⡄⠻⣿⣿⣿⢀⣿⣿⣿⡟⢁⠜⡀⠄⠄⠐⠐⠂⠁⡀⢀⢀
⡀⠈⠁⠁⡀⠄⠈⠂⠁⡀⠈⢆⠙⣿⣿⠐⣿⣿⠏⢠⠊⠈⡀⡀⠈⢀⡀⠈⠁⠐⠠⠂
⠠⠐⠂⠁⡀⠐⠐⡀⠐⠈⢀⠁⠣⡈⢻⠂⡿⠃⡰⠁⠐⠠⡀⠄⠐⢀⠂⠄⠐⠈⠈⠐
⠄⠂⠂⠂⢀⠁⠂⡀⠁⡀⠈⡀⠄⠑⣄⢀⠞⠄⠁⡀⠁⡀⠁⠂⠐⠐⠐⠈⠂⠄⢀
 ⠄⠂⠐⠁⠁⠐⢀⠁⡀⠁⢀⠄⢀⠠⠈⠋⠠⠁⠄⢀⠠⠄⡀⠁⢀⠄⠠⡀⢀⠈⠄
 */

const express = require("express")
const app = express()
const port = 3000

class Pessoa{
    constructor(nome, email, idade, hobbies){
        this.nome = nome
        this.email = email
        this.idade = idade
        this.hobbies = hobbies
    }
}

//Crie uma rota com Node/Express para devolver um JSON com um objeto Pessoa com os dados: nome, email, idade, hobbies (lista de hobbies).

app.get('/pessoa',(req,res) => {

    const pessoa1 = new Pessoa("Lucas", "lucas@email.com", 21, ["Dormir", "Jogar", "Ouvir Musica"])
    const pessoaJson = JSON.stringify(pessoa1)
    res.setHeader("Content-Type", "application/json")
    res.send(pessoaJson)
})

//Crie uma outra rota que devolve uma lista de pessoas (no mínimo 3).

app.get('/listapessoa',(req,res) => {
    const pessoa1 = new Pessoa("Lucas", "lucas@email.com", 21, ["Dormir", "Jogar", "Ouvir Musica"])
    const pessoa2 = new Pessoa("Paulo", "paulo@email.com", 21, ["Subir em Arvore", "Olhar pra Parede", "Ir ao Parque"])
    const pessoa3 = new Pessoa("Tiago", "tiago@email.com", 22, ["Jogar joguinho de fazenda", "Andar deMoto", "Elden Ring"])

    
    const listaPessoaJson = JSON.stringify([pessoa1,pessoa2,pessoa3])

    res.setHeader("Content-Type", "application/json")
    res.send(listaPessoaJson)
})

app.listen(port, () => {
    console.log("App executando na porta " + port)
})