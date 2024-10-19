//function outer() {
//    let a = 10
//    let b = 20
//    function inner() {
//        let c = 30
//        console.log(a, b, c)
//    }
//    inner()
//}
//outer()

function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    inner()
}

outer()