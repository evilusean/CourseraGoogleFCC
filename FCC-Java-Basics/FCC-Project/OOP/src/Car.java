public class Car { //each car object has 4 values
    private String name;
    private String model;
    private String color;
    private int doors;

    public Car(String name, String model, String color, int doors) { //constructor
        this.name = name;
        this.model = model;
        this.color = color;
        this.doors = doors;
    }

    public Car() {
        this("Name", "Model", "Color", 0); //this will allow you to input default values, will still call on the constructor above
    }

    public Car(String name) {
        this(name, "Model", "Color", 0); //will provide default values except for name
    }
    public Car(String name, String model) {
        this(name, model, "Color", 0); //will provide default values except for name and model
    }
    public Car(String name, String model, String color) {
        this(name, model, color, 0); //will provide default values except for name, model, color
    }

    public void move () {
        System.out.println("The car " + this.name + " is moving.");
    }
    public void stop () {
        System.out.println("The car " + this.name + " has stopped.");
    }

    public String getName() { //getter
        return name;
    }

    public void setName(String name) { //setter
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors) {
        this.doors = doors;
    }
}
