export default (
    element: HTMLElement,
    event: string,
    handler: EventListenerOrEventListenerObject
) => {
    const onEvent = (event: Event) => {
        if (typeof handler === 'function') {
            handler(event);
        }

        event.target.removeEventListener(event.type, onEvent);
    };

    element.addEventListener(event, onEvent);
};
