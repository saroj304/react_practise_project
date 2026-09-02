

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.Children;

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement={
    type: 'a',
    props: {
        href: 'google.com',
        target: '_blank'
    },
    Children: 'click me to visit facebook'

}

const mainContainer=document.getElementById('root');
/**
 * show how element is inserted into container
 */
customRender(reactElement,mainContainer);