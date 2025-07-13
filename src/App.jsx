import React from "react";
import './App.css'
import Swipe from "react-easy-swipe";

const data = [
    {name: "Fireball", type: "spell"},
    {name: "DoomSword", type: "band"},
    {name: "Magic Missile", type: "spell"},
    {name: "Bal-Sagoth", type: "spell"}
]

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [x, setX] = React.useState(0);
    const [isSwiping, setIsSwiping] = React.useState(false);

    const currentCard = data[index];

    const handleSwipeMove = (position) => {
        setIsSwiping(true);
        setX(position.x);
    }

    const handleSwipeEnd = () => {
        if (!currentCard) return;

        let direction = null;

        if (x > 100) {
            direction = "right";
            console.log("Swiped RIGHT: Might be a spell");
        } else if (x < -100) {
            direction = "left";
            console.log("Swiped LEFT: Might be a band");
        }

        if (direction) {
            const isCorrect = (
                (direction === "right" && currentCard.type === "spell") ||
                (direction === "left" && currentCard.type === "band")
            )

            showFeedback(isCorrect);

            if (index + 1 >= data.length) {
                setTimeout(() => {
                    setIndex((prev) => prev + 1 >= data.length ? -1 : prev + 1);
                }, 1000);
            } else {
                setIndex((prev) => prev + 1 >= data.length ? -1 : prev + 1);
            }
        }

        setX(0);
        setIsSwiping(false);
    }

    const showFeedback = (isCorrect) => {
        const banner = document.getElementById("feedbackBanner");
        if (!banner) return;
        banner.textContent = isCorrect ? "Correct!" : "Wrong!";
        banner.classList.remove("correct", "wrong");
        banner.classList.add(isCorrect ? "correct" : "wrong");
        banner.style.opacity = 1;

        setTimeout(() => {
            banner.style.opacity = 0;
        }, 1000);
    }

    return (
        <div className="cardContainer">
            {
                currentCard ?
                    <div className="swipeZone">
                        <span className="swipeLabel left">Band</span>
                        <span className="swipeLabel right">DnD Spell</span>
                        <Swipe
                            onSwipeMove={handleSwipeMove}
                            onSwipeEnd={handleSwipeEnd}
                            allowMouseEvents={true}
                        >
                            <div
                                className="card"
                                style={{
                                    transform: `translateX(${x}px) rotate(${x / 20}deg)`,
                                    transition: isSwiping ? 'none' : 'transform 0.3s ease'
                                }}
                            >
                                <h3>{currentCard.name}</h3>
                            </div>
                        </Swipe>
                        <dive id="feedbackBanner" className="feedbackBanner"></dive>
                    </div>

                    :
                    <div className="card endCard">
                        <h3>🎉 Done!</h3>
                    </div>
            }
        </div>
    )
}

export default App
