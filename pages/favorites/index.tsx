import { Card, Container, Grid, Text } from "@nextui-org/react";
import { NextPage } from "next";
import Image from "next/image";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from "react";
import { localFavorites } from "../../utils";
import { FavoritesPokemons } from "../../components/ui/FavoritesPokemons";
export const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
