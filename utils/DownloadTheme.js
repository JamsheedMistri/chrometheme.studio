export function downloadTheme(colors) {
	fetch('/api/generate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(colors),
	})
		.then(response => response.blob())
		.then(blob => {
			// Hacky method to download from API
			// Credit: https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e
			const url = window.URL.createObjectURL(new Blob([blob]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'chrome-theme.zip');
			document.body.appendChild(link);
			link.click();
			link.parentNode.removeChild(link);
		})
}
