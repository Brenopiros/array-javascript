//#1

let numeros = [23, 83, 65];

//#2  quando de coloco o [] e um número vc especifica qual elemento do array vc que puxar//

console.log(`registro ${numeros[0]}`);

//#3

numeros[1] = 100;
console.log(`registro ${numeros[1]}`);


//#4 o quando se tem um lenght em uma array vc não conta quantas letras tem a palavra e sim quantas palavar tem o array

const nome = ["bone", "strike", "dead", "soul", "silence"];
console.log("Quantidade de elementos no array:", nome.length);

//#5 se caso vc quiser somar um array vc deve colocar bem especificado cada posição que vc quer somar se caso vc colocar apenas o os numeros de array ele vai conectar cada numero e não somar

let soma = [12, 23, 15, 52, 42];
console.log(`a soma dos numeros da lista é: ${soma[0]+soma[1]+soma[2]+soma[3]+soma[4]}`);

//#6 o pop sempre elimina o ultimo elemento

let prime = [1, 3, 6, 8, 11];
prime.pop();
console.log(prime);

//#6 o unshift ele adiciona um elemento só no inicio da sequencia
prime.unshift(13)
console.log(prime);

//#7 o concat ele soma duas arrays em uma só 
let nomeprime = nome.concat(prime)
console.log(nomeprime);

//#8 neste caso o for faz com que cada elemento seja mostrado e normalmente vc faz um let ser = a 0 pois se não ele não vai iniciar no começo e neste caso o lenght server para puxar cada palavra e o nome do let no final tem que estar com o ++ para pode mostrar pro computador que ele deve ir contando e somando assim vai trazer todos os elementos
for (let i = 0; i < nome.length; i++){
  console.log(nome[i]);    
  
}

//#9

let biblioteca = [{nome: 'Livro 1', autor: 'Autor 1'}, {nome: 'Livro 2', autor: 'Autor 2'}]
for (let i = 0; i < biblioteca.length; i++){
  console.log(biblioteca[i]);
  
}

//#9 o map nada mais é que especificar que deve pegar o elemento que é citado como x e falar que ele deve ser igual ou maior que o elemento vezes 2

console.log(soma.map(x => x * 2));

//#10 este faz que o filter fitre apenas os numeros maiores de 10 

let seq = [5, 7, 2, 11, 32, 45];
const filtro =  seq.filter(sequ => sequ > 10);
console.log(filtro);

//#11 nesse ele vai verificar se todos os numeros forem pares se não ele vai dizer que é falso
console.log(seq.every( x => x % 2 == 0));

//#12 o find é responsavel por achar um numero em uma especificação neste caso ele está achando os numeros que são apenas negativos

let test = [-12, 23, 12, 45, -34, 78]
const negtest = test.find(find => find < 0 )
console.log(negtest);

//#13 neste o sort vai fazer uma sequencia e nesse ele está fazendo uma sequencia em ordem crescente

test.sort((a, b) => a - b);
console.log(test);


//#14 o splice nada mais é que a adição de um elemento em qualquer posição e para isso ser possivel vc deve colocar a posição onde quer adicionar caso não queira substituir um elemnto existente vc coloca 0 se não apenas continue e logo apos coloco o elemento que quer adicionar

let config = ['ryzen55600', 'b550mplus', 'mnvem21tb', 'rtx4060', 'watercooler360mm', '6fans120mm', 'gabineteaquario', 'fontede800w']
config.splice([2], 0, '2x16gb3200mhz');
console.log(config);

//#15 neste ele mostra como vc verificar que existe um mesmo elemento em 2 arrays diferentes

let tierA = [6, 12, 15, 25, 85, 56, 94];
let tierB = [12, 32, 15, 87,57, 9, 54];

const combo = tierA.filter(tA => tierB.includes(tA))
console.log(combo);

//#16

let prog = [-12, 23, 12, 45, -34, 78]
console.log(`a media de uma sequencia de numeros é ${(prog[0]+prog[1]+prog[2]+prog[3]+prog[4]+prog[5]/6)}`);


