public class Main {
    public static void main(String[] args) {
        sayHello("Sean", 33);
        sayHello("Shawn", 35);
        int max = getMax(10, 5); //assign the int from getMax to max with parameters 10 and 5
        System.out.println(max);
    }
    public static void sayHello(String name, int age) {
        System.out.println("Hello " + name + "! " + "You are " + age +" years old.");
    }
    public static int getMax(int num1, int num2) { //takes in 2 ints and returns an int
        if (num1 > num2) {
            return num1;
        } else {
            return num2; //after 'return' the code following will not run
            //System.out.println("This text will not display");
        }
    }
}


