public class Car {
    private String name;
    private String model;
    private String color;
    private int doors;

    public Car(String name, String model, String color, int doors) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.doors = doors;
    }
    public void move () {
        System.out.println("The car " + this.name + " is moving.");
    }
    public void stop () {
        System.out.println("The car " + this.name + " has stopped.");
    }
}
