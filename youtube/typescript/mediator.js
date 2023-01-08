var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.land = function () { };
    return Airplane;
}());
var Runway = /** @class */ (function () {
    function Runway() {
    }
    return Runway;
}());
var Tower = /** @class */ (function () {
    function Tower() {
    }
    Tower.prototype.clearForLanding = function (runway, plane) {
        if (runway.clear) {
            console.log("Plane " + plane + " is clear for landing");
        }
    };
    return Tower;
}());
