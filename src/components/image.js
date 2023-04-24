import Perfil from '../img/perfil.jpg';

class Image {
  insertImage() {
    const img = document.createElement('img');

    img.src = Perfil;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;
