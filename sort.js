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

// console.log('bubble', bubbleSort(arr))

function insertSort (array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      console.log(JSON.stringify(array))
      if (array[j] < array[j-1]) {
        swap(array, j, j-1)
          console.log(chalk.red(JSON.stringify(array)))
      }
    }
  }

  return array
}

// console.log('insert', insertSort(arr))


function selectSort (array) {

  for (let i = 0; i < array.length-1; i++) {
    console.log(JSON.stringify(array))
    let minIndex = i;
    let min = array[i];
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }

    if (array[minIndex] !== array[i]) {
      swap(array, i, minIndex)
      console.log(chalk.red(JSON.stringify(array)))
    }
  }

  return array
}

console.log('select', selectSort(arr))

