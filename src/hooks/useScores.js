import { useState } from "react";

export const useScores = () => {

    const gameScores = JSON.parse(localStorage.getItem('gameScores'));
    const [scores, setScores] = useState(gameScores?.scores || [] );

    return [scores, setScores];
};