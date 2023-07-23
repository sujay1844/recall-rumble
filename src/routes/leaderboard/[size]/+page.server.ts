export async function load({params}) {
	const size = params.size;
	return {
		entries: [
			{ name: 'Alice', time: 123 },
			{ name: 'Bob', time: 456}
		]
	}
}