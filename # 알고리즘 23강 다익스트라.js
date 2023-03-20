// 다익스트라 알고리즘
// 최단 경로 찾기 알고리즘
// 그래프, 우선순위 큐 (이진힙) 사용

// 최단거리 찾기
class PriorityQueue {
  constructor() {
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
  Dijkstra(start, end) {
    const adjacenyList = this.adjacencyList;
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    // 초기값 설정 (시작점은 0, 나머지는 무한대)
    for (let vertex in adjacenyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // 큐가 빌 때까지 반복
    while (queue.values.length) {
      smallest = queue.dequeue().val;
      if (smallest === end) {
        // loop end!
        while (previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in adjacenyList[smallest]) {
          let nextNode = adjacenyList[smallest][neighbor];
          console.log('smallest', smallest, 'distances', distances);
          // 최단 거리 계산
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            console.log('nextNode', nextNode.node, 'candidate', candidate);
            queue.enqueue(nextNode.node, candidate);
            console.log('queue', queue.values);
          }
        }
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
