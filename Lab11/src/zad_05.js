function primer(func, loop, end, input) {
    if (end<loop) {
        throw console.error("Timeout cannot be smaller than the interval");
    }
    loop *= 1000;
    end *= 1000;
    const timeLoop = setInterval(() => func(input), loop);
    setTimeout(clearInterval, end, timeLoop);
}


function helloWorld(input) {
    console.log(`Hello world! ${input}`);
}

primer(helloWorld, 1, 5, "ala");
