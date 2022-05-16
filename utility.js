let utility = (function() {
    //防抖
    function debounce(fn, wait) {
        let timer = null;
        return function() {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.apply(this, arguments);
            }, wait);
        }
    }
    //节流
    function throttle(fn, wait) {
        let timer = null;
        return function() {
            timer = setTimeout(() => {
                if (timer) {
                    return;
                }
                fn.apply(this, arguments);
                timer = null;
            }, wait);
        }
    }
    //offsetLeft
    function offsetLeft(currElement) {
        let left = currElement.offsetLeft;
        while (currElement.offsetParent !== null) {
            currElement = currElement.offsetParent;
            left += currElement.offsetLeft;
            left += parseFloat(getComputedStyle(currElement, null).borderLeft);
        }
        return left;
    }
    //offsetTop
    function offsetTop(currElement) {
        let top = currElement.offsetTop;
        while (currElement.offsetParent !== null) {
            currElement = currElement.offsetParent;
            top += currElement.offsetTop;
            top += parseFloat(getComputedStyle(currElement, null).borderTop);
        }
        return top;
    }
    return {
        debounce,
        throttle,
        offsetLeft,
        offsetTop
    }
})();