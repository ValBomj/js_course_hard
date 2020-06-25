'use strict';
const body = document.querySelector('body');

function DomElement(s = '.block', h = 100, w = 100, b = 'blue', f = 24, pos = 'absolute') {
  this.selector = s;
  this.height = h;
  this.width = w;
  this.bg = b;
  this.fontSize = f;
  this.position = pos;
  this.left = 0;
  this.top = 0;
}

DomElement.prototype.createElement = function() {
  const _this = this;
  const block = this.selector[0] === '.' ? document.createElement('div') : this.selector[0] === '#' ? document.createElement('p') : console.log('Элемент не создан');
  const blockSelector = this.selector.slice(1, this.selector.length);
  this.selector[0] === '.' ? block.className = blockSelector : this.selector[0] === '#' ? block.id = blockSelector : console.log('Элемент не создан');

  document.addEventListener('keydown', function(e) {
    console.log(e);
    if (e.keyCode === 37) {
      _this.left -= 10;
    } else if (e.keyCode === 38) {
      _this.top -= 10;
    } else if (e.keyCode === 39) {
      _this.left += 10;
    } else if (e.keyCode === 40) {
      _this.top += 10;
    };
    styles();
  })

  const styles = function () {
    block.style.cssText = 'height: ' + _this.height + 'px' + ';' + 
                  'width: ' + _this.width + 'px' + ';' +
                  'background: ' + _this.bg + ';' +
                  'font-size: ' + _this.fontSize + 'px' + ';' + 
                  'position: ' + _this.position + ';' +
                  'left: ' + _this.left + 'px' + ';' + 
                  'top: ' + _this.top + 'px' + ';' + 
                  'right: ' + _this.left + 'px' + ';' + 
                  'bottom: ' + _this.top + 'px' + ';';
                }
  styles();
  document.addEventListener("DOMContentLoaded", function() {
    body.appendChild(block);
  });

}


const domElement = new DomElement('.block', 100, 100, 'blue', 32, 'absolute');
domElement.createElement();