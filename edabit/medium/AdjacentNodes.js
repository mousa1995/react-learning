//https://edabit.com/challenge/ccv2_430b3a71abb87fd42f085975

function adjacent(graph, node1, node2) {
  const value = graph[node1][node2];
  return !!value;
}
