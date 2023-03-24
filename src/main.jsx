import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("zero-icons")).render(
	<BrowserRouter>
		<App />

		<ToastContainer
			position="bottom-center"
			autoClose={1000}
			limit={2}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="colored"
		/>
	</BrowserRouter>,
);
