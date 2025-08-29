import React, { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState("");

    return (
        <section className="p-6">
            <h1 className="text-xl font-bold mb-4">포켓몬 검색</h1>
            <input
                type="text"
                value={query}
                placeholder="포켓몬 이름 입력..."
                onChange={(e) => setQuery(e.target.value)}
                className="border px-3 py-2 rounded-md w-full"
            />
            <p className="mt-4">검색어: {query}</p>
        </section>
    );
};

export default Search;
