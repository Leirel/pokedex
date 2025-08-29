import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemonList = createAsyncThunk(
    "pokemon/fetchList",
    async () => {
        const ids = Array.from({ length: 151 }, (_, i) => i + 1);
        const results = await Promise.all(
            ids.map(async (id) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await res.json();
                return {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.front_default,
                    backImage: data.sprites.back_default,
                    types: data.types,
                    stats: data.stats
                };
            })
        );
        return results;
    }
);

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        list: [],
        loading: false,
        error: null,
        favorites: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload;
            if (state.favorites.includes(id)) {
                state.favorites = state.favorites.filter((fav) => fav !== id);
            } else {
                state.favorites.push(id);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonList.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPokemonList.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchPokemonList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { toggleFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;
