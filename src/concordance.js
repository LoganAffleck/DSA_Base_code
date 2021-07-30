
let data = require('./data')
/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
    let map = new Map();

    for(let position in data) {
        data[position].toLowerCase().split(/[\s.,';]/).map((word)=> {
           if(word != ""){
               if(map.has(word)){
                   map.get(word).push(position)
               }
               else{
                   map.set(word, [position])
               }
            }}); 
    };
    return map;

}

//console.log(concordance(data))

module.exports = concordance;