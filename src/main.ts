import App from "src/App.svelte";
import DocumentUtils from "src/lib/utils/document-utils";
import Settings from "src/lib/utils/settings";

const app = new App({
	target: document.body,
});

window.addEventListener("load", () => {
	DocumentUtils.toggleLightTheme(Settings.isLightTheme, false);
});

export default app;
