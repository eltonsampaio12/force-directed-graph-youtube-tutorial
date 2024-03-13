export class DataProcessorService {
  processData(data: {}) {
    Object.entries(data).forEach(([node_json, neighbors]) => {
      console.log(node_json);
    });
  }
}
