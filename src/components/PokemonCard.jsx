import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const PokemonCard = ({ pokemon }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative">
            <Link to={`/detail/${pokemon.id}`} className="block">
                <div className="pokemon-card">
                    {loading && (
                        <div className="text-center text-sm text-gray-500 mb-2">이미지 로딩 중...</div>
                    )}
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="w-24 h-24 mx-auto"
                        onLoad={() => setLoading(false)}
                    />
                    <h2 className="text-center mt-2 font-bold text-gray-800 capitalize">
                        {pokemon.name}
                    </h2>
                </div>
            </Link>

            <FavoriteButton id={pokemon.id} className="absolute top-2 right-2" />
        </div>
    );
};

export default memo(PokemonCard);
