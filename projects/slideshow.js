$("#slides").slideshow({
    randomize: false, // Randomize the play order of the slides.
    slideDuration: 6000, // Duration of each induvidual slide.
    fadeDuration: 1000, // Duration of the fading transition. Should be shorter than slideDuration.
    animate: true, // Turn css animations on or off.
    pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
    enableLog: false, // Enable log messages to the console. Useful for debugging.
});
