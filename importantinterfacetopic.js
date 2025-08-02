var Istagram = /** @class */ (function () {
    function Istagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Istagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube() {
    }
    Youtube.prototype.storyCount = function () {
        return 8;
    };
    return Youtube;
}());
