// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}


// ================= ANIMATED COUNTERS =================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const updateCounter = () => {

        const increment = target / 100;

        current += increment;

        if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target.toLocaleString() + "+";
        }
    };

    updateCounter();
});


// ================= SCROLL REVEAL =================

const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },s
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.7s";

    observer.observe(card);

});
// ================= FITNESS GOALS =================

function selectGoal(goal) {

    const selectedGoal = document.getElementById("selectedGoal");
    const goalDetails = document.getElementById("goalDetails");

    if (!selectedGoal || !goalDetails) return;

    selectedGoal.textContent = goal.toUpperCase();

    const recommendations = {

        Strength:
            "Recommended focus: resistance training, full-body workouts, recovery and balanced nutrition.",

        Cardio:
            "Recommended focus: walking, running, cycling, cardio sessions and gradual endurance development.",

        Flexibility:
            "Recommended focus: mobility exercises, stretching, controlled movement and recovery.",

        "General Fitness":
            "Recommended focus: a balanced combination of strength, cardio, mobility and consistent activity."
    };

    goalDetails.textContent = recommendations[goal];

    document.getElementById("goalResult")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}
// ================= WORKOUT FILTER =================

function filterWorkouts(category, button) {

    const cards = document.querySelectorAll(".workout-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

    cards.forEach(card => {

        const cardCategory = card.dataset.category;

        if (category === "all" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ================= WORKOUT MODAL =================

function showWorkout(name, target, level) {

    const modal = document.getElementById("workoutModal");

    if (!modal) return;

    document.getElementById("modalWorkoutName").textContent = name;
    document.getElementById("modalTarget").textContent = target;
    document.getElementById("modalLevel").textContent = level;

    modal.classList.add("show");
}


function closeWorkout() {

    const modal = document.getElementById("workoutModal");

    if (modal) {
        modal.classList.remove("show");
    }

}
// ================= MEAL SELECTOR =================

function selectMeal(type, button) {

    const mealTitle =
        document.getElementById("mealTitle");

    const mealDescription =
        document.getElementById("mealDescription");

    const buttons =
        document.querySelectorAll(".meal-btn");


    if (!mealTitle || !mealDescription) return;


    buttons.forEach(btn => {

        btn.classList.remove("active-meal");

    });


    button.classList.add("active-meal");


    const meals = {

        balanced: {

            title: "Balanced Meals",

            description:
                "A balanced combination of vegetables, whole grains, fruits and protein sources."
        },

        vegetarian: {

            title: "Vegetarian Meals",

            description:
                "Explore plant-based meal ideas using vegetables, legumes, grains, fruits and dairy options."
        },

        protein: {

            title: "Protein-Focused Meals",

            description:
                "Include a variety of protein sources together with vegetables, whole grains and fruits."
        },

        indian: {

            title: "Indian-Inspired Meals",

            description:
                "Enjoy familiar foods such as dal, vegetables, rice, roti, curd, fruits and other balanced options."
        }

    };


    mealTitle.textContent =
        meals[type].title;

    mealDescription.textContent =
        meals[type].description;

}// ================= BMI CALCULATOR =================

function calculateBMI() {

    const height =
        parseFloat(
            document.getElementById("height").value
        );

    const weight =
        parseFloat(
            document.getElementById("weight").value
        );

    const bmiValue =
        document.getElementById("bmiValue");

    const bmiCategory =
        document.getElementById("bmiCategory");


    if (!height || !weight || height <= 0 || weight <= 0) {

        bmiValue.textContent = "--";

        bmiCategory.textContent =
            "Please enter valid height and weight.";

        return;
    }


    const heightMeters =
        height / 100;

    const bmi =
        weight /
        (heightMeters * heightMeters);


    bmiValue.textContent =
        bmi.toFixed(1);


    let category;


    if (bmi < 18.5) {

        category =
            "General screening: lower range.";

    } else if (bmi < 25) {

        category =
            "General screening: healthy range.";

    } else if (bmi < 30) {

        category =
            "General screening: higher range.";

    } else {

        category =
            "General screening: higher range.";
    }


    bmiCategory.textContent =
        category;

}


// ================= PROGRESS TRACKER =================

const progressValues = {

    workout: 60,
    water: 50,
    sleep: 70,
    steps: 40

};


function increaseProgress(type) {

    progressValues[type] += 10;


    if (progressValues[type] > 100) {

        progressValues[type] = 100;

    }


    const value =
        progressValues[type];


    if (type === "workout") {

        document.getElementById(
            "workoutPercent"
        ).textContent = value + "%";

        document.getElementById(
            "workoutBar"
        ).style.width = value + "%";

    }


    if (type === "water") {

        document.getElementById(
            "waterPercent"
        ).textContent = value + "%";

        document.getElementById(
            "waterBar"
        ).style.width = value + "%";

    }


    if (type === "sleep") {

        document.getElementById(
            "sleepPercent"
        ).textContent = value + "%";

        document.getElementById(
            "sleepBar"
        ).style.width = value + "%";

    }


    if (type === "steps") {

        document.getElementById(
            "stepsPercent"
        ).textContent = value + "%";

        document.getElementById(
            "stepsBar"
        ).style.width = value + "%";

    }

}
// ================= TRAINER MODAL =================

function showTrainer(name, role, description) {

    const modal =
        document.getElementById("trainerModal");

    if (!modal) return;


    document.getElementById(
        "trainerName"
    ).textContent = name;


    document.getElementById(
        "trainerRole"
    ).textContent = role;


    document.getElementById(
        "trainerDescription"
    ).textContent = description;


    modal.classList.add("show");

}


function closeTrainer() {

    const modal =
        document.getElementById("trainerModal");

    if (modal) {

        modal.classList.remove("show");

    }

}
