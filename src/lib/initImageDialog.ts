export function initImageDialog() {
  const dialog = document.getElementById('image-dialog') as HTMLDialogElement | null
  const image = document.getElementById('image-dialog-img') as HTMLImageElement | null
  const title = document.getElementById('image-dialog-title')

  if (!dialog || !image || !title) return

  document.addEventListener('click', (event) => {
    const trigger = (event.target as HTMLElement).closest('[data-image-trigger]')
    if (!trigger) return

    event.preventDefault()

    const src = trigger.getAttribute('data-image')
    const label = trigger.getAttribute('data-title')
    if (!src || !label) return

    image.src = src
    image.alt = label
    title.textContent = label

    queueMicrotask(() => {
      if (!dialog.open) dialog.showModal()
    })
  })

  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return
    dialog.close()
  })
}
