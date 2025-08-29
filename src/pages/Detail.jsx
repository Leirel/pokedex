import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../RTK/pokemonSlice";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemon.list);
    const favorites = useSelector((state) => state.pokemon.favorites);

    const pokemon = pokemons.find((p) => p.id === Number(id));
    const isFavorite = favorites.includes(Number(id));

    if (!pokemon) return <p className="text-center p-6">⏳ 로딩 중...</p>;

    return (
        <section className="section-wrapper text-center max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
            <h1 className="text-3xl font-bold mb-4 capitalize">{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-32 h-32 mb-4" />
            <button
                onClick={() => dispatch(toggleFavorite(pokemon.id))}
                className={`mt-2 px-4 py-2 rounded-full text-white ${isFavorite ? "bg-red-500" : "bg-gray-400"
                    }`}
            >
                {isFavorite ? "💖 찜 해제" : "🤍 찜하기"}
            </button>
            <p className="text-gray-700 mb-2">ID: {pokemon.id}</p>

            {pokemon.types && (
                <div className="mb-4">
                    <h2 className="font-bold">타입</h2>
                    <div className="flex justify-center gap-2 mt-1">
                        {pokemon.types.map((t) => (
                            <span
                                key={t.slot}
                                className="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-sm capitalize"
                            >
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {pokemon.stats && (
                <div>
                    <h2 className="font-bold mb-2">능력치</h2>
                    <ul className="text-left">
                        {pokemon.stats.map((s) => (
                            <li key={s.stat.name} className="mb-1">
                                <span className="capitalize font-medium">{s.stat.name}:</span>{" "}
                                {s.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Detail;
