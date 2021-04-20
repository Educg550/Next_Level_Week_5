export default function Home(props) {
  return <h1>Content</h1>;
}

// SSR - Dispara na inicialização da página
export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // Atualiza a página a cada 8 horas
  };
}
