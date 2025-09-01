import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

const Search = () => {
    const [query, setQuery] = useState("");
    const { list: pokemons, loading } = useSelector((state) => state.pokemon);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return pokemons;
        return pokemons.filter((p) => p.name.toLowerCase().includes(q));
    }, [pokemons, query]);

    if (loading) return <p className="text-center p-6">⏳ 로딩 중...</p>;

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
                        <PokemonCard key={p.id} pokemon={p} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Search;
