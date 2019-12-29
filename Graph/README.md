## Graph

- Graph is data structure consist of finite set of vertices or node.
- Together with a set of unoredered pairs of these vertices for an undirected graph or set of ordered pairs for a directed graph.

##### Uses of Graph

- Social Networks
- Location / Mapping
- Routing Algorithm
- Visual Hierarchy
- File System Optimization
- EVERYWHERE !

### Graph Terms

- ##### Vertex 
- ##### edge
- ##### Weighted / Unweighted
- ##### Directed / Undirected

##### Directed Graph
- The graph which consist of some direction between vertices.
- let me take one application of directed graph.
> Instagram, 
> In this platform,Anyone can follow any one without any restriction. Let assume 3 person on instagram. ist person follow 2nd person i.e ist person directed to 2nd person. 2nd person are following 3rd person and 3rd person are also following 2nd person. consequenlty the edges between 2nd and 3rd person are bidirection and 1st to 2nd person are uni direction.

##### Representation Of Graph

- Generally ,there are two way two represent the graph.
    1. Adjacency Matrix
    2. Adjacency List

1. Adjacency Matrix :
  - It's a 2D matrix and used two represent the edge between two vertex.
  - Matrix consist either '0' or '1' . If two vertex have edge then the matrix value is '1' otherwise '0'

  ![](https://media.geeksforgeeks.org/wp-content/uploads/adjacencymatrix.png)

2. Adjacency List
   - An array of lists is used. Size of the array is equal to the number of vertices. Let the array be array[]. An entry array[i] represents the list of vertices adjacent to the ith vertex. This representation can also be used to represent a weighted graph. The weights of edges can be represented as lists of pairs. Following is adjacency list representation of the above graph.

   ![](https://media.geeksforgeeks.org/wp-content/uploads/listadjacency.png)