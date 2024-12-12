public class Main {
    public static void main(String[] args) {
        //declare an array with type and '[]' name and '{}' values
        int[] numbers = {12, 15, 60, 100, 200, 30}; //array of int
        String[] friends = {"Sean", "Shawn", "Shaun", "LeSeanDa"}; //array of strings
        int[] numbers2 = new int[3]; //allows you to define a new array with set number of elements
        numbers2[0] = 3; //manually input numbers into the array
        numbers2[1] = 6;
        numbers2[2] = 9;
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