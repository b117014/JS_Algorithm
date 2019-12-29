
class Graph{
    constructor(){
        this.adjacencyList = {};
        
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){this.adjacencyList[vertex]=[]}
    }
    addEdge(v1, v2){
        if(this.adjacencyList[v1]!==v2){
               this.adjacencyList[v1].push(v2);
        }
        if(this.adjacencyList[v2]!==v1){
            this.adjacencyList[v2].push(v1);
     }
    }
}

let graph = new Graph();
graph.addVertex("kolkata")
graph.addVertex("bhubaneswar");
graph.addEdge("kolkata","bhubaneswar")
console.log(graph.adjacencyList);