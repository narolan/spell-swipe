import React, {useState} from 'react';
import Swipe from "react-easy-swipe";
import './SwipeZone.css';
import Card from "../card/Card.jsx";
import EndScreen from "../endScreen/EndScreen.jsx";
import ScoreOverlay from "../score/ScoreOverlay.jsx";

const SwipeZone = ({onEnd, mode}) => {
    const [cards, setCards] = useState([
        {"name": "Amon Amarth", "type": "band"},
        {"name": "Arms of Hadar", "type": "spell"},
        {"name": "Banishment", "type": "spell"},
        {"name": "Battlecross", "type": "band"},
        {"name": "Behemoth", "type": "band"},
        {"name": "Belphegor", "type": "band"},
        {"name": "Blight", "type": "spell"},
        {"name": "Blind Guardian", "type": "band"},
        {"name": "Burning Hands", "type": "spell"},
        {"name": "Carnifex", "type": "band"},
        {"name": "Chaos Bolt", "type": "spell"},
        {"name": "Chill Touch", "type": "spell"},
        {"name": "Cloudkill", "type": "spell"},
        {"name": "Command", "type": "spell"},
        {"name": "Contagion", "type": "spell"},
        {"name": "Crown of Madness", "type": "spell"},
        {"name": "Dark Funeral", "type": "band"},
        {"name": "Darkthrone", "type": "band"},
        {"name": "Death Angel", "type": "band"},
        {"name": "Destruction", "type": "band"},
        {"name": "Disintegrate", "type": "spell"},
        {"name": "Dying Fetus", "type": "band"},
        {"name": "Earth Tremor", "type": "spell"},
        {"name": "Eldritch Blast", "type": "spell"},
        {"name": "Enslaved", "type": "band"},
        {"name": "Exodus", "type": "band"},
        {"name": "Finger of Death", "type": "spell"},
        {"name": "Fireball", "type": "spell"},
        {"name": "Flame Blade", "type": "spell"},
        {"name": "Fleshgod Apocalypse", "type": "band"},
        {"name": "Goatwhore", "type": "band"},
        {"name": "Graveworm", "type": "band"},
        {"name": "Guiding Bolt", "type": "spell"},
        {"name": "Hellish Rebuke", "type": "spell"},
        {"name": "Immolation", "type": "band"},
        {"name": "Incantation", "type": "band"},
        {"name": "Inflict Wounds", "type": "spell"},
        {"name": "Lorna Shore", "type": "band"},
        {"name": "Magic Missile", "type": "spell"},
        {"name": "Morbid Angel", "type": "band"},
        {"name": "Nightbringer", "type": "band"},
        {"name": "Obituary", "type": "band"},
        {"name": "Phantasmal Killer", "type": "spell"},
        {"name": "Possessed", "type": "band"},
        {"name": "Power Word Kill", "type": "spell"},
        {"name": "Ray of Enfeeblement", "type": "spell"},
        {"name": "Scorching Ray", "type": "spell"},
        {"name": "Shield", "type": "spell"},
        {"name": "Skeletonwitch", "type": "band"},
        {"name": "Soulburn", "type": "band"},
        {"name": "Spiritual Weapon", "type": "spell"},
        {"name": "Suffocation", "type": "band"},
        {"name": "Thunderwave", "type": "spell"},
        {"name": "Vader", "type": "band"},
        {"name": "Vampiric Touch", "type": "spell"},
        {"name": "Venom", "type": "band"},
        {"name": "Watain", "type": "band"},
        {"name": "Winterfylleth", "type": "band"},
        {"name": "Witch Bolt", "type": "spell"},
        {"name": "Wrathful Smite", "type": "spell"}
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
                if (mode === "hardcore") {
                    setIndex(cards.length);
                    console.log(index);
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
        }

        setX(0);
        setIsSwiping(false);
    }

    if (!currentCard) return (
        <>
            <ScoreOverlay
                score={score}
                attempts={attempts}
                total={cards.length}
            />
            <EndScreen
                attempts={attempts}
                score={score}
                total={cards.length}
                mode={mode}
                onEnd={onEnd}
            />
        </>
    );

    return (
        <div className="swipeZone">
            <ScoreOverlay
                score={score}
                attempts={attempts}
                total={cards.length}
            />
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