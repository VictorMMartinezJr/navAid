// utils/dijkstra.js
export class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

export const dijkstra = (graph, startNode, endNode) => {
  const distances = {};
  const previous = {};
  const pq = new PriorityQueue();

  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    previous[node] = null;
    pq.enqueue(node, distances[node]);
  }

  while (!pq.isEmpty()) {
    const { node: currentNode } = pq.dequeue();

    if (currentNode === endNode) break;

    for (let neighbor of graph[currentNode]) {
      const distance = distances[currentNode] + neighbor.weight;

      if (distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
        previous[neighbor.node] = currentNode;
        pq.enqueue(neighbor.node, distance);
      }
    }
  }

  const path = [];
  let current = endNode;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return path;
};
