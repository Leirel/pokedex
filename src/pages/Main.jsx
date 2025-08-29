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

    if (loading) return <p>⏳ 로딩 중...</p>;
    if (error) return <p>❌ 에러 발생: {error}</p>;

    return (
        <section className="section-wrapper grid grid-cols-2 md:grid-cols-4 gap-4">
            {list.map((p) => (
                <Link key={p.id} to={`/detail/${p.id}`} className="pokemon-card">
                    <img src={p.image} alt={p.name} />
                    <h2>{p.name}</h2>
                </Link>
            ))}
        </section>
    );
};

export default Main;
