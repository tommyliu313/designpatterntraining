var HappyState = /** @class */ (function () {
    function HappyState() {
    }
    HappyState.prototype.think = function () {
        return 'I am happy😀';
    };
    return HappyState;
}());
var SadState = /** @class */ (function () {
    function SadState() {
    }
    SadState.prototype.think = function () {
        return 'I am sad 🙁';
    };
    return SadState;
}());
var Human = /** @class */ (function () {
    function Human() {
        this.state = new HappyState();
    }
    Human.prototype.think = function () {
        return this.state.think();
    };
    Human.prototype.changeState = function (state) {
        this.state = state;
    };
    return Human;
}());
