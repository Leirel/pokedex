import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../RTK/pokemonSlice";
import { Link } from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemonList());
    }, [dispatch]);

    if (loading) return <p className="text-center p-6">⏳ 로딩 중...</p>;
    if (error) return <p className="text-center p-6 text-red-500">❌ 에러 발생: {error}</p>;

    return (
        <section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {list.map((p) => (
                <Link key={p.id} to={`/detail/${p.id}`} className="block">
                    <div className="pokemon-card">
                        <img src={p.image} alt={p.name} className="w-24 h-24 mx-auto" />
                        <h2 className="text-center mt-2 font-bold text-gray-800 capitalize">{p.name}</h2>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default Main;
