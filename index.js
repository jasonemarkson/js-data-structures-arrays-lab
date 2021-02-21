// Write your solution here!
let drivers = []
drivers.push("Milo", "Otis", "Garfield")

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    const new_drivers = [...drivers, name]
    return new_drivers
}

function prependDriver(name) {
    const first_drivers = [name, ...drivers]
    return first_drivers
}

function removeLastDriver() {
    let remove_last = drivers.slice(0, drivers.length - 1)
    return remove_last
}

function removeFirstDriver() {
    let remove_first = drivers.slice(1)
    return remove_first
}