import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();

    return (
        <section className="p-6 text-center">
            <h1 className="text-2xl font-bold">포켓몬 상세 페이지</h1>
            <p>선택된 포켓몬 ID: {id}</p>
        </section>
    );
};

export default Detail;
