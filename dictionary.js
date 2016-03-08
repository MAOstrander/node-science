'use strict'

class Dictionary {
  constructor () {
    this.data = []
  }

  add (index, value) {
    this.data[index] = value
  }

  find (index) {
    return this.data[index]
  }

  remove (index) {
    delete this.data[index]
  }
}

