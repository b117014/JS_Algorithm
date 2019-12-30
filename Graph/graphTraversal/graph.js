class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }else{
            console.log("this vertex already exist");
        }
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    DepthSearch(start){
        let result=[];
       let visited={};
        let adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList.forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            })
        })(start)
    }
}