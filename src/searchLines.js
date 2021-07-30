const LinkedList = require("./lib/linkedList");
const words = new LinkedList(["everyone"])
const concordance = require("./concordance");
let data = require('./data');

/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
  let wordNode = words.head
  let conc = concordance(data)
  let result = [];
  while(wordNode){

    let associations = conc.get(wordNode.value)

    for(index of associations){
      result.push(data[index])
    }

    wordNode = wordNode.next

  }
  return result;
}

console.log(searchLines(words, concordance, data))

module.exports = searchLines;