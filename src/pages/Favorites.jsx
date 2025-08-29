import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../RTK/pokemonSlice";
import { Link } from "react-router-dom";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.pokemon.favorites);
    const pokemons = useSelector((state) => state.pokemon.list);

    const favoriteList = pokemons.filter((p) => favorites.includes(p.id));

    return (
        <section className="section-wrapper">
            <h1 className="text-xl font-bold mb-4">내 찜 목록</h1>
            {favoriteList.length === 0 ? (
                <p>아직 찜한 포켓몬이 없습니다.</p>
            ) : (
                <div className="favorites-grid">
                    {favoriteList.map((p) => (
                        <div
                            key={p.id}
                            className="pokemon-card cursor-pointer relative"
                        >
                            <Link to={`/detail/${p.id}`} className="block">
                                <img src={p.image} alt={p.name} />
                                <h2>{p.name}</h2>
                            </Link>
                            <button
                                onClick={() => dispatch(toggleFavorite(p.id))}
                                className="absolute top-2 right-2 px-2 py-1 rounded-full text-white bg-red-500 text-xs"
                            >
                                💖
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
