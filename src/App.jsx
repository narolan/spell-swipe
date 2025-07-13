import React from "react";
import './App.css'
import Swipe from "react-easy-swipe";

const App = () => {
    const [cards, setCards] = React.useState([
        {name: "Fireball", type: "spell"},
        {name: "DoomSword", type: "band"},
        {name: "Magic Missile", type: "spell"},
        {name: "Bal-Sagoth", type: "band"}
    ]);
    const [index, setIndex] = React.useState(0);
    const [x, setX] = React.useState(0);
    const [isSwiping, setIsSwiping] = React.useState(false);
    const [showFeedback, setShowFeedback] = React.useState(null);

    const currentCard = cards[index];

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    }

    const handleSwipeMove = (position) => {
        setIsSwiping(true);
        setX(position.x);
    }

    const handleSwipeEnd = () => {
        if (!currentCard) return;

        let direction = null;
        if (x > 100) direction = "right";
        else if (x < -100) direction = "left";

        if (direction) {
            const isCorrect = (
                (direction === "right" && currentCard.type === "spell") ||
                (direction === "left" && currentCard.type === "band")
            )

            setShowFeedback(isCorrect ? 'correct' : 'wrong');

            if (isCorrect) {
                setTimeout(() => {
                    setIndex((prev) => prev + 1 >= cards.length ? -1 : prev + 1);
                    setShowFeedback(null);
                }, 1000);
            } else {
                setTimeout(() => {
                    const remaining = cards.slice(index);
                    const before = cards.slice(0, index);
                    const shuffled = shuffleArray(remaining);
                    setCards([...before, ...shuffled]);
                    setIndex(index);
                    setShowFeedback(null);
                }, 1000);
            }
        }

        setX(0);
        setIsSwiping(false);
    }

    return (
        <div className="cardContainer">
            {
                currentCard ?
                    <div className="swipeZone">
                        <span className="swipeLabel left">Band</span>
                        <span className="swipeLabel right">DnD Spell</span>
                        <Swipe
                            onSwipeMove={showFeedback ? undefined : handleSwipeMove}
                            onSwipeEnd={showFeedback ? undefined : handleSwipeEnd}
                            allowMouseEvents={true}
                        >
                            <div
                                className={`card ${showFeedback === 'wrong' ? 'wrong' : ''}`}
                                style={{
                                    transform: `translateX(${x}px) rotate(${x / 20}deg)`,
                                    transition: isSwiping ? 'none' : 'transform 0.3s ease',
                                    opacity: showFeedback ? '0.6' : '1',
                                    pointerEvents: showFeedback ? 'none' : 'auto',
                                }}
                            >
                                <h3>{currentCard.name}</h3>
                            </div>
                        </Swipe>
                        {showFeedback && (
                            <div className={`feedbackBanner show ${showFeedback}`}>
                                {showFeedback === 'correct' ? 'Correct!' : 'Wrong!'}
                            </div>
                        )}
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
