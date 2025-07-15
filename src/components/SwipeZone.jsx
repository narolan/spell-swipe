import React, {useState} from 'react';
import Swipe from "react-easy-swipe";
import Card from "./Card.jsx";
import EndScreen from "./EndScreen.jsx";

const SwipeZone = () => {
    const [cards, setCards] = useState([
        {name: "Fireball", type: "spell"},
        {name: "DoomSword", type: "band"},
        {name: "Magic Missile", type: "spell"},
        {name: "Bal-Sagoth", type: "band"}
    ]);
    const [index, setIndex] = useState(0);
    const [x, setX] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [showFeedback, setShowFeedback] = useState(null);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);

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
            setAttempts((prev) => prev + 1);
            const isCorrect = (
                (direction === "right" && currentCard.type === "spell") ||
                (direction === "left" && currentCard.type === "band")
            )

            setShowFeedback(isCorrect ? 'correct' : 'wrong');

            if (isCorrect) {
                setScore((prev) => prev + 1);
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

    if (!currentCard) return <EndScreen/>;

    return (
        <div className="swipeZone">
            <div className="scoreOverlay">
                <span>Score: {score} / {cards.length}</span>
                <br/>
                <span>Total attempts: {attempts}</span>
            </div>
            <span className="swipeLabel left">Band</span>
            <span className="swipeLabel right">DnD Spell</span>

            <Swipe
                onSwipeMove={showFeedback ? undefined : handleSwipeMove}
                onSwipeEnd={showFeedback ? undefined : handleSwipeEnd}
                allowMouseEvents={true}
            >
                <Card
                    name={currentCard.name}
                    showFeedback={showFeedback}
                    style={{
                        transform: `translateX(${x}px) rotate(${x / 20}deg)`,
                        transition: isSwiping ? 'none' : 'transform 0.3s ease',
                        opacity: showFeedback ? '0.6' : '1',
                        pointerEvents: showFeedback ? 'none' : 'auto',
                    }}
                />
            </Swipe>
            {
                showFeedback && (
                    <div className={`feedbackBanner show ${showFeedback}`}>
                        {showFeedback === 'correct' ? 'Correct!' : 'Wrong!'}
                    </div>
                )
            }
        </div>
    );
}

export default SwipeZone;