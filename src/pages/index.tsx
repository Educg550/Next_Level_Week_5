import { GetStaticProps } from 'next';

type Episode = {
    id: string;
    title: string;
    members: string;
    // Completar informações...
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return <h1>Content</h1>;
}

// SSG - Dispara na inicialização da página
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // Atualiza a página a cada 8 horas
  };
}
