import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`

	${reset}

	* {
		margin:0;
		padding:0;
		box-sizing: border-box;
	}

	ul,li{
		list-style: none;
	}

	input {
		/* all:unset; */
		border: none;
	}
	

	a{
		text-decoration: none;
		color: #000;
	}
	
	button{
		border: none;
		background:none;
	}
	/* strong{
		font-weight: bold;
	} */
	
`;
