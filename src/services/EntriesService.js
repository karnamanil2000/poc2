import axios from "axios"

export class EntriesService {
  static serverURL = 'http://localhost:3000'

  static getAllEntries() {
    let dataURL = `${this.serverURL}/entries`
    return axios.get(dataURL)
  }

  static getEntry(id) {
    let dataURL = `${this.serverURL}/entries/${id}`
    return axios.get(dataURL)
  }

  static createEntry(entry) {
    let dataURL = `${this.serverURL}/entries/`
    return axios.post(dataURL, entry)
  }

  static updateEntry(entry, id) {
    let dataURL = `${this.serverURL}/entries/${id}`
    return axios.put(dataURL, entry)
  }

  static deleteEntry(id) {
    let dataURL = `${this.serverURL}/entries/${id}`
    return axios.delete(dataURL)
  }
}