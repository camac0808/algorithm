// 그래프란 노드(vertex)와 간선(edge)으로 이루어진 비선형 자료구조
// 그래프에는 두가지 접근법을 보통 사용한다
// 1. 인접 행렬, 2. 인접 리스트
// 인접 행렬은 Vertex(노드)의 영향을 받아서 공간 복잡도를 좀더 차지함 그래서 퍼져있는 데이터는 리스트가 용이함
// 방향-무방향, 가중-비가중

// 무방향 비가중
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(value) {
    this.adjacencyList[value] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v!== v1);
  }
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      let removedValue = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, removedValue);
    }
  }
  // Depth First Recursive 깊이 우선 순회 재귀형
  DFR(start){
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;
    
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    })(start)

    return result;
  }
  // Depth first Iterative 순환형
  DFI(start) {
    const visited = {};
    const result = [];
    const stack = [start];
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop(); // A 
      console.log(stack);
      result.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }
  // Breadth First Search 너비 우선 탐색
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (queue.length) {
      let currentVertex = queue.shift()
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g);
console.log(g.DFR("A"));
console.log(g.DFI("A"));
console.log(g.BFS("A"));
