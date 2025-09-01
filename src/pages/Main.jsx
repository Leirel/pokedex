import React from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

const Main = () => {
    const { list, loading, error } = useSelector((state) => state.pokemon);

    if (loading) return <p className="text-center p-6">⏳ 로딩 중...</p>;
    if (error) return <p className="text-center p-6 text-red-500">❌ 에러: {error}</p>;

    return (
        <section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {list.map((p) => (
                <PokemonCard key={p.id} pokemon={p} />
            ))}
        </section>
    );
};

export default Main;
