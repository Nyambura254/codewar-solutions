//programing what is done behide server on filter search f the elements to be sorted when you try to search with given keywords

Array.prototype.filter = function(fn) { //our function intialization
    const newArray = []; //our array to be empty
    for (let i = 0; i < this.length; i++) { //we setup,do the comparison and give our change
        if (fn(this[i])) newArray.push(this[i])
    }
    return newArray
}