# Usar plantillas — ejercicio 16.4 (Astro)

Aquí el foco era sacar la maquetación repetida a un **layout** y reutilizarlo en varias páginas.

## Qué hace

- Layout común (`DefaultLayout.astro`) con cabecera / navegación
- Varias páginas que lo usan: inicio, galería, about y contacto
- La galería sigue mostrando los animes desde `db.json`, con el diálogo de imagen al hacer clic

## Cómo probarlo

```sh
pnpm install
pnpm dev
```

```sh
pnpm build
pnpm preview
```

Demo: https://astro-16-4-plantillas.netlify.app

## Cómo lo construí

- Creé `src/layouts/DefaultLayout.astro` con el HTML base, el menú y un `<slot />` para el contenido
- Las páginas (`index`, `galeria`, `about`, `contacto`) envuelven su contenido con ese layout
- El título se puede pasar con un slot (`slot="titulo"`)
- Mantuve `Post`, `ImageDialog` y `initImageDialog` de la práctica anterior

## Cómo comprobarlo

Sin tests. Navego entre las rutas del menú, miro que el layout se repita y que en la galería el diálogo de imagen siga funcionando.

---

Moussi Joelle · [github.com/moussijoelle](https://github.com/moussijoelle)
