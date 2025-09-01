import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../RTK/pokemonSlice";

const FavoriteButton = ({ id, className = "" }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.pokemon.favorites);
    const isFavorite = favorites.includes(id);

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleFavorite(id));
            }}
            className={`px-2 py-1 rounded-full text-white text-xs ${isFavorite ? "bg-red-500" : "bg-gray-400"} ${className}`}
            aria-label={isFavorite ? "찜 해제" : "찜하기"}
        >
            {isFavorite ? "💖" : "🤍"}
        </button>
    );
};

export default FavoriteButton;
