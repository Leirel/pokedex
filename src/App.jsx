import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorites = lazy(() => import("./pages/Favorites"));

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="p-4 bg-blue-500 text-white flex gap-4">
                <Link to="/" className="hover:underline">메인</Link>
                <Link to="/search" className="hover:underline">검색</Link>
                <Link to="/favorites" className="hover:underline">찜 목록</Link>
            </header>
            <main className="p-4">
                <Suspense fallback={<div className="text-center p-6">⏳ 로딩중...</div>}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}

export default App;
