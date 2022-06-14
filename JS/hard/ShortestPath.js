/* Shortest Path
Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.

An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.
Examples
Input: ["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"]
Output: A-C-D-F
Input: ["4","X","Y","Z","W","X-Y","Y-Z","X-W"]
Output: X-W */

function ShortestPath(strArr) {
    var nodeCount = Number(strArr.splice(0, 1));
    var nodes = strArr.splice(0, nodeCount);
    var connections = strArr.map(function (v) { return v.split('-'); })
    var startNode = nodes[0];
    var endNode = nodes[nodes.length - 1];
  
    var bestPath = startNode + '-' + endNode;
    if (strArr.indexOf(bestPath) != -1)
      return bestPath;
  
    var paths = [];
    findPaths([startNode]);
  
    function findPaths(pathSoFar) {
      
      var currentNode = pathSoFar[pathSoFar.length - 1];
      if (currentNode === endNode) { // if(current == endNode), path complete
        paths.push(pathSoFar.slice());
        return;
      }
  
      for (var i = 0; i < connections.length; i++) {
        var connection = connections[i];
        if (currentNode === connection[0] || currentNode === connection[1]) {
          var nextNode = (currentNode === connection[0]) ? connection[1] : connection[0];
          if (pathSoFar.indexOf(nextNode) === -1) {
            pathSoFar.push(nextNode);
            findPaths(pathSoFar.slice());
            pathSoFar.pop();
          }
        }
      }
    };
  
    var shortestPathNodes = paths.sort(function (a, b) { return b.length - a.length; }).pop();
    if (shortestPathNodes)
      return shortestPathNodes.join('-');
    else
      return -1;
  }
  
     
  // keep this function call here 
  console.log(ShortestPath(readline()));