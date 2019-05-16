async function count(val, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(val)
            resolve(Date())
        }, time)
    })
}
// main 是async await版
async function main() {
    console.log("初始值", Date())

    const result = await count('第一個時間', 3000)
    console.log(result)

    const result2 = await count('第二個時間', 5000)
    console.log(result2)

}
main()


// main2是async promise.all版
async function main2() {
    console.log("初始值", Date())
    const result = await Promise.all([count('第一個時間', 3000), count('第二個時間', 5000)])
    console.log(result)
}
main2()
