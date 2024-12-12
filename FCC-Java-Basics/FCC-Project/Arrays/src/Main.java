public class Main {
    // The getMax method should be outside of the main method
    public static int getMax(int[] numbers3) {
        int max = numbers3[0]; // Use numbers3 instead of numbers
        for (int number : numbers3) {
            if (number > max) {
                max = number;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        // Declare an array with type and '[]' name and '{}' values
        int[] numbers = {12, 15, 60, 100, 200, 30}; // array of int
        String[] friends = {"Sean", "Shawn", "Shaun", "LeSeanDa"}; // array of strings
        int[] numbers2 = new int[3]; // allows you to define a new array with set number of elements
        numbers2[0] = 3; // manually input numbers into the array
        numbers2[1] = 6;
        numbers2[2] = 9;

        int maxFound = getMax(numbers);
        System.out.println("Max number: " + maxFound);

        // For each loop. Each number in numbers, print
        System.out.println("Numbers using enhanced for loop:");
        for (int number : numbers) {
            System.out.println(number);
        }

        // Traditional for loop with index
        System.out.println("Numbers using traditional for loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

        // Accessing first element
        System.out.println("First number: " + numbers[0]); // 0-based indexing

        // For each loop with friends
        System.out.println("Friends:");
        for (String friend : friends) {
            System.out.println(friend);
        }
    }
}