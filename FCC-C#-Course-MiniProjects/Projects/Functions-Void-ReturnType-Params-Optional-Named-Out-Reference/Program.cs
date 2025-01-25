using System;

namespace Functions
{
    class Program
    {

        static void Main(string[] args)
        {
            //FunctionExample();
            //VoidExample();
            //ReturnExample();
            ParametersExample();
        }
        static void FunctionExample()
        {
            // Call the function with named parameters
            Console.WriteLine("This is a FuncSean example");
            Console.ReadLine();
        }

        static void VoidExample()
        {
            // void functions do not return a value
            Console.WriteLine("This is a Void example");
            int[] numbers = { 1, 2, 3, 4, 5 }; //even though this is an array, it just prints it, not returning it
            foreach (int number in numbers)//this is still a void, it just prints the numbers
            {
                Console.WriteLine(number);
            }
        }
        static string returnName() // this is a return function, it returns a string
        {
            return "Sean";
        }

        static int returnAge() // this is a return function, it returns an int
        {
            return 25;
        }

        static int ReadNumberFromConsole() //will get numbers from the user and return them
        {
            Console.WriteLine("Enter a number: ");
            return Convert.ToInt32(Console.ReadLine());
        }

        static int[] CreateArray() // creates an array without asking for user input that gets returned
        {
            /*int[] numbers = new int[] // initialize the array with values
            {
                0, 1, 2
            };
            return numbers; // return the array of 3 numbers */
            
            //turn ALL of the above into one liner
            return new int[] { 0, 1, 2 }; // will return an array of 3 numbers
        }

        // combining the two return functions into a single function
        static void ReturnExample() //the Main return function for examples, will call the other return functions
        {
            string name = returnName();
            int age = returnAge();
            Console.WriteLine("Name: " + name + ". Age: " + age);

            // use return functions to return arrays
            int[] numbers = new int[3]; // will create an array of 3 numbers using the for loop that gets them from a return

            for (int i = 0; i < numbers.Length; i++) // for loop to get user inputs
            {
                numbers[i] = ReadNumberFromConsole(); // found below, will ask user for inputs and give them to this func
            }

            //will display all the numbers user input from the return function
            foreach (int number in numbers) // will print the numbers
            {
                Console.WriteLine(number);
            }

            // Will display the numbers from the return function without user input
            int[] newNumbers = CreateArray(); // will get inputs without user input
            foreach (int number in newNumbers) // will print the numbers
            {
                Console.WriteLine(number);
            }
        }
        static void ParametersExample() 
        {
            Console.WriteLine();
        }
    }
}