
function loopNTimes(n) {
    let i = 1
    while (i <= n) {
        console.log(`loop ${i}`)
        i = i + 1
    }
}

function loopNTimesWithFor(n) {
    console.log("loopNTimesWithFor")
    for (let i = 1; i <= n; i = i + 1 ) {
        console.log(`loop ${i}`)
    }
}

function decomposeString(text) {
    i = 0
    while (i < text.length) {
        console.log(text[i])
        i = i + 1
    }
}

//loopNTimes(5)
loopNTimesWithFor(5)
//decomposeString("Hello World!")