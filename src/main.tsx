import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router.tsx";
import { LanguageProvider } from "./assets/context/LanguageContext.tsx";

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(
		<LanguageProvider>
			<RouterProvider router={router} />
		</LanguageProvider>,
	);
}
