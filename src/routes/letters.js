function removeStrokeAttribute(pathString) {
	return pathString.replace(/\s?stroke="[^"]*"/, '');
}

function svgFilesToPaths(rawSvgFiles) {
	const letters = { alphabet: [] };
	for (const [letter, svgString] of Object.entries(rawSvgFiles)) {
		const pathRegex = /<path[^>]*>/g;
		const foundPaths = svgString.match(pathRegex);
		if (foundPaths) {
			letters[letter] = foundPaths.map(removeStrokeAttribute).map((path) => ({
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
	a: `<svg width="390" height="1141" viewBox="0 0 390 1141" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_853)">
<rect width="390" height="1141" fill="#EEEEEE"/>
<path d="M54 123L59.2727 109.182M83 123L77.7273 109.182M77.7273 109.182L68.5 85L59.2727 109.182M77.7273 109.182H59.2727" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#filter0_d_5_853)">
<path d="M142.227 85L151.455 109.182M156.727 123L151.455 109.182M151.455 109.182H133" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M234.042 123L220.364 93.5913M216.368 85L220.364 93.5913M220.364 93.5913L206.727 123" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M308.758 123V107.313M308.758 85C295.114 85 284.159 100.657 284.042 123L308.758 107.313M308.758 85V107.313M308.758 85H313.652" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81.7161 208L76.8174 194.37M76.8174 194.37L68.0589 170L54 208L76.8174 194.37Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M159.432 208L145.775 170L131.716 208M131.716 208C135.197 200.978 146.9 190.074 149.792 196.022C152.202 200.978 141.758 206.348 131.716 208Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209.432 170H236.747V208H209.432L227.508 189.413" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M286.747 170H299.061C307.346 170 314.061 176.716 314.061 185V189M314.061 189V208H296.247C291 208 286.747 203.747 286.747 198.5V198.5C286.747 193.253 291 189 296.247 189H314.061Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 293V274M81.3145 255H64.8454L54 266.152V274M54 274H81.3145V293" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131.314 293L144.972 255L158.629 293" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M235.943 293L232.131 282.385L208.629 293L222.286 255L228.771 272.622" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M313.258 255L285.943 293L313.258 280V293" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 378L57.4143 368.5H69.0719L63.6775 352.485L67.6572 340L81.3145 378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131.314 378L134.729 369.5H143.111C144.92 369.5 146.386 368.033 146.386 366.224V366.224C146.386 364.415 144.92 362.949 143.111 362.949H137.232L144.972 340L158.629 378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M208.629 378V340H235.943V378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M285.943 378V363.189M313.258 378V363.189M313.258 363.189V340H285.943V363.189M313.258 363.189H285.943" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 463V445.189H81.3145V463M54 425H81.3145" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131.314 463L137.879 447.717M147.151 425H159.031V447.717M147.151 425L137.879 447.717M147.151 425H138.9M159.031 463V447.717M159.031 447.717H137.879" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209.031 463L212.585 447.717M236.747 463L233.031 447.717M233.031 447.717L227.508 425H217.868L212.585 447.717M233.031 447.717H212.585" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M286.747 463V453.685L309.969 425H313.66V463L301.354 450.792" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 548L66.1727 531.065M81.3145 548V531.065M81.3145 531.065V510L66.1727 531.065M81.3145 531.065H66.1727" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131.314 548V523.657C131.314 516.115 137.429 510 144.972 510V510C152.514 510 158.629 516.115 158.629 523.657V548" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M208.629 548C208.629 545.797 208.629 538.996 208.629 529.413M208.629 529.413C208.629 517.435 218.269 510 235.943 510C235.943 512.917 235.943 520.997 235.943 529.413M208.629 529.413H235.943M235.943 529.413C235.943 536.251 235.943 543.309 235.943 548V529.413Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M313.258 548V510H306.722L285.943 548H302.822" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 633L67.6572 595L81.3145 633H66.4353" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.172 595L131.314 633H169.029L150.172 595Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M245.771 633L240.279 617.717M240.279 617.717L232.114 595C226.491 604.362 215.002 627.796 220.465 631.761C225.928 635.726 236.486 622.812 240.279 617.717Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M333.771 633V614C333.771 603.507 325.265 595 314.771 595C304.278 595 295.771 603.507 295.771 614C295.771 624.493 304.278 633 314.771 633H333.771Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54.5824 686.939C58.6684 681.634 63.5716 680 67.8924 680C75.565 680 81.7849 686.037 81.7849 693.484V706.968M81.7849 706.968C81.7849 713.061 75.565 718 67.8924 718C60.2199 718 54 713.061 54 706.968C54 700.875 60.2199 695.936 67.8924 695.936C75.565 695.936 81.7849 700.875 81.7849 706.968Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131.785 718V709.189M149.991 718V709.189M149.991 709.189V689.103C149.991 684.076 145.915 680 140.888 680V680C135.86 680 131.785 684.076 131.785 689.103V709.189M149.991 709.189H131.785" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.991 699C237.991 709.493 229.484 718 218.991 718C208.497 718 199.991 709.493 199.991 699C199.991 688.507 208.497 680 218.991 680C229.484 680 237.991 688.507 237.991 699ZM237.991 699V718" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M325.991 680V718M325.991 699C325.991 709.493 317.484 718 306.991 718C296.497 718 287.991 709.493 287.991 699C287.991 688.507 296.497 680 306.991 680C317.484 680 325.991 688.507 325.991 699Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 765C61.8229 765 66.5987 770.765 70.4401 777.804M89.7498 803C84.509 803 81.0215 798.747 77.9487 793.087M70.4401 777.804C62.1483 782.21 50.4221 790.492 55.6067 798.87C61.2303 807.957 74.1165 799.558 77.9487 793.087M70.4401 777.804C73.1616 782.791 75.414 788.418 77.9487 793.087" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M139.75 771.943C139.75 769.986 140.406 765 150.836 765C161.265 765 162.915 769.987 162.915 774.488C162.915 778.989 162.915 783.844 162.915 783.844M162.915 783.844C162.915 783.844 160.265 780.194 151.332 780.194C142.399 780.194 139.75 785.179 139.75 791.745C139.75 798.312 145.144 800.821 151.332 800.821C157.521 800.821 162.915 796.108 162.915 796.108M162.915 783.844C162.915 790.564 162.915 792.754 162.915 796.108M162.915 800.821C162.915 800.113 162.915 797.861 162.915 796.108" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M212.915 791.442L230.347 765H237.935V787.121M237.935 787.121L227.066 803H212.915M237.935 787.121V803" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M287.935 765H325.935M325.935 765L287.935 803M325.935 765V803" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 850H80.9128V867.121M80.9128 867.121L54 888M80.9128 867.121V888" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M152.663 850L130.913 888M154.305 888L149.09 850.546M130.913 877.815L158.342 870.28" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M208.342 850H233.119V888M223.566 864.384L209.093 876.737V888H218.438" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M290.979 861.693L307.146 850L301.086 888M312.312 863.717L283.119 888L308.094 882.488" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 935H80.9128C80.9128 949.787 54 947.364 54 965.371C54 970.978 57.6096 973.13 62.185 972.994C70.1028 972.759 80.9128 961.941 80.9128 948.8L80.9128 972.994" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M130.913 935H156.425V973H131.755V952.925H156.425" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207.425 935H218.907C224.538 935 229.102 939.565 229.102 945.195V961.661C229.102 967.924 224.026 973 217.764 973H216.463C210.919 973 206.425 968.506 206.425 962.962V962.962C206.425 957.419 210.919 952.925 216.463 952.925H218.582" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M280.102 940.392V938C280.102 936.343 281.445 935 283.102 935H298.78C300.436 935 301.78 936.343 301.78 938V961.661C301.78 967.924 296.703 973 290.441 973H290.14C284.044 973 279.102 968.058 279.102 961.962V961.962C279.102 955.866 284.044 950.925 290.14 950.925H290.441C296.703 950.925 301.78 956.001 301.78 962.263V962.475" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M68.0435 1058H60.6087C56.9588 1058 54 1055.04 54 1051.39V1026.61C54 1022.96 56.9588 1020 60.6087 1020H75.4783C79.1281 1020 82.087 1022.96 82.087 1026.61V1051.39C82.087 1055.04 85.0458 1058 88.6957 1058H93.6522" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M143.652 1020H166.446C176.939 1020 185.446 1028.51 185.446 1039V1039C185.446 1049.49 176.939 1058 166.446 1058H153.69C148.146 1058 143.652 1053.51 143.652 1047.96V1047.96C143.652 1042.42 148.146 1037.92 153.69 1037.92H166.058" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253.923 1058C243.718 1058 235.446 1049.49 235.446 1039C235.446 1028.51 243.718 1020 253.923 1020C264.128 1020 272.401 1028.51 272.401 1039V1058" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M88.7998 1143V1105H73C62.5066 1105 54 1113.51 54 1124V1124C54 1134.49 62.5066 1143 73 1143H78.2" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M176.799 1127.54C176.799 1115.09 168.292 1105 157.799 1105C147.306 1105 138.8 1115.09 138.8 1127.54M176.799 1127.54H138.8M176.799 1127.54C176.799 1133.53 174.835 1138.96 171.631 1143M138.8 1127.54C138.8 1133.53 140.763 1138.96 143.968 1143" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_5_853" x="126.5" y="82.4993" width="36.728" height="51.0013" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_853"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_853" result="shape"/>
</filter>
<clipPath id="clip0_5_853">
<rect width="390" height="1141" fill="white"/>
</clipPath>
</defs>
</svg>
`,
	b: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 95.3969V115C52.5088 115 60.2842 115 63.3158 115C67.1053 115 73 111.622 73 105.711C73 99.8 70.0526 95.3969 60.7895 95.3969M49 95.3969V77H62.0526C68.7895 77 71.3158 83.7556 71.3158 86.2889C71.3158 88.8222 69.6316 95.3969 60.7895 95.3969M49 95.3969C49.9825 95.3969 53.7158 95.3969 60.7895 95.3969" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141.368 115V95.3969M141.368 115C144.877 115 152.652 115 155.684 115C159.473 115 165.368 111.622 165.368 105.711C165.368 99.8 162.42 95.3969 153.157 95.3969M141.368 115H136M141.368 77V95.3969M141.368 77H154.42C161.157 77 163.684 83.7556 163.684 86.2889C163.684 88.8222 161.999 95.3969 153.157 95.3969M141.368 77H136M141.368 95.3969C142.35 95.3969 146.084 95.3969 153.157 95.3969" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M228.368 115C231.877 115 239.652 115 242.684 115C246.473 115 252.368 111.622 252.368 105.711C252.368 99.8 249.421 95.3969 240.157 95.3969M228.368 77H241.421C248.157 77 250.684 83.7556 250.684 86.2889C250.684 88.8222 248.999 95.3969 240.157 95.3969M229.368 95.3969C230.35 95.3969 233.084 95.3969 240.157 95.3969M229.368 95.3969V89.1985M229.368 95.3969V102.198" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M315.368 77V96.2811M315.368 96.2811V105C315.368 110.523 319.845 115 325.368 115C325.582 115 325.796 115 326.009 115C331.178 115 335.368 110.81 335.368 105.641V105.641C335.368 100.471 331.177 96.2811 326.008 96.2811H315.368Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 162H62.0526C68.7895 162 71.3158 168.756 71.3158 171.289C71.3158 173.822 69.6316 180.397 60.7895 180.397M60.7895 180.397C53.7158 180.397 49.9825 180.397 49 180.397V200C52.5088 200 60.2842 200 63.3158 200C67.1053 200 73 196.622 73 190.711C73 184.8 70.0526 180.397 60.7895 180.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136 200C139.509 200 147.284 200 150.316 200C154.105 200 160 196.622 160 190.711C160 184.8 157.053 180.397 147.789 180.397M147.789 180.397C156.632 180.397 158.316 173.822 158.316 171.289C158.316 168.756 155.789 162 149.053 162H136V180.397C136.982 180.397 140.716 180.397 147.789 180.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M243 189C243 194.523 238.523 199 233 199C227.477 199 223 194.523 223 189C223 183.477 227.477 179 233 179C238.523 179 243 183.477 243 189Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M229.5 175C233.09 175 236 172.09 236 168.5C236 164.91 233.09 162 229.5 162C225.91 162 223 164.91 223 168.5C223 172.09 225.91 175 229.5 175Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M306 200V180.397V162M326 190C326 195.523 321.523 200 316 200C310.477 200 306 195.523 306 190C306 184.477 310.477 180 316 180C321.523 180 326 184.477 326 190Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 275C49 280.523 53.4772 285 59 285C64.5228 285 69 280.523 69 275C69 269.477 64.5228 265 59 265C53.4772 265 49 269.477 49 275ZM49 275V265.397V247" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M143 265C148.523 265 153 269.477 153 275C153 280.523 148.523 285 143 285C137.477 285 132 281 132 272V247" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M216 265.397V285H229L237 275.198L229 265.397M216 265.397V247H229L235 255.198L229 265.397M216 265.397H229" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300 265.397V285H324V273.198L317 265.397M300 265.397V247H324V258.198L317 265.397M300 265.397H317" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 350.397V370H73V350.397M49 350.397V332H73V350.397M49 350.397H73" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M160 350.397V370H136V350.397V332H160V350.397ZM160 350.397H148" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223 370V350.397M223 332V350.397M223 350.397H247M247 350.397V370H233M247 350.397V332H233" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M310 350.397V370H334V350.397M310 350.397V332H325V350.397H334M310 350.397H334" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 435.397V455H53.3969C64.2234 455 73 446.223 73 435.397V435.397M49 435.397V417V417C57.2843 417 64 423.716 64 432V435.397H73M49 435.397H73" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136 417V435.397M136 435.397V455H155.119V454.516C155.119 443.957 146.559 435.397 136 435.397V435.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M218.119 417V435.397M218.119 435.397V455H220.239C229.628 455 237.239 447.389 237.239 438V435.397H218.119Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300.239 435.397V455H322.739L300.239 435.397ZM300.239 435.397V417H319.739L300.239 435.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.3569 540L59.0244 502M52.9134 516.325L72.6431 538.179L49 533.628" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M135.643 502V520.397V540H158.929L148.023 522.356" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M221.929 502V516.249M221.929 516.249V540C243.244 540 246.804 533.211 244.551 525.593C242.288 517.942 230.142 522.213 222.813 525.593C230.61 521.997 242.598 511.277 238.236 506.915C233.873 502.553 225.79 509.73 221.929 516.249Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M308.138 502V520.397V540H331.424V516.036L318.081 526.299" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 625V605.397V587M63 625V607.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M126 587V603.281V625C129.509 625 142.968 625 146 625V616L135.5 606.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209 605.397V625C212.509 625 220.284 625 223.316 625C227.105 625 233 621.622 233 615.711C233 609.8 230.053 605.397 220.789 605.397M209 605.397V600.053C209 592.844 214.844 587 222.053 587V587C228.789 587 231.316 592 231.316 596.289C231.316 598.822 229.632 605.397 220.789 605.397M209 605.397C209.982 605.397 213.716 605.397 220.789 605.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M296 604.959V587H314.008V587C314.008 596.918 305.918 604.959 296 604.959V604.959ZM296 604.959V605.198M296 605.198V625H298.206C309.142 625 318.008 616.135 318.008 605.198V605.198H296Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 689.959V672H67.0078V672C67.0078 681.918 58.9184 689.959 49 689.959V689.959ZM49 689.959V690.198M49 690.198V710H71.0078V710C71.0078 699.064 62.1424 690.198 51.2063 690.198H49Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134.008 685.959V672H147.036C150.891 672 154.016 675.125 154.016 678.979V678.979C154.016 682.834 150.891 685.959 147.036 685.959H134.008ZM134.008 685.959V696.198M134.008 696.198V710H149.115C152.926 710 156.016 706.91 156.016 703.099V703.099C156.016 699.288 152.926 696.198 149.115 696.198H134.008Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M219.016 690.397V710H234.536C239.094 710 242.788 706.305 242.788 701.748V700.983C242.788 696.848 239.436 693.495 235.301 693.495H231.421C229.429 693.495 227.813 691.88 227.813 689.888C227.813 687.895 229.429 686.28 231.421 686.28H235.648C239.592 686.28 242.788 683.084 242.788 679.14C242.788 675.197 239.592 672 235.648 672H219.016V690.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M305.788 690.397V710H320.104C323.894 710 329.788 706.622 329.788 700.711C329.788 694.8 327.841 690.397 318.578 690.397C327.42 690.397 328.104 683.822 328.104 681.289C328.104 678.756 325.578 672 318.841 672H305.788V690.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 795C52.5088 795 60.2842 795 63.3158 795C67.1053 795 73 791.622 73 785.711C73 779.8 70.0526 775.397 60.7895 775.397C53.7158 775.397 50.9825 775.397 50 775.397V757" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136 757V775.397M136 775.397V795C139.509 795 147.284 795 150.316 795C154.105 795 160 791.622 160 785.711C160 779.8 157.053 775.397 147.789 775.397C140.716 775.397 136.982 775.397 136 775.397Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223 795C226.509 795 234.284 795 237.316 795C241.105 795 247 791.622 247 785.711C247 779.8 244.053 775.397 234.789 775.397M223 757H236.053C242.789 757 245.316 763.756 245.316 766.289C245.316 768.822 243.632 775.397 234.789 775.397M223 775.397C223.982 775.397 227.716 775.397 234.789 775.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M310 757V795L324.848 783.844L310 773.582" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	c: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M78 117.101C78 110.27 72.3229 106 64.6782 106C55.356 106 49 113.258 49 124.36C49 135.461 54.5086 144 64.6782 144C71.9307 144 78 139.73 78 133.326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M163 133.326C163 139.73 156.931 144 149.678 144C139.509 144 134 135.461 134 124.36C134 113.258 140.356 106 149.678 106C157.323 106 163 109.843 163 117.101C163 124.36 151.678 123.5 153.5 116.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M247 134V144H219V106C226.645 106 247.5 106 247.5 106V114.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M322.5 144C312.007 144 303.5 135.493 303.5 125C303.5 114.507 312.007 106 322.5 106" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M79 238C79 238 71.9307 238 64.6782 238C54.5086 238 49 229.461 49 218.36C49 207.259 55.356 200 64.6782 200C74.3229 200 78.5 200 78.5 200V207.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M164.5 207.5V200C164.5 200 160.323 200 150.678 200C141.356 200 135 207.259 135 218.36C135 229.461 140.509 238 150.678 238C157.931 238 165 238 165 238V229.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M259 200C259 200 231.193 200 221 200V200.667C221 221.286 237.715 238 258.333 238V238" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M77.5 294C77.5 294 56.6447 294 49 294V332H77" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M170.17 306.003C167.384 298.972 160.523 294 152.5 294C142.007 294 133.5 302.507 133.5 313C133.5 323.494 142.007 332 152.5 332C160.523 332 167.384 327.028 170.17 319.997" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M248.897 294L226.17 313L248.499 332" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M333.397 294C333.397 294 312.542 294 304.897 294L318.897 332H332.897" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M77.5 426C77.5 426 66.3284 426.001 60.7778 426L49 414.223V388H77" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162 388C162 388 150.828 388 145.278 388L133.5 399.778V426H161.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M243.5 388C243.5 388 235.328 388 229.778 388L218 399.778V414.223L229.778 426L243 426" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M327.5 426H299.5L327 388V401" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	d: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M51 185.897V205.5H65.209C70.2239 205.5 79 198.322 79 187.767C79 177.211 74.8209 167.5 65.209 167.5H51V185.897Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M135 205.5V185.897V167.5C136.344 167.5 140.347 167.5 146.5 167.5C147.361 167.5 148.265 167.5 149.209 167.5C158.821 167.5 163 177.211 163 187.767C163 198.322 154.224 205.5 149.209 205.5H146.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M219 205.5L247 187.767C247 187.767 220.532 167.5 219 167.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303 205.5C306.065 205.5 316.197 205.5 320.209 205.5C325.224 205.5 334 198.322 334 187.767C334 177.211 329.821 167.5 320.209 167.5C312.519 167.5 304.532 167.5 303 167.5H308.5V205.5H303Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 300.5C54.0647 300.5 57.197 300.5 61.209 300.5C70 300.5 80.3133 293.187 82 282.767C83.5 273.5 77.8209 267.5 68.209 267.5C60.5194 267.5 52.5323 267.5 51 267.5H62.4231L64.5 261.5L51 300.5Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138.239 261.5C138.239 261.5 155.594 261.5 163.239 261.5L152.239 299.5H139.239V271.982" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M219.239 299.5C222.303 299.5 229.436 299.5 233.448 299.5C238.463 299.5 247.239 292.322 247.239 281.767C247.239 271.211 243.06 261.5 233.448 261.5C225.758 261.5 220.771 261.5 219.239 261.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M303.239 261.5C303.239 261.5 324.094 261.5 331.739 261.5V299.5H303.739" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M63.5 356.5L51 356.5L51.5 394.5H79.5V381.5L63.5 356.5Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M145.5 374.5C139.977 374.5 135.5 378.977 135.5 384.5C135.5 390.023 139.977 394.5 145.5 394.5C151.023 394.5 156.5 390.5 156.5 381.5V356.5" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M229.5 394.5V356.5M212.5 394.5V374.5" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M305.5 394.5V356.5M305.5 384.5C305.5 390.023 301.023 394.5 295.5 394.5C289.977 394.5 285.5 390.023 285.5 384.5C285.5 378.977 289.977 374.5 295.5 374.5C301.023 374.5 305.5 378.977 305.5 384.5Z" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M66.2862 488.5L70.6187 450.5M74.7297 465.825L51 484.68L73.6431 485.128" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.73 450.5V466.781V488.5C147.221 488.5 133.761 488.5 130.73 488.5V479.5L141.23 470" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M230.016 450.5V468.897V488.5H206.73L217.636 470.856" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M307.302 450.5V468.897V488.5H286.016V467.536L298.359 477.799" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 544.5H90V544.5C90 565.487 72.9868 582.5 52 582.5V582.5V554.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M166 572.5C166 578.023 161.523 582.5 156 582.5C150.477 582.5 146 578.023 146 572.5C146 566.977 150.477 562.5 156 562.5C161.523 562.5 166 566.977 166 572.5ZM166 572.5V562.897V544.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M241.119 544.5V562.897M241.119 562.897V582.5H222V582.016C222 571.457 230.56 562.897 241.119 562.897V562.897Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M316.239 544.5V562.897M316.239 562.897V582.5H314.119C304.731 582.5 297.119 574.889 297.119 565.5V562.897H316.239Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 676.5C71.4912 676.5 63.7158 676.5 60.6842 676.5C56.8947 676.5 51 673.122 51 667.211C51 661.3 53.9474 656.897 63.2105 656.897C70.2842 656.897 73.0175 656.897 74 656.897V638.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M155 638.5V656.897M155 656.897V676.5C151.491 676.5 143.716 676.5 140.684 676.5C136.895 676.5 131 673.122 131 667.211C131 661.3 133.947 656.897 143.211 656.897C150.284 656.897 154.018 656.897 155 656.897Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M225.848 638.5V676.5L211 666.344L225.848 655.082" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M301.848 638.5V657.781M301.848 657.781V666.5C301.848 672.023 297.37 676.5 291.847 676.5C291.633 676.5 291.42 676.5 291.207 676.5C286.037 676.5 281.848 672.31 281.848 667.141V667.141C281.848 661.971 286.038 657.781 291.207 657.781H301.848Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	e: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M51 44.436V64.0391H71M51 44.436V26.0391H71M51 44.436H69.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127 42.436V44.0391C127 55.0848 135.954 64.0391 147 64.0391V64.0391M127 42.436V26.0391H147M127 42.436H145.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M203 43.6421V43.6421C203 33.9202 210.881 26.0391 220.603 26.0391H223M203 43.6421V64.0391H223M203 43.6421H221.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299 26.0391H279V64.0391H299M297.75 44.436H288.375" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M71 120.039H51L67.75 138.436L51 158.039H71" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150 120.039H130L147.75 138.436C147.75 138.436 144.844 135.436 138.615 135.436C132.385 135.436 127 140.541 127 147.725C127 154.909 131.854 159.942 138.615 159.942C143.448 159.942 147.25 157.862 149.732 153.265" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M244 158.039V158.039C223.013 158.039 206 141.026 206 120.039V120.039H244L218.968 145.682" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M330 158.039H300V120.039H330L312 143.539" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M84 253.942H70C59.5066 253.942 51 245.435 51 234.942V234.942C51 224.448 59.5066 215.942 70 215.942H84V224.442L56.5 247.442" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M173 215.942H159C148.507 215.942 140 224.448 140 234.942V234.942C140 245.435 148.507 253.942 159 253.942H173M157 234.942H172" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M259.345 245.618C255.255 251.593 251.851 253.942 244.231 253.942C234.351 253.942 229 245.403 229 234.301C229 223.2 235.175 215.942 244.231 215.942C253.287 215.942 258.334 221.806 258.334 229.266L232.225 240.855" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 328.301C51 317.2 57.1746 309.942 66.2307 309.942C76.11 309.942 82.2846 316.773 82.2846 328.301H51ZM51 328.301C51 339.403 56.3513 347.942 66.2307 347.942C73.8508 347.942 77.2554 345.593 81.3454 339.618" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138.285 328.942L162.285 309.942M138.285 328.942L162.285 347.942M138.285 328.942H162.285" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M238.285 309.942H218.285L237.035 326.339C223.785 322.442 218.285 328.442 218.285 335.942C218.285 342.442 222.285 347.942 228.285 347.942C235.285 347.942 238.285 343.942 238.285 343.942" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M314.285 309.942H294.285L308.285 328.942L294.285 347.942H314.285" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 441.942H74M51 403.942H74M51 422.339H74" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M130 441.919H165.661M165.661 403.942H143C135.82 403.942 130 409.762 130 416.942V417.752M165.661 421.255H143C135.82 421.255 130 427.075 130 434.255V441.942" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M221.661 422.942C221.661 433.435 230.167 441.942 240.661 441.942C247.272 441.942 253.095 438.565 256.498 433.442M221.661 422.942C221.661 412.448 230.167 403.942 240.661 403.942C251.154 403.942 258.661 412.448 258.661 422.942H221.661Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M89 535.942H51M51 535.942V497.942H89L51 535.942Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M172.314 535.942H145V497.942H172.314L154.239 516.529" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M255.629 535.942H243.314C235.03 535.942 228.314 529.226 228.314 520.942V516.942M228.314 516.942V497.942H246.129C251.376 497.942 255.629 502.195 255.629 507.442V507.442C255.629 512.689 251.376 516.942 246.129 516.942H228.314Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.2025 623.003C74.1165 628.307 69.2133 629.942 64.8925 629.942C57.2199 629.942 51 623.905 51 616.458V602.974M51 602.974C51 596.881 57.2199 591.942 64.8925 591.942C72.5651 591.942 78.7849 596.881 78.7849 602.974C78.7849 609.067 72.5651 614.006 64.8925 614.006C57.2199 614.006 51 609.067 51 602.974Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M160.297 629.942H134.785V591.942H159.455V612.017H134.785" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.974 629.942H226.492C220.862 629.942 216.297 625.377 216.297 619.747V603.281C216.297 597.018 221.374 591.942 227.636 591.942H228.937C234.48 591.942 238.974 596.436 238.974 601.98V601.98C238.974 607.523 234.48 612.017 228.937 612.017H226.817" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M336.768 629.942H313.974C303.481 629.942 294.974 621.435 294.974 610.942V610.942C294.974 600.448 303.481 591.942 313.974 591.942H326.73C332.274 591.942 336.768 596.436 336.768 601.98V601.98C336.768 607.523 332.274 612.017 326.73 612.017H314.362" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M92.7937 723.942H71C59.9543 723.942 51 714.988 51 703.942V685.942H83.756C88.7474 685.942 92.7937 689.988 92.7937 694.98V694.98C92.7937 699.971 88.7474 704.017 83.756 704.017H69.3881" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M172.794 723.942C169.285 723.942 161.509 723.942 158.478 723.942C154.688 723.942 148.794 720.564 148.794 714.653C148.794 708.742 151.741 704.339 161.004 704.339M172.794 685.942H159.741C153.004 685.942 150.478 692.697 150.478 695.231C150.478 697.764 152.162 704.339 161.004 704.339M172.794 704.339C171.811 704.339 168.078 704.339 161.004 704.339" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M247.794 723.942C237.3 723.942 228.794 715.435 228.794 704.942M228.794 704.942C228.794 694.448 237.3 685.942 247.794 685.942M228.794 704.942H238.794" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.425 691.77C323.425 691.77 322.14 685.942 314.057 685.942C305.974 685.942 304.794 692.697 304.794 695.231C304.794 700.92 316 710.5 316 710.5M324.425 720.672C324.425 720.672 322.14 726.5 314.057 726.5C305.974 726.5 303.794 719.744 303.794 717.211C303.794 708 316 699.942 316 699.942" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.3083 815.705C68.9494 821.091 63.7157 820.5 60.6841 820.5C56.8946 820.5 50.9999 817.122 50.9999 811.211C50.9999 805.3 54.6162 800.897 63.2104 800.897M72.3154 788.328C72.3154 788.328 70.0306 782.5 61.9473 782.5C53.8639 782.5 52.6841 789.256 52.6841 791.789C52.6841 794.322 54.7314 800.897 63.2104 800.897M65.4214 800.897H63.2104" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M153.081 820.5H137.561C133.003 820.5 129.308 816.805 129.308 812.248V811.483C129.308 807.348 132.661 803.995 136.796 803.995H140.676C142.668 803.995 144.283 802.38 144.283 800.388V800.388C144.283 798.395 142.668 796.78 140.676 796.78H136.449C132.505 796.78 129.308 793.584 129.308 789.64V789.64C129.308 785.697 132.505 782.5 136.449 782.5H151.081" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M230.912 782.5L209.081 820.5H231.309M231.309 803.16H219.043" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	f: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V264.397M49 264.397V246H69M49 264.397H67.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125 284V264.397M125 264.397V246H145M125 264.397H138.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M201 284V263.397M201 263.397V246H221V251.277M201 263.397H213.75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M277 284V264.397H295.75M277 246H297" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57.4032 378V360.125L52.6014 354.372H49.0001M65.8063 354.024H61.2446L56.4428 348.272V340H67.7271" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.227 340H145.082C142.251 340 139.805 341.979 139.214 344.748L133.24 372.752C132.649 375.521 130.203 377.5 127.372 377.5H123.727M130.227 353.5H144.727" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M206.227 378V367.397C206.227 362.426 210.256 358.397 215.227 358.397H224.977M226.227 340H215.227C210.256 340 206.227 344.029 206.227 349V350" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M286.852 378V358.397M286.852 358.397V350C286.852 344.477 291.329 340 296.852 340V340M286.852 358.397H282.227H294.602" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 472.5V440.25C49 436.798 51.7982 434 55.25 434V434C58.7018 434 61.5 436.798 61.5 440.25V440.5M49 453.25H57" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M123.483 472V450.659C123.483 441.459 130.941 434 140.142 434V434M132.074 455L117.5 441.172" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217.973 472L196.142 434H217.973M216.973 447.34H204.104" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M273.973 441V472M285.973 447.5H280.723C276.995 447.5 273.973 444.478 273.973 440.75V440.75C273.973 437.022 276.995 434 280.723 434H290.973" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	g: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M76.954 93.1011C76.954 86.2697 71.4816 82 64.1127 82C55.1268 82 49 89.2584 49 100.36C49 111.461 54.3099 120 64.1127 120C72.6901 120 78 114.022 78 101.64H64.1127" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M160.5 82C156.5 82 152.482 82 149.113 82C140.127 82 134 89.2584 134 100.36C134 111.461 139.31 120 149.113 120C157.69 120 164 109.5 152 101.64H162" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M245.954 93.1011C245.954 86.2697 240.482 82 233.113 82C224.127 82 218 89.2584 218 100.36C218 111.461 223.31 120 232.113 120C240.69 120 242.5 117.5 246 106.64V120" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M328 82H302V120H328V101.5H314.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 176H49V214H75L63 196.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M160.954 187.101C160.954 180.5 154 176 147.113 176C138.127 176 131 183.258 131 194.36C131 205.461 137.31 214 147.113 214C153.69 214 158 209.5 162 198V195.64M150.113 195.64H162M162 195.64V211" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M235 176V204C235 207.314 232.314 210 229 210H219M235 184.5C235 189.194 231.194 193 226.5 193C221.806 193 218 189.194 218 184.5C218 179.806 221.806 176 226.5 176C231.194 176 235 179.806 235 184.5Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M308 184.5V202C308 206.418 304.418 210 300 210H291M308 184.5C308 189.194 304.194 193 299.5 193C294.806 193 291 189.194 291 184.5C291 179.806 294.806 176 299.5 176C304.194 176 308 179.806 308 184.5Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M66 278.5C66 283.194 62.1944 287 57.5 287C52.8056 287 49 283.194 49 278.5C49 273.806 52.8056 270 57.5 270C62.1944 270 66 273.806 66 278.5ZM66 278.5V270M66 278.5C66 283.5 66 294.6 66 299C66 304.5 61.5 308 57.5 308C53.5 308 50.5 306.5 50.5 302.5C50.5 298.5 53.5 295.5 72 289.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M139 270C133.477 270 129 272.91 129 276.5C129 280.09 133.477 283 139 283C144.523 283 149 280.09 149 276.5C149 272.91 144.523 270 139 270ZM139 270H151.5M147 280.5C142.5 284 143 290 148 295M150 299C150 302.866 145.075 306 139 306C132.925 306 128 302.866 128 299C128 295.134 132.925 292 139 292C145.075 292 150 295.134 150 299Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M226.5 270L207.5 289L226.5 308L236 298.5L245.5 289H227.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M327 289H311C305.753 289 301.5 284.747 301.5 279.5V279.5C301.5 274.253 305.753 270 311 270H327V295C327 302.18 321.18 308 314 308H302.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M87 364L49 364V364.667C49 385.285 65.7147 402 86.3333 402V380.5H71" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M180.333 364C159.715 364 143 380.715 143 401.333V402L180 402V386H165" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M264.834 364C264.834 364 253.662 364 248.111 364L236.333 375.778V402H263.834V385H252.333" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 496C49 496 54.1716 496 59.7222 496L71.5 484.222V458H50V475H61.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127.5 496C127.5 496 132.672 496 138.222 496L148 486.222V458H136.25L127.5 466.5V475H146" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M204 496H210.31C218.594 496 225.31 489.284 225.31 481V477M225.31 477V458H213.5C208.253 458 204 462.253 204 467.5V467.5C204 472.747 208.253 477 213.5 477H225.31Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M281.788 487.061C281.788 493.5 288 496 292.7 496C297.4 496 304.09 493 304.09 485.061V469.032M304.09 469.032C304.09 462.939 298.991 458 292.7 458C286.41 458 281.31 462.939 281.31 469.032C281.31 475.125 286.41 480.064 292.7 480.064C298.991 480.064 304.09 475.125 304.09 469.032Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 581.022C49 582.99 49.5664 588 58.5712 588C67.576 588 69 582.989 69 578.465C69 573.941 69 568.062 69 568.062M69 568.062C69 568.062 66 572.73 59 572.73C52 572.73 49 567.721 49 561.121C49 554.522 53.6568 552 59 552C64.3432 552 69 557.737 69 557.737M69 568.062C69 561.308 69 561.108 69 557.737M69 552C69 552.712 69 555.975 69 557.737" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125 590H149.777V552H125.751V563.263L139.224 573.617" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M205.777 590H230.555V552H206.528V574.263L221.001 563.617" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M286.555 590H307.065V552H287.231V572.076H307.065" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49.9119 684H59.4849C65.1155 684 69.68 679.436 69.68 673.805V656.34C69.68 650.63 65.0506 646 59.34 646H59.0377C53.494 646 49 650.494 49 656.038V656.038C49 661.582 53.494 666.076 59.0377 666.076H60.0866" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	h: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V264.397M49 246V264.397M49 264.397H75V246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 264.397V284L136.053 278.947M131 264.397V246L136.053 251.053M131 264.397H157M157 264.397V246L151.947 251.053M157 264.397V284L151.947 278.947" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217.021 280.667V265.279M217.021 280.667L221.043 276.645M217.021 280.667L213 276.645M217.021 246V265.279M217.021 265.279H233.984M233.984 265.279V250.741M233.984 265.279V284M233.984 250.741L230.347 254.378M233.984 250.741L237.622 254.378" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.622 284.003C299.993 270.197 299.909 261.792 293.622 246.003M319.622 246V246.003C313.716 261.408 313.887 269.731 319.622 284.003M299.112 264.217H313.347" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 378.003V368.4C49 362.877 53.4772 358.4 59 358.4H65C70.5228 358.4 75 362.877 75 368.4V378.003M49 340.003V354.201M75 340.003V354.201" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 378.003V361.4L157 356.4V340.003M131 340.003V351.701M157 365.741V378.003" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M216.847 378.003V358.4M216.847 340.003V358.4M216.847 358.4H242.847V340.003V378.003M213 340.003H220.598M213 378.003H220.598M239.22 340.003H246.817M239.22 378.003H246.817" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M302.817 378.003V358.4M302.817 340.003V358.4M302.817 358.4H320.231V378.003" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 472.006V434.003V434.006M66.4133 472.006V452.403L56.7067 458.403" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M122.413 434.003V472.003L139.827 452.4V472.003" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M195.827 462.003V449.4M195.827 434.003V449.4M195.827 449.4H221.827V434.003V472.003" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M284.827 472.003C283.952 452.852 284.9 444.278 285.827 434.003M300.827 434.003C299.67 446.223 299.035 455.374 299.827 472.003M277.827 455.503C289.009 447.77 295.639 445.26 308.327 444.503" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 566.006V556.204M49 528.006V537.204M52 546.403H72M75 528.006V537.204M75 566.006V556.204" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136 566.006L131 546.403M136 528.006L131 546.403M131 546.403H161M161 546.403L156 528.006M161 546.403L156 566.006" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217 528.006V546.403V566.006V551.756C217 546.923 220.918 543.006 225.75 543.006V543.006C230.582 543.006 234.5 546.923 234.5 551.756V566.006" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M290.5 546.403H316.5V528.006V566.006" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.6752 632.006C51.6752 632.006 59.1752 627.006 60.1752 622.006C60.1752 633.006 58.1752 648.606 58.1752 651.006C58.1752 654.006 57.1752 660.006 52.6752 660.006C48.1752 660.006 48.9935 655.506 49.1752 653.506C50.1752 642.506 72.1752 645.506 77.1752 622.006C75.6752 637.506 74.1752 660.006 74.1752 660.006C75.0085 657.673 80.2752 652.906 82.6752 652.506" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138.675 634.694C142.854 619.589 151.259 617.574 147.343 630.791C143.427 644.007 136.157 666.454 140.507 656.07C144.006 647.717 160.885 628.88 153.506 647.877C146.735 665.307 155.03 661.069 158.401 653.017" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
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
<path d="M213.818 246H208.886M208.886 246V275C208.886 279.971 204.856 284 199.886 284H197M208.886 246H203.939" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M270.818 284V256M271.818 247C271.818 247.552 271.37 248 270.818 248M271.818 247C271.818 246.448 271.37 246 270.818 246M271.818 247H269.818M270.818 248C270.265 248 269.818 247.552 269.818 247M270.818 248V246M269.818 247C269.818 246.448 270.265 246 270.818 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57.5848 350V378H49M58.5846 341C58.5846 341.552 58.1369 342 57.5846 342M58.5846 341C58.5846 340.448 58.1369 340 57.5846 340M58.5846 341H56.5846M57.5846 342C57.0323 342 56.5846 341.552 56.5846 341M57.5846 342V340M56.5846 341C56.5846 340.448 57.0323 340 57.5846 340" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M137.585 340V358.397V378H114.585V371" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M199.584 369L193.584 378H216.584V358.397V340H206.045" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M283.584 340V358.397V378L272.584 365" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 434H59.304V457.621L49 477.87" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M118.866 447L125.366 441.5C125.366 441.5 125.366 454.4 125.366 460C125.366 465.6 126.366 472 120.366 472C114.366 472 115.366 466 115.366 466L132.866 448.5M126.366 435C126.366 435.552 125.919 436 125.366 436M126.366 435C126.366 434.448 125.919 434 125.366 434M126.366 435H124.366M125.366 436C124.814 436 124.366 435.552 124.366 435M125.366 436V434M124.366 435C124.366 434.448 124.814 434 125.366 434" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M195.366 434L199.866 438V458C199.866 466 195.366 472 188.866 472" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	k: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M51 159V144.644M51 121V139.397V144.644M51 144.644L57.9163 137.044M72.5172 121L57.9163 137.044M57.9163 137.044L75 159" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 159V139.644M131 121V134.397V139.644M131 139.644L138.916 131.044M147.612 121L138.916 131.044M138.916 131.044C138.916 145.526 144.469 159 160.539 159" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M216.539 121V139.397V159L228.539 139M239.039 121L228.539 139M228.539 139L240.539 159" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M296.539 159V121V134.39L319.039 159M306.127 143.443L319.039 121" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 215V233.397V253L67.6031 233.397M68.6031 253L61.5199 240.917" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124.603 253V232M124.603 215V232M124.603 232H133.603M133.603 232L148.603 215M133.603 232L148.603 253" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M204.603 215V237.5M204.603 253V239.5M204.603 239.5H206.103C213.559 239.5 219.603 245.544 219.603 253V253M204.603 239.5V237.5M204.603 237.5H208.103C213.35 237.5 217.603 233.247 217.603 228V228" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M275.603 253V240.644M275.603 215V235.397V240.644M275.603 240.644C275.603 240.644 278.389 234.26 282.603 231C283.896 230 287.103 228 289.103 230C291.103 232 289.603 234.937 287.603 236C283.067 238.411 275.603 240.644 275.603 240.644ZM275.603 240.644L293.103 253" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 309V328.5M51 347V335.5M51 335.5H62C67.5228 335.5 72 339.977 72 345.5V347M51 335.5V328.5M51 328.5H70" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M128 347V309M150 309L137.5 328L150 347" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M206 347V309M228 309L213.663 335.465H228V347" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M284 347V309M306 310H297.853L291.223 325.395L309 347" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57.5 441V403M79.5 403C79.5 416.207 59.8439 422 51 422C59.747 422 79.5 423.86 79.5 441" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M135.5 441V403M157.5 403L156.468 403.348C138.079 409.557 138.799 435.808 157.5 441" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M213.5 411.254V403M236 403L213.5 422L236 441M213.5 441V432.746" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M292 411.254V403M314.5 403C301.381 403 303.93 417.617 292 417.617M292 441V430.746M292 424.431C305.119 424.431 302.57 441 314.5 441" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 535V520.644M51 497V515.397V520.644M51 520.644L61.5 509.5M72.5172 497L61.5 509.5M61.5 509.5V509.5C67.721 508.959 73.1 513.798 73.2178 520.041L73.5 535" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129.5 497V514M129.5 535V514M129.5 514H136.5M136.5 514L152.5 497M136.5 514H151V535" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M208.5 497V513.861M208.5 535V517M208.5 517H230V535M208.5 517V513.861M208.5 513.861H213.139C222.451 513.861 230 506.312 230 497V497" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M286 497V511.861M286 535V519M286 519V511.861M286 519H294.25V519C298.806 519 302.5 522.694 302.5 527.25V535M286 511.861H294.25V511.861C298.806 511.861 302.5 508.168 302.5 503.611V497" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 591V606.861V613V629M70.5 591V597.236C70.5 602.552 66.1907 606.861 60.875 606.861V606.861C55.5593 606.861 51.25 602.552 51.25 597.236V591M70.5 629V622.625C70.5 617.309 66.1907 613 60.875 613V613C55.5593 613 51.25 617.309 51.25 622.625V629" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147 591L126.5 610L147 629" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M203 629V612M203 591V603M203 603H220L227 591M203 603V612M203 612H220L227 629" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M283 629V603M283 591V603M283 603H292M292 603L307 629M292 603H300L307 591" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51 723V703M51 685V703M51 703H62.1019M62.1019 703L75 723M62.1019 703H71V685" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 723V703.397V685M152.5 685V692M155 723L148 714" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M229.294 685L211 697.027V685M211 723V704.973L229.294 723" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M285.294 685V723L295.809 705.736L307.707 723M293.177 697.566L300.707 685" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	l: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 246V264.397V284H70" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M126 246L130.322 262.886L126 284L136.732 279.975L147 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M203 246V277.083L209.968 284.506H223.953" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M279.953 246V284H288.953" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M70 340.506L49 378.506H70" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M146 340.506L131.4 368.246C128.947 372.907 132.327 378.506 137.595 378.506H152" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M208 340.506V358.903V378.506H229L232 371.506" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.169 378.506V340.506M293.169 378.506H316.169V371.506M293.169 378.506H288M288 340.506H298.431" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 472.506V452.903V434.506" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M111 472.506V452.903V434.506H105M105 472.506H117" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M173 460.919C191 443.946 187.5 436.029 185 434.928C182.5 433.826 179.5 433.504 178.5 452.289C177.5 471.073 176.5 475.135 185 471.073" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M243.049 434.506V452.903V461.506C243.049 467.581 247.973 472.506 254.049 472.506V472.506" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 528.507C49 566.507 65.5655 566.507 86 566.507" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	m: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V246L66 284L82 246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124 284L143.311 246V284L164.457 246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M206.457 284V264L225.768 246V284V264L246.915 246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M288.915 284V246L305.915 258L321.915 246V284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 364V326L66 344M66 344L82 326V364M66 344V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M124 364V326M157 364V326M141 326V345" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M199 364V326M218 364V330.279L206.056 341.223M237.634 364V330.279L225.69 341.223" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M279.634 364V326M314.634 364V341C314.634 336.029 310.605 332 305.634 332V332M298.634 364V342C298.634 336.477 294.157 332 288.634 332V332" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 444V406M82 444V420C82 415.582 78.4183 412 74 412V412C69.5817 412 66 415.582 66 420V424.5M66 444V420.5C66 415.806 62.1944 412 57.5 412V412C52.8056 412 49 415.806 49 420.5V424.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157 444V416C157 410.477 152.523 406 147 406H141M141 406V444M141 406V418.5M141 406H134C128.477 406 124 410.477 124 416V444" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M232 444V411.75C232 408.574 229.426 406 226.25 406V406C223.074 406 220.5 408.574 220.5 411.75V429.75C220.5 432.097 218.597 434 216.25 434V434C213.903 434 212 432.097 212 429.75V412.5C212 408.91 209.09 406 205.5 406V406C201.91 406 199 408.91 199 412.5V444" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M307 444V414C307 409.582 303.418 406 299 406V406C294.582 406 291 409.582 291 414V444M274 444V414.5C274 409.806 277.806 406 282.5 406V406C287.194 406 291 409.806 291 414.5V444" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82 524V502C82 493.163 74.8366 486 66 486V486V524V503C66 493.611 58.3888 486 49 486V486V524" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157 524V494C157 489.582 153.418 486 149 486V486C144.582 486 141 489.582 141 494V501.5V494.5C141 489.806 137.194 486 132.5 486V486C127.806 486 124 489.806 124 494.5V524" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M232 524V505.208C232 499.325 224.415 496.956 221.067 501.792L220.433 502.708C217.085 507.544 209.5 505.175 209.5 499.292V491.25C209.5 488.351 207.149 486 204.25 486V486C201.351 486 199 488.351 199 491.25V524" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M274 524V486H291M307 524V486H291M291 486V505" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 604L57.5 566L68 604L78.5 566L87 604" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129 604L137.5 566C137.5 566 160.5 604 148 604C135.5 604 158.5 566 158.5 566L167 604" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209 604L219.962 566L232.385 604M245 604L232.577 566L221.615 604" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M287 604L287 566L312.003 566V566C319.181 566 325 571.819 325 578.997L325 604M306 604L306 580" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
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
<path d="M117 446V407L129.5 420M139 446V407" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 446V408L190 418M181 446V407" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M249 445V407H255.5L275 431.5V445V407" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 526V488H54.5L70 526H75V488" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 526V488H130.25V526H143V488" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185 526V494.625C185 490.966 187.966 488 191.625 488V488C195.284 488 198.25 490.966 198.25 494.625V519.625C198.25 523.146 201.104 526 204.625 526V526C208.146 526 211 523.146 211 519.625V488" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253 488V522.375C253 524.377 254.623 526 256.625 526V526C258.627 526 260.25 524.377 260.25 522.375V497.375C260.25 492.197 264.447 488 269.625 488V488C274.803 488 279 492.197 279 497.375V526" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 607V568V572L75 602.5M75 607V602.5M75 568V602.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 574.428C123 567.329 128 563.57 126.5 576.934C125.3 587.626 123.667 600.601 123 605.752C124.5 591.691 130.6 567.829 143 571.505C152.5 574.32 146.5 590.716 144.5 600.322C142.5 609.928 149 605.334 154 601.157" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	o: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 264.298C49 253.234 55.1538 246 64.1795 246C74.0256 246 80.1795 252.809 80.1795 264.298C80.1795 275.787 74.0256 283.872 64.1795 283.872C54.3333 283.872 49 275.362 49 264.298Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M128.859 249.5L145.359 279.5M137.359 246C128.333 246 122.179 253.234 122.179 264.298C122.179 275.362 127.513 283.872 137.359 283.872C147.205 283.872 153.359 275.787 153.359 264.298C153.359 252.809 147.205 246 137.359 246Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M195.359 255.5L204.859 246H214.359H223.859L233.359 255.5V265V274.5L223.859 284H214.359H204.859L195.359 274.5V265V255.5Z" stroke="#191919" stroke-width="5" stroke-linejoin="round"/>
<rect x="275.359" y="246" width="32" height="38" stroke="#191919" stroke-width="5" stroke-linejoin="round"/>
<path d="M49 344.87L64.0001 326L79 344.87L64.0001 364L49 344.87Z" stroke="#191919" stroke-width="5" stroke-linejoin="round"/>
<path d="M121 339.5V333C121 329.134 124.134 326 128 326H146C149.866 326 153 329.134 153 333V339.5M121 350.5V357C121 360.866 124.134 364 128 364H146C149.866 364 153 360.866 153 357V350.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M204.658 364L202 364C198.134 364 195 360.866 195 357L195 333C195 329.134 198.134 326 202 326L204.658 326M215.342 364L218 364C221.866 364 225 360.866 225 357L225 333C225 329.134 221.866 326 218 326L215.342 326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299 354V336C299 330.477 294.523 326 289 326H277M289 364H277C271.477 364 267 359.523 267 354V336" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	p: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 167V150.719M49 150.719V129C52.5088 129 60.2842 129 63.3158 129C67.1053 129 73 132.467 73 138.533C73 144.6 70.0526 150.719 60.7895 150.719C53.7158 150.719 49.9825 150.719 49 150.719Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M135 129C138.509 129 146.284 129 149.316 129C153.105 129 159 132.467 159 138.533C159 144.6 156.053 150.719 146.789 150.719C139.716 150.719 135.982 150.719 135 150.719V167" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M221 167V150.719V129C224.509 129 232.284 129 235.316 129C239.105 129 245 132.467 245 138.533C245 144.6 242.053 150.719 232.789 150.719H228.895" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M316.105 129L309.105 167M307 151.719C307 151.719 311.632 151.719 320.895 151.719C330.158 151.719 333.105 148.5 333.105 142.533C333.105 136.567 330.105 135 323.421 135C316.737 135 307.263 135 307.263 135" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 267V247.719M49 247.719V239C49 233.477 53.4774 229 59.0003 229C59.2142 229 59.4279 229 59.6411 229C64.8102 229 69 233.19 69 238.359V238.359C69 243.529 64.8096 247.719 59.6405 247.719H49Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 267V247.719M131 247.719V229C134.509 229 156 229 156 229L143.789 247.719H131Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M218 267V247.719M218 247.719V229C221.509 229 240 229 240 229V247.719H218Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M302 267V247.719V229C304.947 229 323 229 323 229V247.719" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 329H67V343.719M49 367V339.719" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129 329V347.719V367M147 347.719V329" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209 329V350.719V367M217 350.719C218.6 350.719 218.523 350.719 220.789 350.719C230.053 350.719 233 344.6 233 338.533C233 332.467 227.105 329 223.316 329C221.555 329 220.195 329 217 329" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M295 367V350.719V329C298.509 329 316.968 329 320 329V339L302.5 350.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 429V448.603V467M69 439C69 433.477 64.5228 429 59 429C53.4772 429 49 433.477 49 439C49 444.523 53.4772 449 59 449C64.5228 449 69 444.523 69 439Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131 467V450.719M131 450.719V429C134.509 429 156 429 156 429C156 440 152 451 131 450.719Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M218 429V448.603V467M238 439C238 433.477 233.523 429 228 429C222.477 429 218 433.477 218 439C218 444.523 222.477 449 228 449C233.523 449 238 444.523 238 439Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300 439C300 433.477 304.477 429 310 429C315.523 429 320 433.477 320 439C320 444.523 315.523 449 310 449C304.477 449 300 444.523 300 439ZM300 439V448.603V467" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M60 549C65.5228 549 70 544.523 70 539C70 533.477 65.5228 529 60 529C54.4772 529 49 533 49 542V567" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M132 567V548.603M132 548.603V529H151.119V529.484C151.119 540.043 142.559 548.603 132 548.603V548.603Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M213.119 567V548.603M213.119 548.603V529H215.239C224.628 529 232.239 536.611 232.239 546V548.603H213.119Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M306.682 529L300.35 567M294.239 552.675L322.968 537.821L299.325 535.372" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.111 675V637H72M49 656.675L76.7297 650.821L58 629" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138.73 667V648.603V629H162.016L151.11 646.644" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M224.016 667V648.603V629H247.302V652.964L233.959 642.701" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M309.302 629C312.811 629 320.586 629 323.618 629C327.408 629 333.302 632.378 333.302 638.289C333.302 644.2 330.355 648.603 321.092 648.603C314.018 648.603 311.285 648.603 310.302 648.603V667" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 775V756.603M49 756.603V737C52.5088 737 60.2842 737 63.3158 737C67.1053 737 73 740.378 73 746.289C73 752.2 70.0526 756.603 60.7895 756.603C53.7158 756.603 49.9825 756.603 49 756.603Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M135 775V737L149.848 748.156L135 758.418" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211.848 775V755.719M211.848 755.719V747C211.848 741.477 216.325 737 221.848 737C222.062 737 222.276 737 222.489 737C227.658 737 231.848 741.19 231.848 746.359V746.359C231.848 751.529 227.657 755.719 222.488 755.719H211.848Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.848 737H311.848V751.719M293.848 775V747.719" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	q: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M69.1028 37.6596L81.0002 50M64.1797 10C55.154 10 49.0002 17.234 49.0002 28.2979C49.0002 39.3617 54.3335 47.8723 64.1797 47.8723C74.0258 47.8723 80.1797 39.7872 80.1797 28.2979C80.1797 16.8085 74.0258 10 64.1797 10Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M151.18 53.5344C142.18 58.4259 141.68 49.1321 130.18 53.5344L135.68 47.1755M140.179 10C131.154 10 125 17.0771 125 27.9008C125 38.7246 130.333 47.0506 140.179 47.0506C150.026 47.0506 156.179 39.1409 156.179 27.9008C156.179 16.6608 150.026 10 140.179 10Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M223.179 34L234.179 45M200.179 29L219.179 10L238.179 29L219.179 48L200.179 29Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.653 14.6906C290.298 18.1734 288.179 23.2928 288.179 29C288.179 39.4934 295.343 48 304.179 48C313.016 48 320.179 39.4934 320.179 29C320.179 18.5066 313.016 10 304.179 10C300.149 10 296.466 11.7697 293.653 14.6906ZM293.653 14.6906L320.916 50" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M65 131.5V143M54 137H76C78.7614 137 81 134.761 81 132V104C81 101.239 78.7614 99 76 99H54C51.2386 99 49 101.239 49 104V132C49 134.761 51.2386 137 54 137Z" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M144 136V127.5M125 99H163V137H125V99Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M222.579 122.5L237 137V99H207V137H214.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M301 99V118.603V137M281 109C281 103.477 285.477 99 291 99C296.523 99 301 103.477 301 109C301 114.523 296.523 119 291 119C285.477 119 281 114.523 281 109Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M69 187V206.603V225L75.5 217.5M49 197C49 191.477 53.4772 187 59 187C64.5228 187 69 191.477 69 197C69 202.523 64.5228 207 59 207C53.4772 207 49 202.523 49 197Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M139.5 225V205.719M139.5 205.719V197C139.5 191.477 135.023 187 129.5 187C129.286 187 129.072 187 128.859 187C123.69 187 119.5 191.19 119.5 196.359V196.359C119.5 201.529 123.69 205.719 128.859 205.719H139.5Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207.5 225V208.719M207.5 208.719V187C203.991 187 196.216 187 193.184 187C189.395 187 183.5 190.467 183.5 196.533C183.5 202.6 186.447 208.719 195.711 208.719C202.784 208.719 206.518 208.719 207.5 208.719Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M275.5 187C271.991 187 264.216 187 261.184 187C257.395 187 251.5 190.467 251.5 196.533C251.5 202.6 254.447 208.719 263.711 208.719C270.784 208.719 274.518 208.719 275.5 208.719V225" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73 307V290.719V269C69.4912 269 61.7158 269 58.6842 269C54.8947 269 49 272.467 49 278.533C49 284.6 51.9474 290.719 61.2105 290.719H65.1053" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 269L128 307M136.105 291.719H129.21C120.5 291.719 117 288.5 117 282.533C117 275.5 125 275 128.684 275C132.368 275 140.842 275 140.842 275" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M204.842 307V287.719M204.842 287.719V279C204.842 273.477 200.365 269 194.842 269C194.628 269 194.414 269 194.201 269C189.032 269 184.842 273.19 184.842 278.359V278.359C184.842 283.529 189.032 287.719 194.202 287.719H204.842Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M273.842 307V287.719M273.842 287.719V269C270.333 269 248.842 269 248.842 269L261.053 287.719H273.842Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M71 389V369.719M71 369.719V351C67.4912 351 49 351 49 351V369.719H71Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136 389V369.719V351C133.053 351 115 351 115 351V369.719" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M198 351H180V365.719M198 389V361.719" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M260 351V369.719V389M242 369.719V351" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M328 351V372.719V389M320 372.719C318.4 372.719 318.477 372.719 316.211 372.719C306.947 372.719 304 366.6 304 360.533C304 354.467 309.895 351 313.684 351C315.445 351 316.805 351 320 351" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M74 471V454.719V433C70.4912 433 52.0316 433 49 433V443L66.5 454.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138 433V452.603V471M118 443C118 437.477 122.477 433 128 433C133.523 433 138 437.477 138 443C138 448.523 133.523 453 128 453C122.477 453 118 448.523 118 443Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207 471V454.719M207 454.719V433C203.491 433 182 433 182 433C182 444 186 455 207 454.719Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M271 443C271 437.477 266.523 433 261 433C255.477 433 251 437.477 251 443C251 448.523 255.477 453 261 453C266.523 453 271 448.523 271 443ZM271 443V452.603V471" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M325 453C319.477 453 315 448.523 315 443C315 437.477 319.477 433 325 433C330.523 433 336 437 336 446V471" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M68.1194 553V534.603M68.1194 534.603V515H49V515.484C49 526.043 57.56 534.603 68.1194 534.603V534.603Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131.239 553V534.603M131.239 534.603V515H129.119C119.731 515 112.119 522.611 112.119 532V534.603H131.239Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M191.525 515L183.857 553M190.968 539.675L175.239 523.821L196.882 521.372" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M254.071 553L259.138 520.911H244.876M262.609 537.525L240.882 532.582L255.854 515" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M329.896 553V534.603V515H306.609L317.515 532.644" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73 597C69.4912 597 61.7158 597 58.6842 597C54.8947 597 49 600.378 49 606.289C49 612.2 51.9474 616.603 61.2105 616.603C68.2842 616.603 71.0175 616.603 72 616.603V635" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141 635V616.603M141 616.603V597C137.491 597 129.716 597 126.684 597C122.895 597 117 600.378 117 606.289C117 612.2 119.947 616.603 129.211 616.603C136.284 616.603 140.018 616.603 141 616.603Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M199.848 635V597L185 608.156L199.848 618.418" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	r: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284V268.136M49 268.136V246C52.5311 246 60.3559 246 63.4068 246C67.2203 246 73.1525 249.378 73.1525 255.289C73.1525 260.414 70.9229 266.31 64.2542 267.787M49 268.136C49.9887 268.136 53.7458 268.136 60.8644 268.136C62.1041 268.136 63.2314 268.014 64.2542 267.787M64.2542 267.787L74 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134 246V268.136M134 246C137.531 246 145.356 246 148.407 246C152.22 246 158.153 249.378 158.153 255.289C158.153 260.414 155.923 266.31 149.254 267.787C148.231 268.014 147.104 268.136 145.864 268.136C138.746 268.136 134.989 268.136 134 268.136M134 246H128M134 268.136V284H128M162 284C152 284 145.5 279.5 145.5 269" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M216 246C219.531 246 227.356 246 230.407 246C234.22 246 240.153 249.378 240.153 255.289C240.153 260.414 237.923 266.31 231.254 267.787M216 284V268.136C216.989 268.136 220.746 268.136 227.864 268.136C229.104 268.136 230.231 268.014 231.254 267.787M231.254 267.787L241 284" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M295 246C298.531 246 306.356 246 309.407 246C313.22 246 319.153 249.378 319.153 255.289C319.153 260.414 316.923 266.31 310.254 267.787M295 278V268.136M295 268.136C295.989 268.136 299.746 268.136 306.864 268.136C308.104 268.136 309.231 268.014 310.254 267.787M295 268.136V259M310.254 267.787L320 284M314.5 284H324.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 376V360.136C49.9887 360.136 52.7458 360.136 59.8644 360.136C61.1041 360.136 62.2314 360.014 63.2542 359.787C69.9229 358.31 72.1525 352.414 72.1525 347.289C72.1525 341.378 66.2203 338 62.4068 338C59.3559 338 52.5311 338 49 338L74 376" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M133.5 338V356.136M133.5 338C137.031 338 143.856 338 146.907 338C150.72 338 154.653 341.378 154.653 347.289C154.653 352.578 149 356.136 144.364 356.136C143.341 356.136 142.386 356.136 141.5 356.136M133.5 338H128M133.5 356.136V376H128M133.5 356.136C134.347 356.136 136.222 356.136 141.5 356.136M159 376C153.5 376 141.5 365.773 141.5 356.136" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M213 376V354.5V338H233.25C236.149 338 238.5 340.351 238.5 343.25V343.25C238.5 346.149 236.149 348.5 233.25 348.5H221.75L239 376" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293 376V354.5M293 354.5V338H313.5V354.5H306.75M293 354.5H306.75M306.75 354.5V376" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 468V449.5M49 449.5V439.75C49 434.365 53.3652 430 58.75 430V430C64.1348 430 68.5 434.365 68.5 439.75V439.75C68.5 445.135 64.1348 449.5 58.75 449.5V449.5M49 449.5H58.75M58.75 449.5L73 468" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127 468V447.5M145.5 444.5V430H127V447.5M127 447.5L149 468" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M203 468V450.136V430C206.531 430 213.356 430 216.407 430C220.22 430 226.153 432 226.153 440.289C226.153 446.5 220.5 450.136 213.864 450.136M213.864 450.136C215.104 450.136 212.817 450.136 213.864 450.136ZM213.864 450.136C219 450.136 225.5 454 225.5 459C225.5 463 225.5 466.667 225.5 468" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M280.153 430V443.5M280.153 468V443.5M280.153 443.5C284.153 432.5 300.653 423.5 302.153 436.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 560V522H71" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125 560V522V527H145" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M199 560V538C199 529.163 206.163 522 215 522H221" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M288 560V536C288 528.268 294.268 522 302 522V522M302 560H275" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 652V619C49 616.239 51.2386 614 54 614H67.5C70.2614 614 72.5 616.239 72.5 619V624C72.5 626.761 70.2614 629 67.5 629H61C59.067 629 57.5 630.567 57.5 632.5V632.5C57.5 634.433 59.067 636 61 636H68.5C71.2614 636 73.5 638.239 73.5 641V652" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127.5 652V614H152.5V622.5L136 634L152 652" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M213 652V614L231 631H206.5L231.5 652" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M285.5 652V614L305 634H293L309 652" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 744V706H74L49.5 730.5M60.5 720.5L72.5 732.5V744" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M128 744V706H153L128.5 730.5M154 744L139.5 720.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M235 744L222.068 726.5M208 706V744L221.5 725L235 706H208Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M289 744V728.136V706C292.531 706 295.356 706 298.407 706C305 706 310.153 708.578 310.153 715.289C310.153 722 298 725.5 298 725.5L313 744" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 798C52.5311 798 57.9492 798 61 798C67.5932 798 72.1525 801.078 72.1525 807.289C72.1525 813.5 66.5 817 61 817C55.5 817 55 817 55 817L75 836" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M167 798H129M129 798L167 836M129 798V836" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	s: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M73.1667 254.867C73.1667 251.489 68.1667 246 61.5 246C54.8333 246 49.8333 250.644 49.8333 254.867C49.8333 267.956 74 260.778 74 274.711C74 281.467 64.8333 284 61.5 284C58.1667 284 49 281.889 49 273.867" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M154.167 251.867L141.5 246C141.5 246 129.833 250.644 129.833 254.867C129.833 267.956 154 260.778 154 274.711C154 281.467 141.5 284 141.5 284L129 277.867" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M233.333 249V259V254.867C233.333 251.489 228.333 246 221.667 246C215 246 210 250.644 210 254.867C210 267.956 234.167 260.778 234.167 274.711C234.167 281.467 225 284 221.667 284C218.333 284 209.167 280 209.167 273.867V279.5V270" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M314.167 246H298.667C293.42 246 289.167 250.253 289.167 255.5V255.5C289.167 260.747 293.42 265 298.667 265H315.167V284H289.167" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.1624 368.5C54.5658 373.623 60.3885 377 67 377C77.4934 377 86 368.493 86 358H49C49 347.507 56.5066 339 67 339C74.0327 339 80.5 341.5 84.4581 348.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M167 339H150.5C145.253 339 141 343.253 141 348.5V348.5C141 353.747 145.253 358 150.5 358H157.5C162.747 358 167 362.253 167 367.5V367.5C167 372.747 162.747 377 157.5 377H141" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M248 339H222V358H248V377H222" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M87 432H62C54.8203 432 49 437.82 49 445V445C49 452.18 54.8203 458 62 458H73.1923M49 470H74.5C81.4036 470 87 464.404 87 457.5V457.5C87 450.596 81.4035 445 74.5 445H61.8846" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M172 432H142V443H172V443C172 457.912 159.912 470 145 470H142" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253 432H227L253 470H227" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M334 432H308V457L334 443V470H308" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M78.77 525H73.885C68.3622 525 63.885 529.477 63.885 535V553C63.885 558.523 59.4079 563 53.885 563H49" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157.77 534L146.77 525L134.77 534L159.77 552.5L146.77 563L133.77 552.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M243.048 533.177C243.048 533.177 240.04 525 229.27 525C218.5 525 215.492 533.177 215.492 533.177L243.77 554.747C243.77 554.747 240.04 563 229.27 563C218.5 563 214.77 554.747 214.77 554.747" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M298.77 550V555.5L310.27 563L321.77 555.5V549.5L300.048 536.5V531L310.27 525L320.492 531V535.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 649.5L49 656H75C75 628 49 646 49 618H75V623" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147.857 618L130 636H155L133.571 656" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M236 623V618H211L217 639L229 633L234.5 656H210V650.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M317 618C317 618 298 618 291 618C291 639 319 621.5 319 643.112C319 649 312.5 653.607 305.5 653.607C298.5 653.607 291 649.5 291 642.112" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 717V711H49V729H75V749H49V741.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M156 717V711H150C139.507 711 131 719.507 131 730V730H156V730C156 740.493 147.493 749 137 749H130V741.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M236 719V718C236 714.134 232.866 711 229 711H219C215.134 711 212 714.134 212 718V723C212 726.866 215.134 730 219 730H230C233.866 730 237 733.134 237 737V742C237 745.866 233.866 749 230 749H218C214.134 749 211 745.866 211 742V739.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	t: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M64 284V264.397V246H49H79" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M141 246H156V264.397V284H152H160M141 246H171V252M141 246V252" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M241.125 284V246M249.125 255H233" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M311.125 284V246M319.125 255H311.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M65.125 355H49M55.125 346V378C55.125 381.314 57.8113 384 61.125 384H61.625C64.6625 384 67.125 381.538 67.125 378.5V378.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129.125 377V346M141.125 370.5H135.875C132.147 370.5 129.125 373.522 129.125 377.25V377.25C129.125 380.978 132.147 384 135.875 384H146.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M217.125 357H208.125M208.125 346V376C208.125 380.418 211.707 384 216.125 384H221.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M301.125 384V365M301.125 365V346M301.125 365H319.125M301.125 365H283.125" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M58 446V446.667C58 469.5 70.5 484 95.3333 484M49 474L84.3333 458.667" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M165.737 484V464.125L160.935 458.372H157.333M174.14 458.024H169.578L164.776 452.272V446" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	u: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 246V264.397V269.644C49 277.244 53.6129 284 61.5806 284C69.5484 284 75 280.2 75 269.644V246V264.397" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 246V284H143V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185 246L185 271L198 284H211V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253 246V269C253 277.284 259.716 284 268 284H279V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 326V354.75C49 359.859 53.1414 364 58.25 364V364C63.3586 364 67.5 359.859 67.5 354.75V329.75C67.5 327.679 69.1789 326 71.25 326V326C73.3211 326 75 327.679 75 329.75V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 326V353C117 359.075 121.925 364 128 364H141M141 364V326M141 364H147" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M189 326V344.397V349.644C189 357.244 193.613 364 201.581 364C209.548 364 215 357.2 215 346.644M215 344.397V326V346.644M215 346.644V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M292 357.572C286 364.671 281 368.43 282.5 355.066C283.7 344.374 287.389 332.5 289 326.248C285.103 341 277.9 367.675 265.5 364C256 361.184 264.5 341.284 266.5 331.678C268.5 322.072 262 326.666 257 330.843" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 406.344V444.344L66 434.344M75 406.344V445.344" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 406.344V445.344L143 425.844V406.344V445.344" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185 406.344V444.344H191.5L211 419.844V406.344V444.344" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	v: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 246.156L63 284.156L77 246.001" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M119 246L128.226 280.268C129.55 285.187 136.522 285.207 137.875 280.296L147 246.156" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M189 246V284L216 246.844" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M258 246V284H264.595C269.318 284 273.515 280.984 275.021 276.507L285 246.844" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 341.811L57 363.311L71 326.155" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M113 326.156V364.156V364.156C125.703 364.156 136 353.859 136 341.156V326.156" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
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
<path d="M209 406L228.311 444V406L249.457 444V406" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M291.457 406V426L310.768 444V406V426L331.915 444V406" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82 486V524L65 506M65 506L49 524V486M65 506V486" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157 486V524M124 486V524M140 524V505" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.634 486V524M218.634 486V524L230.578 511.667M199 486V524L210.944 511.667" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M279.634 486V508C279.634 516.837 286.798 524 295.634 524V524V486V507C295.634 516.389 303.245 524 312.634 524V524V486" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82 566V604H65M49 566V604H65M65 604V585" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162 566L153.5 604C153.5 604 130.5 566 143 566C155.5 566 132.5 604 132.5 604L124 566" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M242 566L242 604L216.997 604V604C209.819 604 204 598.181 204 591.003L204 566M223 566L223 590" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	x: `<svg width="33" height="43" viewBox="0 0 33 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 40.5L30 2.5M30 40.5L3 2.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M49 284L65 262.448M65 262.448L81 284M65 262.448H49V246M65 262.448H81V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M146 262.289V246M123 246V262.289L146 275.711V292M123 275.711V292" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M188 283.5L194 271.224H203M203 260.448H194L188 246M203 260.448H212L217 246M203 260.448V271.224M217 283.5L212 271.224H203" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M259 284L269.4 265L259 246M284.6 284L275.8 265L285 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 334L62.5 349.2L76 334M49 371.415L62.5 358.554L76 372" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127.615 358.554L118 372L138 372L127.615 358.554Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127.615 349.2L118 334L138 334L127.615 349.2Z" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M180 372L203 353L180 334M212 372L191 353L212.5 334" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M258.5 371.049L282.5 335.049M286.5 368.049C286.5 368.049 283 378.004 277 366.549C271 355.095 271.882 353.049 265 340.049C258.118 327.049 254.5 339.049 254.5 339.049" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 452.061V444.061L73 422.061V414.061M73 452.061V444.061L49 422.061V414.061" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147 414.061V414.061C138.163 414.061 131 421.224 131 430.061V436.061C131 444.897 138.163 452.061 147 452.061V452.061M115 414.061V414.061C123.837 414.061 131 421.224 131 430.061V436.061C131 444.897 123.837 452.061 115 452.061V452.061" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M189 414.061L201.789 427.561M225 414.061L212.211 427.561M225 452.061L212.211 438.561M189 452.061L201.789 438.561" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	y: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M62 284V267M49 246L62 267M62 267L75 246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 284L135 264.278M117 246V264.278H135M135 264.278V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M193 284V267M177 255L193 267M193 267V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M252 284V267V246M235 246V259L242.5 266" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M311 284V265M294 246V255C294 260.523 298.477 265 304 265H311M311 265V246" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 326V345H66M66 345V364H49M66 345V326" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M108 326.001C108 326.001 108 329.501 108 334.001C108 338.501 111 342.001 115 342.001C119 342.001 125 338.501 125.5 326.001C125.5 339.501 127 363.001 113 364.001C107.387 364.402 107.051 359.811 109.5 357.001C113.16 352.802 125.606 347.498 129.5 346.001" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M171.5 326V336.75C171.5 341.306 175.194 345 179.75 345V345C184.306 345 188 341.306 188 336.75V326.033C188 326.015 188.015 326 188.033 326V326C188.051 326 188.066 326.015 188.066 326.033V345V355.717C188.066 360.292 184.357 364 179.783 364V364C175.209 364 171.5 360.292 171.5 355.717V355" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M230.066 326V337C230.066 341.418 233.647 345 238.066 345V345M247.066 326V337C247.066 341.418 243.484 345 239.066 345H238.066M238.066 345V364" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M289.066 326V341C289.066 345.418 292.647 349 297.066 349V349C301.484 349 305.066 345.418 305.066 341V329.25C305.066 327.455 306.521 326 308.316 326V326C310.111 326 311.566 327.455 311.566 329.25V357.148C311.566 360.932 308.498 364 304.713 364H289.066" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 444.025L62 425.025M75 406.025L62 425.025M49 406.025L62 425.025" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117 444.076L149 406.025V406.076M117 406.076V425.076H132.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M215.5 406.025L203.5 433.5M191 406.025L203.5 433.5M203.5 433.5L199.437 441.954C198.397 444.118 195.364 444.245 194.147 442.176L192 438.525" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M274.913 406.024V444.027V444.024M257.5 406.024V425.627L267.207 419.627" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.327 444.025L334.327 406.025L316.913 424.5L318.913 406.025" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
	z: `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="390" height="844" fill="#EEEEEE"/>
<path d="M75 284H49L75 246H49.4194" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M139.278 277.5L143 284H117L143 246H118.419L122.458 253" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M211 277.5V284H185V265H211V246H185V252.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M279 284H253V265H279V246H253" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82 364H61.5227C57.0061 364 54.8044 358.486 58.0789 355.375L79.9211 334.625C83.1956 331.514 80.9939 326 76.4773 326H56" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134.655 328L149.655 326L134.155 344C139.821 340.667 147.855 336.5 148.655 342.5C149.655 350 144.655 364 134.155 364C123.655 364 141.655 347 154.655 338.5" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M196.655 364H222.655M222.655 326H197.074M202.155 356L217.155 334" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M264.655 326H281.155C286.401 326 290.655 330.253 290.655 335.5V335.5C290.655 340.747 286.401 345 281.155 345H274.155C268.908 345 264.655 349.253 264.655 354.5V354.5C264.655 359.747 268.908 364 274.155 364H290.655" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 406H75V431L49 417V444H75" stroke="#191919" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
};
export const specialPaths = {
	question: `<path d="M14.3333 43C14.3333 43.5523 13.8855 44 13.3333 44M14.3333 43C14.3333 42.4477 13.8855 42 13.3333 42M14.3333 43H12.3333M13.3333 44C12.781 44 12.3333 43.5523 12.3333 43M13.3333 44V42M12.3333 43C12.3333 42.4477 12.781 42 13.3333 42M2.83325 13.5C2.83325 11 5.83325 3 13.3333 3C20.8333 3 24.8333 7 24.8333 13.5C24.8333 21 13.3333 21.5 13.3333 31" stroke="#FF0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
	plus: `<path d="M3 18.1395H32M17.5 3V34" stroke="#FF0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
	back: `<path d="M36.5 21.5H2.5M2.5 21.5L21.5 2.5M2.5 21.5L21.5 40.5" stroke="#FF0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
};
const letters = svgFilesToPaths(rawSvgFiles);
export default letters;
