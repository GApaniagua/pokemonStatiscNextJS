import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavorireCardPokemon } from "../pokemon/FavorireCardPokemon";

interface props {
  favoritePokemons: number[];
}

export const FavoritesPokemons: FC<props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <FavorireCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
