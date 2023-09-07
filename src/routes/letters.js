function svgFilesToPaths(rawSvgFiles) {
	const letters = { alphabet: [] };
	for (const [letter, svgString] of Object.entries(rawSvgFiles)) {
		const pathRegex = /<path[^>]*>/g;
		const foundPaths = svgString.match(pathRegex);
		if (foundPaths) {
			letters[letter] = foundPaths.map((path) => ({
				path,
				letter
			}));
			letters.alphabet.push({
				path: foundPaths[0],
				letter
			});
		} else {
			letters[letter] = [];
		}
	}
	return letters;
}

const rawSvgFiles = {
	a: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M58 122L63.2727 108.545M87 122L81.7273 108.545M81.7273 108.545L72.5 85L63.2727 108.545M81.7273 108.545H63.2727" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M161.314 121.955L147.636 93.355M143.64 85L147.636 93.355M147.636 93.355L134 121.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M238.716 121.955L233.817 108.699M233.817 108.699L225.059 85L211 121.955L233.817 108.699Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M318.716 121.955L305.059 85L291 121.955M291 121.955C294.481 115.126 306.184 104.522 309.076 110.306C311.486 115.126 301.042 120.348 291 121.955Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 169H86.3145V205.955H59L77.0757 187.879" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 169H146.314C154.599 169 161.314 175.716 161.314 184V187.477M161.314 187.477V205.955H143.239C138.136 205.955 134 201.819 134 196.716V196.716C134 191.614 138.136 187.477 143.239 187.477H161.314Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211 205.955V187.477M238.314 169H221.845L211 179.845V187.477M211 187.477H238.314V205.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291 205.955L304.657 169L318.314 205.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 289.91L62.554 275.047M86.7161 289.91L83.0006 275.047M83.0006 275.047L77.4774 252.955H67.837L62.554 275.047M83.0006 275.047H62.554" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 289.91V252.955H161.314V289.91" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211 289.91V266.612C211 259.069 217.115 252.955 224.657 252.955V252.955C232.2 252.955 238.314 259.069 238.314 266.612V289.91" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291 289.91L303.173 273.441M318.314 289.91V273.441M318.314 273.441V252.955L303.173 273.441M318.314 273.441H303.173" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 373.865C59 371.722 59 365.108 59 355.789M59 355.789C59 344.14 68.6404 336.91 86.3145 336.91C86.3145 339.746 86.3145 347.605 86.3145 355.789M59 355.789H86.3145M86.3145 355.789C86.3145 362.438 86.3145 369.303 86.3145 373.865V355.789Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 373.865L147.657 336.91L161.314 373.865H146.435" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291.573 343.329C295.589 338.115 300.41 336.508 304.657 336.508C312.2 336.508 318.314 342.443 318.314 349.764V363.019M318.314 363.019C318.314 369.009 312.2 373.865 304.657 373.865C297.115 373.865 291 369.009 291 363.019C291 357.029 297.115 352.174 304.657 352.174C312.2 352.174 318.314 357.029 318.314 363.019Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M90.9549 420.865V457.819M90.9549 439.342C90.9549 449.547 82.6822 457.819 72.4774 457.819C62.2726 457.819 54 449.547 54 439.342C54 429.137 62.2726 420.865 72.4774 420.865C82.6822 420.865 90.9549 429.137 90.9549 439.342Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M165.955 439.342C165.955 449.547 157.682 457.819 147.477 457.819C137.273 457.819 129 449.547 129 439.342C129 429.137 137.273 420.865 147.477 420.865C157.682 420.865 165.955 429.137 165.955 439.342ZM165.955 439.342V457.819" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291 429.702C291 426.087 294.615 420.865 304.657 420.865C314.699 420.865 318.314 426.89 318.314 439.342M318.314 439.342C315.369 438.806 308.513 437.735 304.657 437.735C299.837 437.735 291 438.94 291 448.982C291 459.025 301.845 457.819 304.657 457.819C307.469 457.819 318.314 454.204 318.314 454.204M318.314 439.342C318.314 445.885 318.314 450.938 318.314 454.204M318.314 457.819C318.314 457.13 318.314 455.911 318.314 454.204" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 504.865H85.9128V521.334M85.9128 521.334L59 541.418M85.9128 521.334V541.418" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M224.477 541.955C214.273 541.955 206 533.682 206 523.477C206 513.273 214.273 505 224.477 505C234.682 505 242.955 513.273 242.955 523.477V541.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.043 541H134.609C130.959 541 128 538.041 128 534.391V509.609C128 505.959 130.959 503 134.609 503H149.478C153.128 503 156.087 505.959 156.087 509.609V534.391C156.087 538.041 159.046 541 162.696 541H167.652" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
</svg>`,
	b: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 138.397V158C52.5088 158 60.2842 158 63.3158 158C67.1053 158 73 154.622 73 148.711C73 142.8 70.0526 138.397 60.7895 138.397M49 138.397V120H62.0526C68.7895 120 71.3158 126.756 71.3158 129.289C71.3158 131.822 69.6316 138.397 60.7895 138.397M49 138.397C49.9825 138.397 53.7158 138.397 60.7895 138.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M156 147C156 152.523 151.523 157 146 157C140.477 157 136 152.523 136 147C136 141.477 140.477 137 146 137C151.523 137 156 141.477 156 147Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.5 133C146.09 133 149 130.09 149 126.5C149 122.91 146.09 120 142.5 120C138.91 120 136 122.91 136 126.5C136 130.09 138.91 133 142.5 133Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M219 158V138.397V120M239 148C239 153.523 234.523 158 229 158C223.477 158 219 153.523 219 148C219 142.477 223.477 138 229 138C234.523 138 239 142.477 239 148Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M302 138.397V158H326V138.397M302 138.397V120H326V138.397M302 138.397H326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 223.397V243H73V223.397M49 223.397V205H64V223.397H73M49 223.397H73" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136 205V223.397M136 223.397V243H160V223.397H136Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223 223.397V243H245.5L223 223.397ZM223 223.397V205H242.5L223 223.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M308.5 243H322.698C328.112 243 332.5 238.612 332.5 233.198V233.198C332.5 227.785 328.112 223.397 322.698 223.397H312.5C310.291 223.397 308.5 221.606 308.5 219.397V205" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 328V308.397V290M63 328V310.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M126 308.397V328C129.509 328 137.284 328 140.316 328C144.105 328 150 324.622 150 318.711C150 312.8 147.053 308.397 137.789 308.397M126 308.397V303.053C126 295.844 131.844 290 139.053 290V290C145.789 290 148.316 295 148.316 299.289C148.316 301.822 146.632 308.397 137.789 308.397M126 308.397C126.982 308.397 130.716 308.397 137.789 308.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M213 308.397V328H227.316C231.105 328 237 326.5 237 319.711C237 316 235 312.5 226.5 312.5C222 312.5 221.25 309.75 221.312 308C221.375 306.25 222.5 303.5 226.5 303.5C233 303.5 235.316 301 235.316 297.289C235.316 293.578 232.789 290 226.053 290H213V308.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300 308.397V328H314.316C318.105 328 324 324.622 324 318.711C324 312.8 322.053 308.397 312.789 308.397C321.632 308.397 322.316 301.822 322.316 299.289C322.316 296.756 319.789 290 313.053 290H300V308.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 413C52.5088 413 60.2842 413 63.3158 413C67.1053 413 73 409.622 73 403.711C73 397.8 70.0526 393.397 60.7895 393.397C53.7158 393.397 50.9825 393.397 50 393.397V375" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136 375V393.397M136 393.397V413C139.509 413 147.284 413 150.316 413C154.105 413 160 409.622 160 403.711C160 397.8 157.053 393.397 147.789 393.397C140.716 393.397 136.982 393.397 136 393.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223 413C226.509 413 234.284 413 237.316 413C241.105 413 247 409.622 247 403.711C247 397.8 244.053 393.397 234.789 393.397M223 375H236.053C242.789 375 245.316 381.756 245.316 384.289C245.316 386.822 243.632 393.397 234.789 393.397M223 393.397C223.982 393.397 227.716 393.397 234.789 393.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
	c: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M78 117.101C78 110.27 72.3229 106 64.6782 106C55.356 106 49 113.258 49 124.36C49 135.461 54.5086 144 64.6782 144C71.9307 144 78 139.73 78 133.326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M163 133.326C163 139.73 156.931 144 149.678 144C139.509 144 134 135.461 134 124.36C134 113.258 140.356 106 149.678 106C157.323 106 163 109.843 163 117.101C163 124.36 151.678 123.5 153.5 116.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M247 134V144H219V106C226.645 106 247.5 106 247.5 106V114.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M322.5 144C312.007 144 303.5 135.493 303.5 125C303.5 114.507 312.007 106 322.5 106" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M79 238C79 238 71.9307 238 64.6782 238C54.5086 238 49 229.461 49 218.36C49 207.259 55.356 200 64.6782 200C74.3229 200 78.5 200 78.5 200V207.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M164.5 207.5V200C164.5 200 160.323 200 150.678 200C141.356 200 135 207.259 135 218.36C135 229.461 140.509 238 150.678 238C157.931 238 165 238 165 238V229.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M249.5 200C249.5 200 228.645 200 221 200V238H249" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M333.5 238H305.5L333 200V213" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
	d: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 264.397V284H63.209C68.2239 284 77 276.822 77 266.267C77 255.711 72.8209 246 63.209 246H49V264.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M133 284V264.397V246C134.344 246 138.347 246 144.5 246C145.361 246 146.265 246 147.209 246C156.821 246 161 255.711 161 266.267C161 276.822 152.224 284 147.209 284H144.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217 284L245 266.267C245 266.267 218.532 246 217 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M301 284C304.065 284 314.197 284 318.209 284C323.224 284 332 276.822 332 266.267C332 255.711 327.821 246 318.209 246C310.519 246 302.532 246 301 246H306.5V284H301Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 379C52.0647 379 55.197 379 59.209 379C68 379 78.3133 371.687 80 361.267C81.5 352 75.8209 346 66.209 346C58.5194 346 50.5323 346 49 346H60.4231L62.5 340L49 379Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136.239 378C139.303 378 146.436 378 150.448 378C155.463 378 164.239 370.822 164.239 360.267C164.239 349.711 160.06 340 150.448 340C142.758 340 137.771 340 136.239 340" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M220.239 340C220.239 340 241.094 340 248.739 340V378H220.739" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M314.739 358C309.216 358 304.739 362.477 304.739 368C304.739 373.523 309.216 378 314.739 378C320.262 378 325.739 374 325.739 365V340" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M66 473V435M49 473V453" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M142 473V435M142 463C142 468.523 137.523 473 132 473C126.477 473 122 468.523 122 463C122 457.477 126.477 453 132 453C137.523 453 142 457.477 142 463Z" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
</svg>`,
	e: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 264.397V284H69M49 264.397V246H69M49 264.397H67.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M145 246H125L141.75 264.397L125 284H145" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M231 284H201V246H231L213 269.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M320 284H306C295.507 284 287 275.493 287 265V265C287 254.507 295.507 246 306 246H320V260.5L292.5 277.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82 340H68C57.5066 340 49 348.507 49 359V359C49 369.493 57.5066 378 68 378H82M66 359H82" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138 359L162 340M138 359L162 378M138 359H162" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M238 340H218L236.75 356.397C223.5 352.5 218 358.5 218 366C218 372.5 222 378 228 378C235 378 238 374 238 374" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M294 378H317M294 340H317M294 358.397H317" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 453C49 463.493 57.5066 472 68 472C74.6115 472 80.4342 468.623 83.8376 463.5M49 453C49 442.507 57.5066 434 68 434C78.4934 434 86 442.507 86 453H49Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	f: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V264.397M49 264.397V246H69M49 264.397H67.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125 284V264.397H143.75M125 246H145" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M227.5 246H222.355C219.524 246 217.078 247.979 216.487 250.748L210.513 278.752C209.922 281.521 207.476 283.5 204.645 283.5H201M207.5 259.5H222" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M283.5 284V273.397C283.5 268.426 287.529 264.397 292.5 264.397H302.25M303.5 246H292.5C287.529 246 283.5 250.029 283.5 255V256" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.625 378V358.397M53.625 358.397V350C53.625 344.477 58.1022 340 63.625 340V340M53.625 358.397H49H61.375" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M119.625 378.5V346.25C119.625 342.798 122.423 340 125.875 340V340C129.327 340 132.125 342.798 132.125 346.25V346.5M119.625 359.25H127.625" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
</svg>
`,
	// todo: fix g
	g: `<path d="M49 284V264.397M49 246V264.397M49 264.397H75V246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
	h: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V264.397M49 246V264.397M49 264.397H75V246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138 284C137.125 264.849 138.073 256.275 139 246M154 246C152.843 258.22 152.208 267.371 153 284M131 267.5C142.182 259.767 148.812 257.257 161.5 256.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217.5 284V274.198M217.5 246V255.198M220.5 264.397H240.5M243.5 246V255.198M243.5 284V274.198" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.5 246V264.397V284V269.75C299.5 264.918 303.418 261 308.25 261V261C313.082 261 317 264.918 317 269.75V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 358.397H75V340V378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M133.675 350C133.675 350 141.175 345 142.175 340C142.175 351 140.175 366.6 140.175 369C140.175 372 139.175 378 134.675 378C130.175 378 130.994 373.5 131.175 371.5C132.175 360.5 154.175 363.5 159.175 340C157.675 355.5 156.175 378 156.175 378C157.009 375.667 162.275 370.9 164.675 370.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	i: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M66 246H49H57.2821V264.397V284H49H66" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M122 284V264.397V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M179 284L179 269.556L179 257M180 247C180 247.552 179.552 248 179 248M180 247C180 246.448 179.552 246 179 246M180 247L178 247M179 248C178.448 248 178 247.552 178 247M179 248L179 246M178 247C178 246.448 178.448 246 179 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M242.5 284L242.5 269.556L242.5 257L236 257M243 247C243 247.552 242.552 248 242 248M243 247C243 246.448 242.552 246 242 246M243 247L241 247M242 248C241.448 248 241 247.552 241 247M242 248L242 246M241 247C241 246.448 241.448 246 242 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M305.5 284L305.5 269.556L305.5 257L299 257M305.5 247C305.5 247.552 305.052 248 304.5 248M305.5 247C305.5 246.448 305.052 246 304.5 246M305.5 247L303.5 247M304.5 248C303.948 248 303.5 247.552 303.5 247M304.5 248L304.5 246M303.5 247C303.5 246.448 303.948 246 304.5 246M299 284L312.5 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M60 341C60 341.552 59.5523 342 59 342M60 341C60 340.448 59.5523 340 59 340M60 341L58 341M59 342C58.4477 342 58 341.552 58 341M59 342L59 340M58 341C58 340.448 58.4477 340 59 340M49 355C54 350 60.5 345 58 355C55.5 365 55 366.5 54 371.5C53.0194 376.403 59 381 65 375" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129.106 341C129.106 341.552 128.658 342 128.106 342M129.106 341C129.106 340.448 128.658 340 128.106 340M129.106 341L127.106 341M128.106 342C127.554 342 127.106 341.552 127.106 341M128.106 342L128.106 340M127.106 341C127.106 340.448 127.554 340 128.106 340M126.106 350.5C126.106 350.5 122.106 366.5 121.106 371.5C120.126 376.403 126.106 381 132.106 375" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	j: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M67 246V264.397V274.711C67 280.622 62.3953 284 57.7907 284C53.186 284 49 281.044 49 275.133" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M123 275.133C123 281.044 127.186 284 131.791 284C136.395 284 141 280.622 141 274.711V264.397V246H132.333" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M197 284C206.042 284 208.209 280.622 208.209 274.711V246H213.209H203.542" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M270.209 284V256M271.209 247C271.209 247.552 270.762 248 270.209 248M271.209 247C271.209 246.448 270.762 246 270.209 246M271.209 247H269.209M270.209 248C269.657 248 269.209 247.552 269.209 247M270.209 248V246M269.209 247C269.209 246.448 269.657 246 270.209 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M72 340V358.397V378H49V371" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M139 340V358.397V378L128 365" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M198.562 353L205.062 347.5C205.062 347.5 205.062 360.4 205.062 366C205.062 371.6 206.062 378 200.062 378C194.062 378 195.062 372 195.062 372L212.562 354.5M206.062 341C206.062 341.552 205.615 342 205.062 342M206.062 341C206.062 340.448 205.615 340 205.062 340M206.062 341H204.062M205.062 342C204.51 342 204.062 341.552 204.062 341M205.062 342V340M204.062 341C204.062 340.448 204.51 340 205.062 340" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M275.062 340L279.562 344V364C279.562 372 275.062 378 268.562 378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	k: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V269.644M49 246V264.397V269.644M49 269.644L55.9163 262.044M70.5172 246L55.9163 262.044M55.9163 262.044L73 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129 246V264.397V284L141 264M151.5 246L141 264M141 264L153 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209 284V263M209 246V263M209 263H218M218 263L233 246M218 263L233 284" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M289 246V268.5M289 284V270.5M289 270.5H290.5C297.956 270.5 304 276.544 304 284V284M289 270.5V268.5M289 268.5H292.5C297.747 268.5 302 264.247 302 259V259" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 378V365.644M49 340V360.397V365.644M49 365.644C49 365.644 51.7857 359.26 56 356C57.2928 355 60.5 353 62.5 355C64.5 357 63 359.937 61 361C56.4639 363.411 49 365.644 49 365.644ZM49 365.644L66.5 378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M122.5 340V359.5M122.5 378V366.5M122.5 366.5H133.5C139.023 366.5 143.5 370.977 143.5 376.5V378M122.5 366.5V359.5M122.5 359.5H141.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M199.5 378V340M221.5 340L209 359L221.5 378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M277.5 378V363.644M277.5 340V358.397V363.644M277.5 363.644L288 352.5M299.017 340L288 352.5M288 352.5V352.5C294.221 351.959 299.6 356.798 299.718 363.041L300 378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 434V451M49 472V451M49 451H56M56 451L72 434M56 451H70.5V472" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M148.5 434L128 453L148.5 472" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M204.5 472V446M204.5 434V446M204.5 446H213.5M213.5 446L228.5 472M213.5 446H221.5L228.5 434" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M284.5 472V452.397V434M306 434V441M308.5 472L301.5 463" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	l: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 246V264.397V284H70" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M139 246L126 284H147" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223 246L208.4 273.74C205.947 278.401 209.327 284 214.595 284H229" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M285 246V264.397V284H308V277" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 378V358.397V340" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M111 378V358.397V340H105M105 378H117" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M173 366.413C191 349.44 187.5 341.523 185 340.421C182.5 339.32 179.5 338.998 178.5 357.782C177.5 376.567 176.5 380.628 185 376.567" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M243.049 340V358.397V367C243.049 373.075 247.973 378 254.049 378V378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	m: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V246L66 284L82 246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124 284V246L141 258L157 246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M199 284V246M232 284V246M216 246V265" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M274 284V246M309 284V261C309 256.029 304.971 252 300 252V252M293 284V262C293 256.477 288.523 252 283 252V252" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 364V326M82 364V340C82 335.582 78.4183 332 74 332V332C69.5817 332 66 335.582 66 340V344.5M66 364V340.5C66 335.806 62.1944 332 57.5 332V332C52.8056 332 49 335.806 49 340.5V344.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157 364V336C157 330.477 152.523 326 147 326H141M141 326V364M141 326V338.5M141 326H134C128.477 326 124 330.477 124 336V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M232 364V331.75C232 328.574 229.426 326 226.25 326V326C223.074 326 220.5 328.574 220.5 331.75V349.75C220.5 352.097 218.597 354 216.25 354V354C213.903 354 212 352.097 212 349.75V332.5C212 328.91 209.09 326 205.5 326V326C201.91 326 199 328.91 199 332.5V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M307 364V334C307 329.582 303.418 326 299 326V326C294.582 326 291 329.582 291 334V364M274 364V334.5C274 329.806 277.806 326 282.5 326V326C287.194 326 291 329.806 291 334.5V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82 444V422C82 413.163 74.8366 406 66 406V406V444V423C66 413.611 58.3888 406 49 406V406V444" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157 444V414C157 409.582 153.418 406 149 406V406C144.582 406 141 409.582 141 414V421.5V414.5C141 409.806 137.194 406 132.5 406V406C127.806 406 124 409.806 124 414.5V444" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M232 444V425.208C232 419.325 224.415 416.956 221.067 421.792L220.433 422.708C217.085 427.544 209.5 425.175 209.5 419.292V411.25C209.5 408.351 207.149 406 204.25 406V406C201.351 406 199 408.351 199 411.25V444" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M274 444V406H291M307 444V406H291M291 406V425" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 524L55 486L66 524L76 486L82 524" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124 524L134.962 486L147.385 524M160 524L147.577 486L136.615 524" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
	n: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V246L75 284V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 284V246L143 246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185 284V246L197 246C204.732 246 211 252.268 211 260V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253 284V259C253 251.82 258.82 246 266 246V246C273.18 246 279 251.82 279 259V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 364V343C75 335.82 69.1797 330 62 330V330C54.8203 330 49 335.82 49 343V364V326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147.5 364V339.5C147.5 332.32 141.68 326.5 134.5 326.5V326.5C127.32 326.5 121.5 332.32 121.5 339.5V364V326H117" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M196 364V326M196 326H205C213.284 326 220 332.716 220 341V364M196 326L189.5 326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M262 326L293 365" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 446V407L75 426.5V446V407" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 445V407H123.5L143 431.5V445V407" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185 445V407H190.5L206 445H211V407" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253 445V407H266.25V445H279V407" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 526V494.625C49 490.966 51.9661 488 55.625 488V488C59.2839 488 62.25 490.966 62.25 494.625V519.625C62.25 523.146 65.1042 526 68.625 526V526C72.1458 526 75 523.146 75 519.625V488" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 488V522.375C117 524.377 118.623 526 120.625 526V526C122.627 526 124.25 524.377 124.25 522.375V497.375C124.25 492.197 128.447 488 133.625 488V488C138.803 488 143 492.197 143 497.375V526" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185 527V488V492L211 522.5M211 527V522.5M211 488V522.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253 494.428C259 487.329 264 483.57 262.5 496.934C261.3 507.626 259.667 520.601 259 525.752C260.5 511.691 266.6 487.829 279 491.505C288.5 494.32 281.5 510.716 279.5 520.322C277.5 529.928 284 525.334 289 521.157" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	o: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 264.298C49 253.234 55.1538 246 64.1795 246C74.0256 246 80.1795 252.809 80.1795 264.298C80.1795 275.787 74.0256 283.872 64.1795 283.872C54.3333 283.872 49 275.362 49 264.298Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M128.859 249.5L145.359 279.5M137.359 246C128.333 246 122.179 253.234 122.179 264.298C122.179 275.362 127.513 283.872 137.359 283.872C147.205 283.872 153.359 275.787 153.359 264.298C153.359 252.809 147.205 246 137.359 246Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="195.359" y="246" width="32" height="38" stroke="#191919" stroke-width="5" stroke-linejoin="round"/>
<path d="M269.359 264.87L284.359 246L299.359 264.87L284.359 284L269.359 264.87Z" stroke="#191919" stroke-width="5" stroke-linejoin="round"/>
<path d="M49 339.5V333C49 329.134 52.134 326 56 326H74C77.866 326 81 329.134 81 333V339.5M49 350.5V357C49 360.866 52.134 364 56 364H74C77.866 364 81 360.866 81 357V350.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.658 364L130 364C126.134 364 123 360.866 123 357L123 333C123 329.134 126.134 326 130 326L132.658 326M143.342 364L146 364C149.866 364 153 360.866 153 357L153 333C153 329.134 149.866 326 146 326L143.342 326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M227 354V336C227 330.477 222.523 326 217 326H205M217 364H205C199.477 364 195 359.523 195 354V336" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	p: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V267.719M49 267.719V246C52.5088 246 60.2842 246 63.3158 246C67.1053 246 73 249.467 73 255.533C73 261.6 70.0526 267.719 60.7895 267.719C53.7158 267.719 49.9825 267.719 49 267.719Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M135 246C138.509 246 146.284 246 149.316 246C153.105 246 159 249.467 159 255.533C159 261.6 156.053 267.719 146.789 267.719C139.716 267.719 135.982 267.719 135 267.719V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M221 284V267.719V246C224.509 246 232.284 246 235.316 246C239.105 246 245 249.467 245 255.533C245 261.6 242.053 267.719 232.789 267.719H228.895" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M316.105 246L309.105 284M307 268.719C307 268.719 311.632 268.719 320.895 268.719C330.158 268.719 333.105 265.5 333.105 259.533C333.105 253.567 330.105 252 323.421 252C316.737 252 307.263 252 307.263 252" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 384V364.719M49 364.719V356C49 350.477 53.4774 346 59.0003 346C59.2142 346 59.4279 346 59.6411 346C64.8102 346 69 350.19 69 355.359V355.359C69 360.529 64.8096 364.719 59.6405 364.719H49Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 384V364.719M131 364.719V346C134.509 346 156 346 156 346L143.789 364.719H131Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M218 384V364.719M218 364.719V346C221.509 346 240 346 240 346V364.719H218Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M302 384V364.719V346C304.947 346 323 346 323 346V364.719" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 446H67V460.719M49 484V456.719" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129 446V464.719V484M147 464.719V446" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209 446V467.719V484M217 467.719C218.6 467.719 218.523 467.719 220.789 467.719C230.053 467.719 233 461.6 233 455.533C233 449.467 227.105 446 223.316 446C221.555 446 220.195 446 217 446" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M295 484V467.719V446C298.509 446 316.968 446 320 446V456L302.5 467.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 546V565.603V584M69 556C69 550.477 64.5228 546 59 546C53.4772 546 49 550.477 49 556C49 561.523 53.4772 566 59 566C64.5228 566 69 561.523 69 556Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 584V567.719M131 567.719V546C134.509 546 156 546 156 546C156 557 152 568 131 567.719Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	q: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M69.1028 273.66L81.0002 286M64.1797 246C55.154 246 49.0002 253.234 49.0002 264.298C49.0002 275.362 54.3335 283.872 64.1797 283.872C74.0258 283.872 80.1797 275.787 80.1797 264.298C80.1797 252.809 74.0258 246 64.1797 246Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M151.18 289.534C142.18 294.426 141.68 285.132 130.18 289.534L135.68 283.175M140.179 246C131.154 246 125 253.077 125 263.901C125 274.725 130.333 283.051 140.179 283.051C150.026 283.051 156.179 275.141 156.179 263.901C156.179 252.661 150.026 246 140.179 246Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223.179 270L234.179 281M200.179 265L219.179 246L238.179 265L219.179 284L200.179 265Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.653 250.691C290.298 254.173 288.179 259.293 288.179 265C288.179 275.493 295.343 284 304.179 284C313.016 284 320.179 275.493 320.179 265C320.179 254.507 313.016 246 304.179 246C300.149 246 296.466 247.77 293.653 250.691ZM293.653 250.691L320.916 286" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M65 367.5V379M54 373H76C78.7614 373 81 370.761 81 368V340C81 337.239 78.7614 335 76 335H54C51.2386 335 49 337.239 49 340V368C49 370.761 51.2386 373 54 373Z" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M145 335V354.603V373M125 345C125 339.477 129.477 335 135 335C140.523 335 145 339.477 145 345C145 350.523 140.523 355 135 355C129.477 355 125 350.523 125 345Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209 335V354.603V373L215.5 365.5M189 345C189 339.477 193.477 335 199 335C204.523 335 209 339.477 209 345C209 350.523 204.523 355 199 355C193.477 355 189 350.523 189 345Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M279.5 373V353.719M279.5 353.719V345C279.5 339.477 275.023 335 269.5 335C269.286 335 269.072 335 268.859 335C263.69 335 259.5 339.19 259.5 344.359V344.359C259.5 349.529 263.69 353.719 268.859 353.719H279.5Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	r: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V268.136M49 268.136V246C52.5311 246 60.3559 246 63.4068 246C67.2203 246 73.1525 249.378 73.1525 255.289C73.1525 260.414 70.9229 266.31 64.2542 267.787M49 268.136C49.9887 268.136 53.7458 268.136 60.8644 268.136C62.1041 268.136 63.2314 268.014 64.2542 267.787M64.2542 267.787L74 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M128 246C131.531 246 139.356 246 142.407 246C146.22 246 152.153 249.378 152.153 255.289C152.153 260.414 149.923 266.31 143.254 267.787M128 284V268.136C128.989 268.136 132.746 268.136 139.864 268.136C141.104 268.136 142.231 268.014 143.254 267.787M143.254 267.787L153 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 284V268.136C207.989 268.136 210.746 268.136 217.864 268.136C219.104 268.136 220.231 268.014 221.254 267.787C227.923 266.31 230.153 260.414 230.153 255.289C230.153 249.378 224.22 246 220.407 246C217.356 246 210.531 246 207 246L232 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291.5 246V264.136M291.5 246C295.031 246 301.856 246 304.907 246C308.72 246 312.653 249.378 312.653 255.289C312.653 260.578 307 264.136 302.364 264.136C301.341 264.136 300.386 264.136 299.5 264.136M291.5 246H286M291.5 264.136V284H286M291.5 264.136C292.347 264.136 294.222 264.136 299.5 264.136M317 284C311.5 284 299.5 273.773 299.5 264.136" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 376V354.5M49 354.5V338H70.5V354.5H58.75M49 354.5H58.75M58.75 354.5L75 376" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129 376V357.5M129 357.5V347.75C129 342.365 133.365 338 138.75 338V338C144.135 338 148.5 342.365 148.5 347.75V347.75C148.5 353.135 144.135 357.5 138.75 357.5V357.5M129 357.5H138.75M138.75 357.5L153 376" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 376V355.5M225.5 352.5V338H207V355.5M207 355.5L229 376" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M283 376V358.136V338C286.531 338 293.356 338 296.407 338C300.22 338 306.153 340 306.153 348.289C306.153 354.5 300.5 358.136 293.864 358.136M293.864 358.136C295.104 358.136 292.817 358.136 293.864 358.136ZM293.864 358.136C299 358.136 305.5 362 305.5 367C305.5 371 305.5 374.667 305.5 376" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 430V443.5M49 468V443.5M49 443.5C53 432.5 69.5 423.5 71 436.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125 468V430H147" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M201 468V430V435H221" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M275 468V446C275 437.163 282.163 430 291 430H297" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 560V527C49 524.239 51.2386 522 54 522H67.5C70.2614 522 72.5 524.239 72.5 527V532C72.5 534.761 70.2614 537 67.5 537H61C59.067 537 57.5 538.567 57.5 540.5V540.5C57.5 542.433 59.067 544 61 544H68.5C71.2614 544 73.5 546.239 73.5 549V560" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127.5 560V522H152.5V530.5L136 542L152 560" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M206.5 560V544.136V522C210.031 522 212.856 522 215.907 522C222.5 522 227.653 524.578 227.653 531.289C227.653 538 215.5 541.5 215.5 541.5L230.5 560" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M284.5 522C288.031 522 293.449 522 296.5 522C303.093 522 307.653 525.078 307.653 531.289C307.653 537.5 302 541 296.5 541C291 541 290.5 541 290.5 541L310.5 560" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	s: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M73.1667 254.867C73.1667 251.489 68.1667 246 61.5 246C54.8333 246 49.8333 250.644 49.8333 254.867C49.8333 267.956 74 260.778 74 274.711C74 281.467 64.8333 284 61.5 284C58.1667 284 49 281.889 49 273.867" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M153.167 249V259V254.867C153.167 251.489 148.167 246 141.5 246C134.833 246 129.833 250.644 129.833 254.867C129.833 267.956 154 260.778 154 274.711C154 281.467 144.833 284 141.5 284C138.167 284 129 280 129 273.867V279.5V270" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M234 246H218.5C213.253 246 209 250.253 209 255.5V255.5C209 260.747 213.253 265 218.5 265H235V284H209" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M292.162 275.5C295.566 280.623 301.389 284 308 284C318.493 284 327 275.493 327 265H290C290 254.507 297.507 246 308 246C315.033 246 321.5 248.5 325.458 255.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 339H58.5C53.2533 339 49 343.253 49 348.5V348.5C49 353.747 53.2533 358 58.5 358H65.5C70.7467 358 75 362.253 75 367.5V367.5C75 372.747 70.7467 377 65.5 377H49" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M156 339H130V358H156V377H130" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237 339H211L237 377H211" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M316 348L305 339L293 348L318 366.5L305 377L292 366.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 457V462.5L60.5 470L72 462.5V456.5L50.2778 443.5V438L60.5 432L70.7222 438V442.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127 463.5L127 470H153C153 442 127 460 127 432H153V437" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M225.857 432L208 450H233L211.571 470" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M314 437V432H289L295 453L307 447L312.5 470H288V464.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 525C75 525 55.9999 525 49 525C49 541.566 84.5 539.056 75 556.124C65.5 573.191 49 553.112 49 553.112" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157.615 531V525H131.615V543H157.615V563H131.615V555.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M238.615 531V525H232.615C222.122 525 213.615 533.507 213.615 544V544H238.615V544C238.615 554.493 230.109 563 219.615 563H212.615V555.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M318.615 533V532C318.615 528.134 315.481 525 311.615 525H301.615C297.749 525 294.615 528.134 294.615 532V537C294.615 540.866 297.749 544 301.615 544H312.615C316.481 544 319.615 547.134 319.615 551V556C319.615 559.866 316.481 563 312.615 563H300.615C296.749 563 293.615 559.866 293.615 556V553.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
	t: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M64 284V264.397V246H49H79" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141 246H156V264.397V284H152H160M141 246H171V252M141 246V252" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M241.125 284V246M249.125 255H233" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M311.125 284V246M319.125 255H311.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M65.125 355H49M55.125 346V378C55.125 381.314 57.8113 384 61.125 384H61.625C64.6625 384 67.125 381.538 67.125 378.5V378.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129.125 377V346M141.125 370.5H135.875C132.147 370.5 129.125 373.522 129.125 377.25V377.25C129.125 380.978 132.147 384 135.875 384H146.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217.125 357H208.125M208.125 346V376C208.125 380.418 211.707 384 216.125 384H221.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	u: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 246V264.397V269.644C49 277.244 53.6129 284 61.5806 284C69.5484 284 75 280.2 75 269.644V246V264.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 246V284H143V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185 246V269C185 277.284 191.716 284 200 284H211V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253 246V274.75C253 279.859 257.141 284 262.25 284V284C267.359 284 271.5 279.859 271.5 274.75V249.75C271.5 247.679 273.179 246 275.25 246V246C277.321 246 279 247.679 279 249.75V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 326V353C49 359.075 53.9249 364 60 364H73M73 364V326M73 364H79" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M121 326V344.397V349.644C121 357.244 125.613 364 133.581 364C141.548 364 147 357.2 147 346.644M147 344.397V326V346.644M147 346.644V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M224 357.572C218 364.671 213 368.43 214.5 355.066C215.7 344.374 219.389 332.5 221 326.248C217.103 341 209.9 367.675 197.5 364C188 361.184 196.5 341.284 198.5 331.678C200.5 322.072 194 326.666 189 330.843" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	v: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 246.156L63 284.156L77 246.001" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M119 246L128.226 280.268C129.55 285.187 136.522 285.207 137.875 280.296L147 246.156" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M189 246V284L216 246.844" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M258 246V284H264.595C269.318 284 273.515 280.984 275.021 276.507L285 246.844" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 341.811L57 363.311L71 326.155" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	w: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 246L59.75 284L70.5 246.844L81.25 284L92 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 246V276C134 280.418 137.582 284 142 284V284C146.418 284 150 280.418 150 276V268.5V275.5C150 280.194 153.806 284 158.5 284V284C163.194 284 167 280.194 167 275.5V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M242 246V284L225 272L209 284V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M317 246V284M284 246V284M300 284V265" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 326V354C49 359.523 53.4772 364 59 364H65M65 364V326M65 364V351.5M65 364H72C77.5228 364 82 359.523 82 354V326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124 326V358.25C124 361.426 126.574 364 129.75 364V364C132.926 364 135.5 361.426 135.5 358.25V340.25C135.5 337.903 137.403 336 139.75 336V336C142.097 336 144 337.903 144 340.25V357.5C144 361.09 146.91 364 150.5 364V364C154.09 364 157 361.09 157 357.5V326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M199 326V356C199 360.418 202.582 364 207 364V364C211.418 364 215 360.418 215 356V326M232 326V355.5C232 360.194 228.194 364 223.5 364V364C218.806 364 215 360.194 215 355.5V326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M307 326V364H290M274 326V364H290M290 364V345" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82 406V444H65M49 406V444H65M65 444V406" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M167 406L153.907 444L139.068 406M124 406L138.839 444L151.932 406" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	x: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284L81 246M81 284L49 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M123 284L133.4 265L123 246M148.6 284L139.8 265L149 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M191 246L204.5 261.2L218 246M191 283.415L204.5 270.554L218 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M269.615 270.554L260 284L280 284L269.615 270.554Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M269.615 261.2L260 246L280 246L269.615 261.2Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 364L72 345L49 326M81 364L60 345L81.5 326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127.5 363.049L151.5 327.049M155.5 360.049C155.5 360.049 152 370.004 146 358.549C140 347.095 140.882 345.049 134 332.049C127.118 319.049 123.5 331.049 123.5 331.049" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M197.5 364V356L221.5 334V326M221.5 364V356L197.5 334V326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M295.5 326V326C286.663 326 279.5 333.163 279.5 342V348C279.5 356.837 286.663 364 295.5 364V364M263.5 326V326C272.337 326 279.5 333.163 279.5 342V348C279.5 356.837 272.337 364 263.5 364V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	y: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M62 284V267M49 246L62 267M62 267L75 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M130 284V265M117 246V265H130M130 265H143V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M201 284V267M185 255L201 267M201 267V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M260 284V267V246M243 246V259L250.5 266" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M319 284V265M302 246V255C302 260.523 306.477 265 312 265H319M319 265V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 326V345H66M66 345V364H49M66 345V326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M108 326.001C108 326.001 108 329.501 108 334.001C108 338.501 111 342.001 115 342.001C119 342.001 125 338.501 125.5 326.001C125.5 339.501 127 363.001 113 364.001C107.387 364.402 107.051 359.811 109.5 357.001C113.16 352.802 125.606 347.498 129.5 346.001" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M171.5 326V336.75C171.5 341.306 175.194 345 179.75 345V345C184.306 345 188 341.306 188 336.75V326.033C188 326.015 188.015 326 188.033 326V326C188.051 326 188.066 326.015 188.066 326.033V345V355.717C188.066 360.292 184.357 364 179.783 364V364C175.209 364 171.5 360.292 171.5 355.717V355" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M230.066 326V337C230.066 341.418 233.647 345 238.066 345V345M247.066 326V337C247.066 341.418 243.484 345 239.066 345H238.066M238.066 345V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M289.066 326V341C289.066 345.418 292.647 349 297.066 349V349C301.484 349 305.066 345.418 305.066 341V329.25C305.066 327.455 306.521 326 308.316 326V326C310.111 326 311.566 327.455 311.566 329.25V357.148C311.566 360.932 308.498 364 304.713 364H289.066" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 444.025L62 425.025M75 406.025L62 425.025M49 406.025L62 425.025" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141.5 406.025L129.5 433.5M117 406.025L129.5 433.5M129.5 433.5L125.437 441.954C124.397 444.118 121.364 444.245 120.147 442.176L118 438.525" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	z: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M75 284H49L75 246H49.4194" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M139.278 277.5L143 284H117L143 246H118.419L122.458 253" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211 277.5V284H185V265H211V246H185V252.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M286 284H265.523C261.006 284 258.804 278.486 262.079 275.375L283.921 254.625C287.196 251.514 284.994 246 280.477 246H260" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.6547 328L67.6546 326L52.1546 344C57.8213 340.667 65.8546 336.5 66.6546 342.5C67.6546 350 62.6547 364 52.1547 364C41.6547 364 59.6546 347 72.6546 338.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M114.655 364H140.655M140.655 326H115.074M120.155 356L135.155 334" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	test: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>

<path d="M64 284V264.397V246H49H79" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M320 284H306C295.507 284 287 275.493 287 265V265C287 254.507 295.507 246 306 246H320V260.5L292.5 277.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 457V462.5L60.5 470L72 462.5V456.5L50.2778 443.5V438L60.5 432L70.7222 438V442.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141 246H156V264.397V284H152H160M141 246H171V252M141 246V252" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>

<path d="M237 339H211L237 377H211" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M311.125 284V246M319.125 255H311.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141 246H156V264.397V284H152H160M141 246H171V252M141 246V252" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M241.125 284V246M249.125 255H233" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M311.125 284V246M319.125 255H311.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M65.125 355H49M55.125 346V378C55.125 381.314 57.8113 384 61.125 384H61.625C64.6625 384 67.125 381.538 67.125 378.5V378.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129.125 377V346M141.125 370.5H135.875C132.147 370.5 129.125 373.522 129.125 377.25V377.25C129.125 380.978 132.147 384 135.875 384H146.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217.125 357H208.125M208.125 346V376C208.125 380.418 211.707 384 216.125 384H221.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg><svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M58 122L63.2727 108.545M87 122L81.7273 108.545M81.7273 108.545L72.5 85L63.2727 108.545M81.7273 108.545H63.2727" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M161.314 121.955L147.636 93.355M143.64 85L147.636 93.355M147.636 93.355L134 121.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M238.716 121.955L233.817 108.699M233.817 108.699L225.059 85L211 121.955L233.817 108.699Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M318.716 121.955L305.059 85L291 121.955M291 121.955C294.481 115.126 306.184 104.522 309.076 110.306C311.486 115.126 301.042 120.348 291 121.955Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 169H86.3145V205.955H59L77.0757 187.879" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 169H146.314C154.599 169 161.314 175.716 161.314 184V187.477M161.314 187.477V205.955H143.239C138.136 205.955 134 201.819 134 196.716V196.716C134 191.614 138.136 187.477 143.239 187.477H161.314Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211 205.955V187.477M238.314 169H221.845L211 179.845V187.477M211 187.477H238.314V205.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291 205.955L304.657 169L318.314 205.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 289.91L62.554 275.047M86.7161 289.91L83.0006 275.047M83.0006 275.047L77.4774 252.955H67.837L62.554 275.047M83.0006 275.047H62.554" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 289.91V252.955H161.314V289.91" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211 289.91V266.612C211 259.069 217.115 252.955 224.657 252.955V252.955C232.2 252.955 238.314 259.069 238.314 266.612V289.91" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291 289.91L303.173 273.441M318.314 289.91V273.441M318.314 273.441V252.955L303.173 273.441M318.314 273.441H303.173" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 373.865C59 371.722 59 365.108 59 355.789M59 355.789C59 344.14 68.6404 336.91 86.3145 336.91C86.3145 339.746 86.3145 347.605 86.3145 355.789M59 355.789H86.3145M86.3145 355.789C86.3145 362.438 86.3145 369.303 86.3145 373.865V355.789Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 373.865L147.657 336.91L161.314 373.865H146.435" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.742 373.865L232.249 359.002M232.249 359.002L224.085 336.91C218.461 346.015 206.973 368.803 212.436 372.66C217.899 376.516 228.457 363.956 232.249 359.002Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291.573 343.329C295.589 338.115 300.41 336.508 304.657 336.508C312.2 336.508 318.314 342.443 318.314 349.764V363.019M318.314 363.019C318.314 369.009 312.2 373.865 304.657 373.865C297.115 373.865 291 369.009 291 363.019C291 357.029 297.115 352.174 304.657 352.174C312.2 352.174 318.314 357.029 318.314 363.019Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M90.9549 420.865V457.819M90.9549 439.342C90.9549 449.547 82.6822 457.819 72.4774 457.819C62.2726 457.819 54 449.547 54 439.342C54 429.137 62.2726 420.865 72.4774 420.865C82.6822 420.865 90.9549 429.137 90.9549 439.342Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M165.955 439.342C165.955 449.547 157.682 457.819 147.477 457.819C137.273 457.819 129 449.547 129 439.342C129 429.137 137.273 420.865 147.477 420.865C157.682 420.865 165.955 429.137 165.955 439.342ZM165.955 439.342V457.819" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 420.865C214.823 420.865 219.599 426.471 223.44 433.317M242.75 457.819C237.509 457.819 234.021 453.684 230.949 448.179M223.44 433.317C215.148 437.601 203.422 445.655 208.607 453.803C214.23 462.64 227.117 454.472 230.949 448.179M223.44 433.317C226.162 438.167 228.414 443.639 230.949 448.179" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291 429.702C291 426.087 294.615 420.865 304.657 420.865C314.699 420.865 318.314 426.89 318.314 439.342M318.314 439.342C315.369 438.806 308.513 437.735 304.657 437.735C299.837 437.735 291 438.94 291 448.982C291 459.025 301.845 457.819 304.657 457.819C307.469 457.819 318.314 454.204 318.314 454.204M318.314 439.342C318.314 445.885 318.314 450.938 318.314 454.204M318.314 457.819C318.314 457.13 318.314 455.911 318.314 454.204" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59 504.865H85.9128V521.334M85.9128 521.334L59 541.418M85.9128 521.334V541.418" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M224.477 541.955C214.273 541.955 206 533.682 206 523.477C206 513.273 214.273 505 224.477 505C234.682 505 242.955 513.273 242.955 523.477V541.955" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142.043 541H134.609C130.959 541 128 538.041 128 534.391V509.609C128 505.959 130.959 503 134.609 503H149.478C153.128 503 156.087 505.959 156.087 509.609V534.391C156.087 538.041 159.046 541 162.696 541H167.652" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M64 284V264.397V246H49H79" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M320 284H306C295.507 284 287 275.493 287 265V265C287 254.507 295.507 246 306 246H320V260.5L292.5 277.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 457V462.5L60.5 470L72 462.5V456.5L50.2778 443.5V438L60.5 432L70.7222 438V442.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141 246H156V264.397V284H152H160M141 246H171V252M141 246V252" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
};

const letters = svgFilesToPaths(rawSvgFiles);
export default letters;
