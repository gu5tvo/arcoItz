import { createGlobalStyle } from 'styled-components';

//Reset CSS:

// color: var(--PINK);

export const GlobalStyle = createGlobalStyle`

:root {
 
	--WHITE: #fff;
	--AQUABLUE: #00CFFC;

	--GRIZZLY: #eee;
	--CYAN: #89DDFF;

	--PALE-BLUE: #D7ECFF;
    --PINK: #FFCCE4;
	--PINK-2: #FFCDD6;
    --RED: #B70000;

    --GRAY: #F2F2F2;
    --GRAY-DARK: #C6C6C6;

    --BLUE: #48A7FF;
    --BLUE-DARK: #0A2A5E;

    --GRADIENTE :linear-gradient(180deg, #0077B6 0%, rgba(0, 119, 182, 0) 100%);

	--MODERATE-BLACK: #1E1E1E;
	--TEXT-GRAY:  #5F6D7E;
	--PRIMARY-BLUE:  #00CFFC;
	--PRIMARY-BLUE-HOVER:#0066FF;
	--PRIMARY-PINK:  #FFADBB;
	--PRIMARY-PINK-HOVER:#FF3356;

	--MODERATE-BLACK: #1E1E1E;
	--TEXT-GRAY:  #5F6D7E;
	--PRIMARY-BLUE:  #00CFFC;
	--PRIMARY-BLUE-HOVER:#0066FF;
	--PRIMARY-PINK:  #FFADBB;
	--PRIMARY-PINK-HOVER:#FF3356;
}
   html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		box-sizing: border-box;
	}

	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
		background-color: #F5F5F5;
		font-family: 'Inter', sans-serif;
		font-size: clamp(0.8rem, 1vw, 2rem)
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

button {
    cursor: pointer;
}

`