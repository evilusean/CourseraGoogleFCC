public class Main {
    public static void main(String[] args) {
    int number = 0;

        while (number<= 10) { //'while loop' will execute code until condition is true
            number++;
            System.out.println(number);
        }
        do { //'do while loop' will do once, even if the while condition is false
            number++;
            System.out.println(number);
        } while (number <= 1);
    }
}