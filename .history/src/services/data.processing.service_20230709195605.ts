export class DataProcessorService {
  processData(data: {}) {
    for (let node_json of data) {
      print(node_json);
    }
  }
}
