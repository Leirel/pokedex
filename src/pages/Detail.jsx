import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

const Detail = () => {
    const { id } = useParams();
    const { list } = useSelector((state) => state.pokemon);

    const pokemon = list.find((p) => p.id === Number(id));
    if (!pokemon) return <p className="text-center p-6">⏳ 로딩 중...</p>;

    return (
        <section className="section-wrapper text-center max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
                <FavoriteButton id={pokemon.id} />
            </div>

            {/* FlipCard: 앞/뒤 이미지 전달 */}
            <FlipCard front={pokemon.image} back={pokemon.backImage} />

            <p className="text-gray-700 mt-4">ID: {pokemon.id}</p>

            {pokemon.types?.length > 0 && (
                <div className="mb-4 mt-4">
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

            {pokemon.stats?.length > 0 && (
                <div className="text-left mt-4">
                    <h2 className="font-bold mb-2 text-center">능력치</h2>
                    <ul>
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
