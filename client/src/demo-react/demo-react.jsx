import React from 'react';
import { render } from 'react-dom';

class DemoR extends React.Component {
    render() {
        return <p> <span className="rr">Hello</span> from React demo!</p>;
    }
}

var element = document.createElement('div');
element.id = "app"
document.body.appendChild(element);

render(<DemoR />, element);


