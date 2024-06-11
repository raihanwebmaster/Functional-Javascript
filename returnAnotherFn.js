function main () {
  return function () {
    return 'Hello from the inner function'
  }
}

main()() // Hello from the inner function



function greetings (msg) {
  return function (name) {
    return msg + ', ' + name
  }
}

var good = greetings('Good Morning', 'Raihan')
var night = greetings('Good Night', 'Uddin')