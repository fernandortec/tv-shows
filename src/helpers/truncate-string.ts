export function truncateString(wordToBeTruncated: string, length: number) {
	if (wordToBeTruncated.length > length) {
		return `${wordToBeTruncated.slice(0, length)}...`;
	}

	return wordToBeTruncated;
}
