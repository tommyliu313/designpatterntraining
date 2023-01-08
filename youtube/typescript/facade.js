var PlumbingSystem = /** @class */ (function () {
    function PlumbingSystem() {
    }
    PlumbingSystem.prototype.setPresure = function (v) { };
    PlumbingSystem.prototype.turnOn = function () { };
    PlumbingSystem.prototype.turnOff = function () { };
    return PlumbingSystem;
}());
var ElectricalSystem = /** @class */ (function () {
    function ElectricalSystem() {
    }
    ElectricalSystem.prototype.setVoltage = function (v) { };
    ElectricalSystem.prototype.turnOn = function () { };
    ElectricalSystem.prototype.turnOff = function () { };
    return ElectricalSystem;
}());
var House = /** @class */ (function () {
    function House() {
        this.plumbing = new PlumbingSystem();
        this.electrical = new ElectricalSystem();
    }
    House.prototype.turnOnSystems = function () {
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPresure(500);
        this.plumbing.turnOn();
    };
    House.prototype.shutDown = function () {
        this.plumbing.turnOff();
        this.electrical.turnOff();
    };
    return House;
}());
