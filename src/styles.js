import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// export const lightTheme = {
//   name: "light",
//   bgColor: "#FFFFFF",
//   homeBg: "#f4f4f4",
//   commentBoxColor: "#EDEDED",
//   userBg: "#FFFFFF",
//   userColor: "#757171",
//   fontColor: "#262626",
//   borderColor: "#ececec",
//   sharedBorder: "#FAFAFA",
//   sharedBg: "#FFFFFF",
//   loadingBg: "rgba(0, 0, 0, 0.25)",
//   navColor: "#FFFFFF",
//   disable: "rgba(38, 38, 38, 0.2)",
//   accent: "#FF6B00",
//   delay: "0.05s"
// };

// export const darkTheme = {
//   name: "dark",
//   bgColor: "#151414",
//   homeBg: "#151414",
//   commentBoxColor: "#444444",
//   userBg: "#222222",
//   userColor: "#FFFFFF",
//   fontColor: "#FFFFFF",
//   borderColor: "#7b7b7b",
//   sharedBorder: "#D3D3D3",
//   sharedBg: "#444444",
//   loadingBg: "rgba(10, 10, 10, 0.8)",
//   navColor: "#2c2c2c",
//   disable: "rgba(255, 255, 255, 0.2)",
//   accent: "#FF6B00",
//   delay: "0.05s"
// };

export const GlobalStyles = createGlobalStyle`
	${reset}


	input {
		all:unset;
	}
	* {
		margin:0;
		padding:0;
		box-sizing: border-box;
	}

	a{
		text-decoration: none;
		color: #000;
	}
	
	button{
		border: none;
		background:none;
	}
	strong{
		font-weight: bold;
	}
	
`;
