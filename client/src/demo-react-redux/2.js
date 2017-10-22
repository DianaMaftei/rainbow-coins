
var currentYear = 2017

//private function, fetch from DB
function getTodos() {
    return [
        { name: "boogy", checked: true, year: 2014 },
        { name: "alfa", checked: false, year: 2017 },
        { name: "back to the future", checked: false, year: 2021 },
    ]
}

//we removed the not used code, added parameters and extract the common functionality
//with the feature we need to implement
function getFilteredTodos(limit = 20, predicate = () => true) {
    var todos = getTodos()

    //filter
    todos = _.filter(todos, predicate)

    //don't overflow
    todos = _.slice(todos, 0, limit)

    return todos
}

function PublicGetOldTodos(limit = 10) {
    var condition = (value, index, collection) => {
        return value.year < currentYear && value.checked == false
    }

    return getFilteredTodos(limit, condition)
}