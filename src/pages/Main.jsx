import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    const pokemons = [
        { id: 1, name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
        { id: 2, name: "Ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    ];

    return (
        <section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {pokemons.map((p) => (
                <Link key={p.id} to={`/detail/${p.id}`}>
                    <div className="bg-white shadow-md p-4 rounded-xl hover:scale-105 transition">
                        <img src={p.image} alt={p.name} className="w-24 h-24 mx-auto" />
                        <h2 className="text-center mt-2 font-bold">{p.name}</h2>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default Main;
f