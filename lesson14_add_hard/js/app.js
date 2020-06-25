'use strict';
const body = document.querySelector('body');

const DomElement = function(s, h, w, b, f, pos) {
  this.selector = s;
  this.height = h;
  this.width = w;
  this.bg = b;
  this.fontSize = f;
  this.position = pos;
  this.left = 0;
  this.top = 0;
  this.createElement = function() {
    if (this.selector[0] === '.') {
      const _this = this;
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
      const div = document.createElement('div');
      div.className = this.selector.slice(1, this.selector.length);
      const styles = function () {
        div.style.cssText = 'height: ' + _this.height + 'px' + ';' + 
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
        body.appendChild(div);
      });
      body.appendChild(div);
    } else if (this.selector[0] === '#') {
      const p = document.createElement('p');
      p.id = this.selector.slice(1, this.selector.length);
      p.style.cssText = 'height: ' + this.height + 'px' + ';' + 
                  'width: ' + this.width + 'px' + ';' +
                  'background: ' + this.bg + ';' +
                  'font-size: ' + this.fontSize + 'px' + ';';
      p.textContent = this.selector.slice(1, this.selector.length);
      document.addEventListener("DOMContentLoaded", function() {
        body.appendChild(p);
      });
      
    }
  }
  if (this.selector) {
    this.createElement();
  }
}

const domElement = new DomElement('.block', 100, 100, 'blue', 32, 'absolute');