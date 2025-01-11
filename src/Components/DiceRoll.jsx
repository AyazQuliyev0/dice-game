import React, { useState, useEffect } from "react";

const DiceRoll = () => {
    const [ diceValue1, setDiceValue1 ] = useState(1);
    const [ diceValue2, setDiceValue2 ] = useState(1);
    const [ diceValue3, setDiceValue3 ] = useState(1);
    const diceImg = [
        "./img/clipart2158865.png",
        "./img/dice-2.png",
        "./img/dice-3.png",
        "./img/dice-4.png",
        "./img/dice-5.png",
        "./img/dice-6.png"
    ];

    const imgStyle = {
        width: "150px",
        height: "150px",
        cursor: "pointer"
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-around",
    };

    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "12px 24px",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        margin: "40px 0px 0px 0px"
    };

    const buttonStyle2 = {
        backgroundColor: "#4c90af",
        color: "white",
        padding: "12px 24px",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        margin: "40px 0px 0px 20px"
    };

    const rollDice1 = () => {
        const randomNum1 = Math.floor(Math.random() * 6) + 1;
        setDiceValue1(randomNum1);
    }

    const rollDice2 = () => {
        const randomNum2 = Math.floor(Math.random() * 6) + 1;
        setDiceValue2(randomNum2);
    }

    const rollDice3 = () => {
        const randomNum3 = Math.floor(Math.random() * 6) + 1;
        setDiceValue3(randomNum3);
    }

    const restartDices = () => {
        setDiceValue1(1);
        setDiceValue2(1);
        setDiceValue3(1);
    }

    const fullDices = () => {
        setDiceValue1(6);
        setDiceValue2(6);
        setDiceValue3(6);
    }
    return (
        <div>
            <h1>Dice Game</h1>

            <div style={containerStyle}>
                <img src={diceImg[diceValue1-1]} alt={diceValue1} onClick={rollDice1} style={imgStyle}/>
                <img src={diceImg[diceValue2-1]} alt={diceValue2} onClick={rollDice2} style={imgStyle}/>
                <img src={diceImg[diceValue3-1]} alt={diceValue3} onClick={rollDice3} style={imgStyle}/>
            </div>

            <button onClick={restartDices} style={buttonStyle}>Restart</button>
            <button onClick={fullDices} style={buttonStyle2}>Full</button>
        </div>
    )
}

export default DiceRoll;