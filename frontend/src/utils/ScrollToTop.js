import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const location = useLocation()
	useEffect(() => {
		setTimeout(() => {
			// Check if the location.pathname includes an anchor
			const hasAnchor = location.hash

			if (hasAnchor) {
				// Extract the anchor from the pathname
				const anchor = location.hash.split('#')[1];

				// Find the element with the corresponding id and scroll to it
				const targetElement = document.getElementById(anchor);

				if (targetElement) {
					targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			} else {
				// If there's no anchor in the pathname, scroll to the top
				if (location.pathname !== '/')
					window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}, 300)
	}, [location]);

	return null;
}
