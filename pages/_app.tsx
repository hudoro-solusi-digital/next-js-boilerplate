import { GlobalStyle } from "atoms/GlobalStyles";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "../styles/react-toastify.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<ToastContainer
				draggable={false}
				position="bottom-left"
				autoClose={3000}
				newestOnTop={true}
				limit={3}
				pauseOnFocusLoss
			/>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
