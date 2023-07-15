

const sumar = (a, b) => a + b

const multiplicar = (a, b) => a * b


// 5 * 2 => 10
// 2 + 2 + 2 + 2 + 2 => 10  | polyfill

const multiplicar2 = (a, b) => {
    let result = 0

    for (let i = 1; i <= a; i++) {
        result += b
    }

    return result
}

// console.log( multiplicar2(5, 3) )

const users = [
    {
        id: 1,
        nombre: "Carlos",
        curso: "React"
    },
    {
        id: 2,
        nombre: "Juan",
        curso: "React"
    },
    {
        id: 3,
        nombre: "Lujan",
        curso: "Javascript"
    },
    {
        id: 4,
        nombre: "Agustin",
        curso: "Python"
    },
]

// const match = users.find((el) => el.curso === "React")
// console.log(match)

function encontrar(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i]
        
        if (fn(current) === true) {
            return current
        }
    }
}

function filtrar(arr, fn) {
    var result = []

    for (var i = 0; i < arr.length; i++) {
        var current = arr[i]
        
        if (fn(current) === true) {
            result.push(current)
        }
    }

    return result
}

// const result = encontrar(users, (el) => el.curso === "React")
const result = filtrar(users, (el) => el.curso === "React")
console.log(result)