var nome = prompt('Qual seu nome?')
document.writeln(`Olá, ${nome.toUpperCase()}! seu nome tem ${nome.length} letras`)
// .toUpperCase -> Coloca todas letras MAIUSCULAS
// .length -> mostra a quantidade de caractere na String
/*
NODE.JS
> var n1 = 1545.5
undefined
> n1
1545.5
> n1.tofixed
undefined
> n1.toFixed(2)
'1545.50'
> n1.toFixed(3)
'1545.500'
> n1.toFixed(2)
'1545.50'
> n1.toFixed(2).replace('.', ',')
'1545,50'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
'R$ 1.545,50'
*/