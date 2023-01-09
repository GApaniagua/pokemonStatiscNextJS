import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<props> = ({ pokemon }) => {
  const router = useRouter();
  const onClickCard = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid key={pokemon.id} xs={12} sm={4} md={3} xl={2}>
      <Card
        isHoverable
        onClick={onClickCard}
        isPressable
        css={{ padding: "10px" }}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
