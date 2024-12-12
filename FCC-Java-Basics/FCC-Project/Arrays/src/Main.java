public class Main {
    public static void main(String[] args) {
        //declare an array with type and '[]' name and '{}' values
        int[] numbers = {12, 15, 60, 100, 200, 30}; //array of int
        String[] friends = {"Sean", "Shawn", "Shaun", "LeSeanDa"}; //array of strings
        for (int number: numbers) { // for each loop. each number in numbers, print
            System.out.println(number);
        }
        for (int i = 0; i < numbers.length; i++) {//for each loop, '.length' methid
            System.out.println(numbers[i]);
        }
        System.out.println(numbers[0]); //0 based indexing
        for (String friend : friends) { //for each loop
            System.out.println(friend);
        }
    }
}