import axios from "axios"

export class EntriesService {
  static serverURL = 'http://localhost:3000'

  static getAllEntries() {
    let dataURL = `${this.serverURL}/entries`
    return axios.get(dataURL)
  }

  static getEntry(entryAPI) {
    let dataURL = `${this.serverURL}/entries/${entryAPI}`
    return axios.get(dataURL)
  }

  static createContact(entry) {
    let dataURL = `${this.serverURL}/entries/`
    return axios.post(dataURL, entry)
  }

  static updateContact(entry, entryAPI) {
    let dataURL = `${this.serverURL}/entries/${entryAPI}`
    return axios.put(dataURL, entry)
  }

  static deleteContact(entryAPI) {
    let dataURL = `${this.serverURL}/entries/${entryAPI}`
    return axios.delete(dataURL)
  }
}