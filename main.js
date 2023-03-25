/**
 * having a return inside the Generator function 
 * we are iterating over a collection fruitIterator ,we only contain the elemens yielded before  the return () method ws invoked in the source generator
 */

function *getfruilt(){
    yield 'Powpow';
    yield 'Ovacado';
    yield 'Grapes';
    return 'Bed'
    yield 'banana'
    yield 'jackFruit'
}
const fruitIterator = getfruilt()

for(let fruilt of fruitIterator){
    console.log(fruilt)
}
/**
 * out_Put
 * powpow
 * ovacado
 * Grapes
 */