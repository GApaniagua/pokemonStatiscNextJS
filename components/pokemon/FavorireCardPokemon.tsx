import { Card, Grid } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from "next/router";

interface props {
  id: number;
}

export const FavorireCardPokemon: FC<props> = ({ id }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`./pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={onFavoriteClicked}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
