import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState("");
    const pokemons = useSelector((state) => state.pokemon.list);

    const filtered = pokemons.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="section-wrapper">
            <h1 className="text-xl font-bold mb-4">포켓몬 검색</h1>
            <input
                type="text"
                value={query}
                placeholder="포켓몬 이름 입력..."
                onChange={(e) => setQuery(e.target.value)}
                className="border px-3 py-2 rounded-md w-full mb-4"
            />
            {filtered.length === 0 ? (
                <p>검색 결과가 없습니다.</p>
            ) : (
                <div className="favorites-grid">
                    {filtered.map((p) => (
                        <Link key={p.id} to={`/detail/${p.id}`} className="block">
                            <div className="pokemon-card">
                                <img src={p.image} alt={p.name} />
                                <h2>{p.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Search;
