export class DataProcessorService {
  processData(data: {}) {
    Object.entries(data).forEach(([node, neighbors]) => {
      console.log(`Node: ${node}`);
      console.log(`Neighbors: ${neighbors}`);
    });
  }
}
