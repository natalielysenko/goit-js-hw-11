import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

let lightbox = null;

export function showLoader() {
  loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  loader.classList.add('visually-hidden');
}
export function clearGallery() {
  gallery.innerHTML = '';
}

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" title=""/></a>
    <div class="container">
      <p><b>Likes</b><br>${likes}</p>
      <p><b>Views</b><br>${views}</p>
      <p><b>Comments</b><br>${comments}</p>
      <p><b>Downloads</b><br>${downloads}</p>
    </div>
</li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}