export function addZeroToNumber(numberToAddZero: number): string {
	let num = `${numberToAddZero}`;

	while (num.length < 2) {
		num = `0${num}`;
	}
	return num;
}
