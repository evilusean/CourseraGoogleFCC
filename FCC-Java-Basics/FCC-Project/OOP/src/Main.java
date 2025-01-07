public class Main {
    public static void main(String[] args) {
        Car car = new Car("Tesla", "CyberCuck", "Brown", 4);
        Car car2 = new Car("Toyota", "Tacoma", "Red", 2);
        Car defaultcar = new Car();
        System.out.println(car2.getName()); //getters
        System.out.println(car.getName());
        System.out.println(car.getModel());
        System.out.println(car.getColor());
        System.out.println(car.getDoors());
        System.out.println(defaultcar.getName());

        car.setName("tesla"); //setters
        System.out.println(car.getName()); // tesla with a small 't' - PE(w) ratio of 193(Lol)
        car.move();
        car.stop();
    }
}