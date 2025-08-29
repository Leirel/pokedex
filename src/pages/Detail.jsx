import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();

    return (
        <section className="section-wrapper text-center">
            <h1 className="text-2xl font-bold mb-4">포켓몬 상세 페이지</h1>
            <p className="text-gray-700">선택된 포켓몬 ID: {id}</p>
        </section>
    );
};

export default Detail;
