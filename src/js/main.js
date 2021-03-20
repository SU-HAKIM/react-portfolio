const _name = new WeakMap()
class Shape {
    constructor(name) {
        _name.set(this, name)
        this.func = function () {
            console.log(`my name is ${this.name}`)
        }
    }
    get name() {
        return _name.get(this)
    }
    set name(value) {
        _name.set(this, value)
    }
    id = 1234
    change = function () {
        console.log(`ID = ${this.id}`)
    }
    draw() {
        console.log('Drawing')
        console.log(_name.get(this))
    }

    static funcCall(str) {
        let text = JSON.parse(str)
        return new Shape(text.name)
    }
}
class Rect extends Shape {
    constructor() {
        super(this.name)
        this.name = 'sadi'
    }

}

let rect = new Shape('rectangle')
console.log(rect)
rect.name = 'sadi'
console.log(rect.name)

let json = '{ "name": "sadiul-hakim" }'
let obj = Shape.funcCall(json)
console.log(obj)