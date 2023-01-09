import Head from "next/head";
import { FC } from "react";
import { Nabvar } from "../ui/Nabvar";

interface props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon App"}</title>
        <meta name="author" content="Adolfo" />
        <meta name="desciption" content="Informacion sobre el pokemon" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Nabvar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
