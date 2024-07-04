let readlineSync = require('readline-sync');

class Heroe {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago"){
      ataque = "magia";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    else if (this.tipo === "guerreiro ") {
      ataque = "espada";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    else if (this.tipo === "monge") {
      ataque = "artes marciais";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } 
    else if (this.tipo === "ninja") {
      ataque = "shuriken";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
}

console.log("===== Jogo Classes de um Herói =====\n");

let jogadorNome = readlineSync.question("Informe o seu nome: ");
let jogadorIdade = readlineSync.question("Informe a sua idade: ");

console.log("Classes de herois: ");
tipoHeroi = ['mago', 'guerreiro', 'monge', 'ninja'],
jogadorTipo = readlineSync.keyInSelect(tipoHeroi, "Escolha uma classe: ");

// let jogadorTipo = readlineSync.question("Informe o tipo de heroi: ");

let hero = new Heroe(jogadorNome, jogadorIdade, tipoHeroi[jogadorTipo]);

console.log("\nInformações do Jogador: ");
console.log(`O jogador ${jogadorNome} tem ${jogadorIdade} anos e escolheu o herói ${tipoHeroi[jogadorTipo]}`);

console.log("\nInformações do Heroi: ");
hero.atacar();