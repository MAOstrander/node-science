'use strict'

const chalk = require('chalk')

const arr = [6,5,3,1,8,7,2,4]

console.log('start', arr)

function swap (array, index1, index2) {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (array) {
  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        console.log(chalk.red(JSON.stringify(array)))
      }
      console.log(JSON.stringify(array))
    }
  }

  return array
}

console.log('bubble', bubbleSort(arr))
