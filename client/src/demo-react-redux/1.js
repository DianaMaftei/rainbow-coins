
var currentYear = 2017

//private function, fetch from DB
function getTodos() {
    return [
        { name: "boogy", checked: true, year: 2014 },
        { name: "alfa", checked: false, year: 2017 },
        { name: "back to the future", checked: false, year: 2021 },
    ]
}

//we need a new functionality, similar with this one
//but instead of OLD entries we need only the future ones
function PublicGetOldTodos() {
    var todos = getTodos()

    //filter
    todos = _.filter(todos, (value, index, collection) => {
        return value.year < currentYear && value.checked == false
    })

    if (todos.length == 0) {
        console.log("a dev forgot some code here")
    }

    if (isIE6) {
        //god help us all
    }

    //don't overflow
    todos = _.slice(todos, 0, 10)

    return todos
}