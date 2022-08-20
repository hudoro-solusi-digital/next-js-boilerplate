import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { getPokemons } from "services/pokemon";

const HomeView = dynamic(() => import("views/Home"));

const HomePage = () => {
	return <HomeView />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const response = await getPokemons({});
		return {
			props: {
				pokemons: response,
			},
		};
	} catch (error: any) {
		return {
			props: {
				pokemons: [],
			},
		};
	}
};

export default HomePage;
