export default function sw() {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swURL)
      .then(() => console.log("Service worker is registered."))
      .catch((error) =>
        console.log("Error with registering service worker.", error)
      );
  }
}
