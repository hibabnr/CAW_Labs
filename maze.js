

// ****************************************Exercice 01: 
/*document.addEventListener("DOMContentLoaded", function() {
    // Select all boundary elements
    const boundaries = document.querySelectorAll("#maze .boundary");
    
    // Loop through each boundary and add an event listener
    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", function() {
            // Change background color to red when mouse enters the boundary
            boundary.style.backgroundColor = "#ff8888";
        });
    });
});*/

// ****************************************Exercice 02: 

document.addEventListener("DOMContentLoaded", function() {

    const boundaries = document.querySelectorAll("#maze .boundary");

    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseenter", function() {
            console.log("Mouse entered a boundary");

            boundaries.forEach(b => {
                b.classList.add("youlose");
            });
        });
    });
});

// ****************************************Exercice 03: 

document.addEventListener("DOMContentLoaded", function() {

    const boundaries = document.querySelectorAll("#maze .boundary");
    const end = document.getElementById("end");

    end.addEventListener("mouseenter", function() {
        const hitBoundary = Array.from(boundaries).some(boundary =>
            boundary.classList.contains("youlose")
        );

        if (!hitBoundary) {
            alert("You win!");
        }
    });

    const start = document.getElementById("start");
    start.addEventListener("mouseenter", function() {
        boundaries.forEach(boundary => boundary.classList.remove("youlose"));
    });

});

// *****************************************exercice 04

document.addEventListener("DOMContentLoaded", function() {

    const boundaries = document.querySelectorAll("#maze .boundary");
    const end = document.getElementById("end");
    const start = document.getElementById("start");

    end.addEventListener("mouseenter", function() {
        const hitBoundary = Array.from(boundaries).some(boundary =>
            boundary.classList.contains("youlose")
        );

       
    });

    start.addEventListener("click", function() {
        boundaries.forEach(boundary => boundary.classList.remove("youlose"));
        console.log("Maze reset");
    });
});


// *****************************************exercice 05

// GITHUB LINK 

//  https://github.com/hibabnr/CAW_Labs


// *****************************************exercice 06

document.addEventListener("DOMContentLoaded", function() {

    const boundaries = document.querySelectorAll("#maze .boundary");
    const end = document.getElementById("end");
    const start = document.getElementById("start");
    const status = document.getElementById("status");

    let hitBoundary = false;

    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseenter", function() {
            hitBoundary = true;
            boundaries.forEach(b => b.classList.add("youlose"));
            status.textContent = "You lose! Try again by clicking the Start.";
        });
    });

    end.addEventListener("mouseenter", function() {
        if (!hitBoundary) {
            status.textContent = "You win! Congratulations!";
        }
    });

    start.addEventListener("click", function() {
        boundaries.forEach(boundary => boundary.classList.remove("youlose"));
        hitBoundary = false;
        status.textContent = "Move your mouse over the 'S' to begin.";
    });
});
