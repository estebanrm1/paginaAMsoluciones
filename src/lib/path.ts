/** Ruta limpia de la página actual: sin ".html", sin "/index" final y sin barra final ("/" para la home). */
export const cleanPath = (pathname: string) => pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
