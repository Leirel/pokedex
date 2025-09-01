import React from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

const Favorites = () => {
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
                        <PokemonCard key={p.id} pokemon={p} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
