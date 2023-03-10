// 다익스트라 알고리즘
// 최단 경로 찾기 알고리즘
// 그래프, 우선순위 큐 (이진힙) 사용

// 최단거리 찾기
class PriorityQueue {
  constructor(params) {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  // 우선순위가 높은 순으로 정렬 (우선순위가 낮은 순으로 정렬하려면 b - a)
  // 시간복잡도 O(N * logn)
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    let adjacencyList = this.adjacencyList;
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    // 초기값을 설정해준다
    // distances = {A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
    for (let vertex in adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // 방문할 것이 남아있다면
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // We Are Done
        while(previous[smallest]) {
          console.log(smallest);
          path.push(smallest); // E
          smallest = previous[smallest]; // F
        }
        // A로 가면 null뜨면서 break
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        adjacencyList[smallest].forEach((neighbor) => {
          let nextNode = neighbor;
          console.log(nextNode);
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate; 
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        });
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.adjacencyList); 

console.log(graph.Dijkstra("A", "E"))
