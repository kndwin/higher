export const useTracker = () => {
	const track = (name, data) => {
		if (typeof window !== 'undefined') {
			window?.umami?.track(name, data);
		}
	}
	return { track }
}
