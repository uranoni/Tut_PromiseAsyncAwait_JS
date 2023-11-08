//沒有使用promise 的情況
function main1() {
    console.log("初始值\n", Date())
    setTimeout(() => {
        console.log(`執行第一次 花5秒的結果${Date()}`)
        Date()
    }, 5000)

    setTimeout(() => {
        console.log(`執行第二次 花2秒的結果${Date()}`)
        
    }, 2000)

}
main1()

function count(val, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(val)
            resolve(Date())
        }, time)
    })
}
// 這邊是main function 使用promise chain來串連執行
// function main() {
//     console.log("初始值\n", Date())
//     count('第一個時間', 3000)
//         .then(val => {
//             console.log(val)
//             return count('第二個時間', 5000)
//         }).then(val => {
//             console.log(val)
//         })

// }
// main()



// 這邊是使用promise all執行結果
// function main2() {
//     console.log("初始值\n", Date())
//     Promise.all([count("第一個時間", 3000), count("第二個時間", 5000)]).then(val => {
//         console.log(val)
//     })
// }
// main2()
