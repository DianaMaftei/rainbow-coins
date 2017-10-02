import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    element.setAttribute('class', 'demo-word')

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', 'from', 'demo.js'], ' ');

    return element;
}

document.body.appendChild(component());