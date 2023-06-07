function endingStory() {
    console.log("Welcome");
    const time = setInterval(console.log, 1000, "Welcome");
    setTimeout(clearInterval, 5000, time);
}

endingStory();