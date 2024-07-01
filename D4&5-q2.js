function CreateCounter(value, step) {

    let count = value

    return {
        inc: function () {
            count = count + step
        },
        dec: function () {
            count = count - step
        },
        rst: function(){
            count = value
        },
        getValue: function(){
            console.log(count);
        }
    }
}

let counter = CreateCounter(10, 5)

counter.inc()
counter.inc()
counter.inc()
counter.dec()
counter.getValue()
counter.rst()
counter.getValue()
