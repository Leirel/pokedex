import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    const pokemons = [
        { id: 1, name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
        { id: 2, name: "Ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    ];

    return (
        <section className="section-wrapper grid grid-cols-2 md:grid-cols-4 gap-4">
            {pokemons.map((p) => (
                <Link key={p.id} to={`/detail/${p.id}`} className="pokemon-card">
                    <img src={p.image} alt={p.name} />
                    <h2>{p.name}</h2>
                </Link>
            ))}
        </section>

    );
};

export default Main;
