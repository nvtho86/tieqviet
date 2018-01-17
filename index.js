var input = "Trăm năm trong cõi người ta \n Chữ tài chữ mệnh khéo là ghét nhau \n Trải qua một cuộc bể dâu \n Những điều trông thấy mà đau dạ dày \n Ta đi trên trái đất này \n Bốn phương vô sản dạ dày đều đau\n Lớp cha trước, lớp con sau \n Đã thành đồng chí, cùng đau dạ dày"; 
// variableABC.replace('T', 'D')
const maps = [
	['k(h|H)', 'x'],
	['K(h|H)', 'X'],
	['c(?!(h|H))|q', 'k'],
	['C(?!(h|H))|Q', 'K'],
	['t(r|R)|c(h|H)', 'c'],
	['T(r|R)|C(h|H)', 'C'],
	['d|g(i|I)|r', 'z'],
	['D|G(i|I)|R', 'Z'],
	['g(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'z$1'],
	['G(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'Z$1'],
	['đ', 'd'],
	['Đ', 'D'],
	['p(h|H)', 'f'],
	['P(h|H)', 'F'],
	['n(g|G)(h|H)?', 'q'],
	['N(g|G)(h|H)?', 'Q'],
	['(g|G)(h|H)', '$1'],
	['t(h|H)', 'w'],
	['T(h|H)', 'W'],
	['(n|N)(h|H)', '$1\'']
];



	 maps.reduce((seed, map) => {
		input = input.replace(new RegExp(map[0], 'g'), map[1]);
		return input;
	}, input);
console.log(input);