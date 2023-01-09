import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      display="flex"
      direction="column"
      alignItems="center"
      css={{
        height: "calc(100vh - 100px)",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250}
        height={250}
        alt="No hay favoritos"
      />
    </Container>
  );
};
