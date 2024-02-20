// Define the function to animate values
function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        obj.innerText = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Create an intersection observer instance
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // If the target element is in view, start the animation
            animateValue("count1", 0, 1240, 2000);
            animateValue("count2", 0, 2000, 2000);
            animateValue("count3", 0, 1000, 3000);
            // Once the animation starts, disconnect the observer
            observer.disconnect();
        }
    });
}, { threshold: 0 });

// Find the target element to observe (pg6)
var target = document.getElementById('pg6');

// Start observing the target element
observer.observe(target);
