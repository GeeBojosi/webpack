import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const img = document.createElement('img');
  element.classList.add('element')
  img.setAttribute('src', './imgs/lidye-1Shk_PkNkNw-unsplash-min.jpg');
  img.style.width = "2.5rem"
  console.log(img)
// lodash now included locally in the script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());