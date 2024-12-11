public class Main {
    public static void main(String[] args) {
        for (int i = 0; i <= 200; i++) { //sets initial integer, conditions, and iterates +1
            if (i == 100) {
                break; //will break out of loop, stop the loop
            }
            if (i >= 30 && i <= 50) {
                continue; //will skip while conditions are met
            }
            System.out.println("i = " + i);
        }
    }
}