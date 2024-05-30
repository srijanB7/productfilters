export function debounce(cb, interval) {
    let timer;
    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            cb(...args);
        }, interval);
    };
}

