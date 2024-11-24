public class Main {
    public static void main(String[] args) {
        float num1 = 5;
        int num2 = 3;
        int myNumber = 0;
        myNumber+=1;
        myNumber++;

        System.out.println(num1 + num2);
        System.out.println(num1 - num2);
        System.out.println(num1 * num2);
        System.out.println(num1 / num2); //variable will need to be float or double, defaults to int
        System.out.println(num1 % num2);
        System.out.println((num1 + num2) * 6); //order of operations PEMDAS
        System.out.println(myNumber++); // prints and increments (will print number then increment)
        System.out.println(++myNumber); //increments and prints (will increment then print number)



    }
}