// @errors: 2345
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {
            // ...
        } else if (easing === 'ease-out') {
        } else if (easing === 'ease-in-out') {
        } else {
            // 하지만 누군가가 타입을 무시하게 된다면
            // 이곳에 도달하게 될 수 있습니다.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in');
// button.animate(0, 0, 'uneasy');
