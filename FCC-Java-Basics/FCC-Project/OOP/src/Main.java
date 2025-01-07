public class Main {
    public static void main(String[] args) {
        Car car = new Car("Tesla", "CyberCuck", "Brown", 4);
        Car car2 = new Car("Toyota", "Tacoma", "Red", 2);
        System.out.println(car2.getName());
        System.out.println(car.getName());
        System.out.println(car.getModel());
        System.out.println(car.getColor());
        System.out.println(car.getDoors());
    }
}