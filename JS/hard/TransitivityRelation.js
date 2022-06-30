/* 
Transitivity Relations

Have the function TransitivityRelations(strArr) read the strArr parameter being passed which will make up an NxN matrix where the rows are separated by each pair of parentheses (the matrix will range from 2x2 to 5x5). The matrix represents connections between nodes in a graph where each node corresponds to the Nth element in the matrix (with 0 being the first node). If a connection exists from one node to another, it will be represented by a 1, if not it will be represented by a 0. For example: suppose strArr were a 3x3 matrix with input ["(1,1,1)","(1,0,0)","(0,1,0)"], this means that there is a connection from node 0->0, 0->1, and 0->2. For node 1 the connections are 1->0, and for node 2 the connections are 2->1. This can be interpreted as a connection existing from node X to node Y if there is a 1 in the Xth row and Yth column. Note: a connection from X->Y does not imply a connection from Y->X.

What your program should determine is whether or not the matrix, which represents connections among the nodes, is transitive. A transitive relation means that if the connections 0->1 and 1->2 exist for example, then there must exist the connection 0->2. More generally, if there is a relation xRy and yRz, then xRz should exist within the matrix. If a matrix is completely transitive, return the string transitive. If it isn't, your program should return the connections needed, in the following format, in order for the matrix to be transitive: (N1,N2)-(N3,N4)-(...). So for the example above, your program should return (1,2)-(2,0). You can ignore the reflexive property of nodes in your answers. Return the connections needed in lexicographical order [e.g. (0,1)-(0,4)-(1,4)-(2,3)-(4,1)].

Examples

Input: ["(1,1,1)", "(0,1,1)", "(0,1,1)"]
Output: transitive

Input: ["(0,1,0,0)", "(0,0,1,0)", "(0,0,1,1)","(0,0,0,1)"]
Output: (0,2)-(0,3)-(1,3)		 

*/	

/* 
let strArr = ["(1,1,1)","(1,1,1)","(0,1,1)"]; //Output should be "(2-0)"
let strArr = ["(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)"];
let strArr = ["(1,1,0,0)","(0,0,1,0)","(0,1,0,1)","(1,0,0,1)"]; 
*/

function TransitivityRelations(strArr) { 
  
  const newConnect = (c1, c2) => { 
    connections[c2].forEach((element,index) => {
      if(element === 1 && connections[c1][index] === 0 && c1 != index) {
        connections[c1][index] = 1 ;
        result.push("(" + c1 + "," + index + ")") ;
      }
    }) 
  }
  const arr = (element,index,array) => {
    let result = [] ;
    for(let i = 1 ; i < element.length ; i +=2) {
      result.push(Number(element[i]))
    }
    return result
  }
  let connections = strArr.map(arr) , result = [] ;
  connections.forEach((element,index) => {
    for(let i = 0 ;i < element.length ; i++) {
      if(i != index && element[i] === 1) {
        newConnect(index,i) ;
      }
    }
  })
  if(result.length === 0) {
    return "transitive";
  }
  result.sort() ;
  return result.join("-") ;
}

TransitivityRelations(["(1,1,1)","(1,1,1)","(0,1,1)"])