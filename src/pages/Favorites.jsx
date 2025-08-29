import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
    const favorites = useSelector((state) => state.pokemon.favorites);
    const allPokemons = useSelector((state) => state.pokemon.list);

    const favoriteList = allPokemons.filter((p) => favorites.includes(p.id));

    return (
        <section className="section-wrapper">
            <h1 className="text-xl font-bold mb-4">내 찜 목록</h1>
            {favoriteList.length === 0 ? (
                <p>아직 찜한 포켓몬이 없습니다.</p>
            ) : (
                <div className="favorites-grid">
                    {favoriteList.map((p) => (
                        <div key={p.id} className="pokemon-card">
                            <img src={p.image} alt={p.name} />
                            <h2>{p.name}</h2>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
