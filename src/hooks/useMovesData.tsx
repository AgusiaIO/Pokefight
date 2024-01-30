// import { useEffect, useState } from "react";
// // import { API_BASE_URL } from "../constants/constants";
// // import { usePokemonData } from "./usePokemonData";
// // import { Moves } from "../interfaces/interface";
// import {
//   attackMove,
//   specialAttackMove,
//   defenseMove,
//   specialDefenseMove,
// } from "../constants/constants";
// export const useMovesData = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   // const { exMoves, setExMoves } = usePokemonData();
//   // const [inMoves, setInMoves] = useState("sa");

//   // External Data - API

//   const [attackMoves, setAttackMoves] = useState([]);
//   const [defenseMoves, setDefenseMoves] = useState([]);
//   const [specialAttackMoves, setSpecialAttackMoves] = useState([]);
//   const [specialDefenseMoves, setSpecialDefenseMoves] = useState([]);
//   // const moveNames = exMoves.map((move) => move.move.name);
//   // const moveObj = exMoves.map((move) => move);
//   // const moveURL = exMoves.map((move) => move.move.url);
//   // console.log(moveURL);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resAttack = await fetch(attackMove);
//         const resDefense = await fetch(defenseMove);
//         const resSpecialAttack = await fetch(specialAttackMove);
//         const resSpecialDefense = await fetch(specialDefenseMove);
//         const resAttackData = await resAttack.json();
//         const resDefenseData = await resDefense.json();
//         const resSpecialAttackData = await resSpecialAttack.json();
//         const resSpecialDefenseData = await resSpecialDefense.json();
//         setAttackMoves(resAttackData.moves);
//         setDefenseMoves(resDefenseData.moves);
//         setSpecialDefenseMoves(resSpecialDefenseData.moves);
//         setSpecialAttackMoves(resSpecialAttackData.moves);
//         setIsLoading(false);
//       } catch (error) {
//         console.error(`Error: ${error}`);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return { attackMoves, specialDefenseMoves, specialAttackMoves, defenseMoves };
// };
