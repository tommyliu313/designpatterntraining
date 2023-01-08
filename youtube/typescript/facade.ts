class PlumbingSystem{
    setPresure(v: number){}
    turnOn(){}
    turnOff(){}
}

class ElectricalSystem{
    setVoltage(v: number){}
    turnOn(){}
    turnOff(){}
}

class House{
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems(){
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPresure(500);
        this.plumbing.turnOn();

    }

    public shutDown(){
        this.plumbing.turnOff();
        this.electrical.turnOff();
    }
}