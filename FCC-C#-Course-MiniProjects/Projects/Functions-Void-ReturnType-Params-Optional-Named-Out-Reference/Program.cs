using System;
using System.Runtime.InteropServices;

namespace Functions
{
    class Program
    {

        static void Main(string[] args)
        {
            //FunctionExample();
            //VoidExample();
            //ReturnExample();
            //ParametersExample();
            //optionalParamsExample();
            namedParamsExample();
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
        //Main Parameters Return Example
        static void ParametersExample() 
        {
            Console.WriteLine("Enter two numbers: ");
            int a = ReadInt("Enter First Number"); //user input for the first number
            int b = ReadInt("Enter Second Number"); //user input for the second number
            //will call the Add function below and display the sum of the two numbers, notice the 'Add(a, b)
            Console.WriteLine("The sum of " + a + " and " + b + " is " + Add(a, b));
            string name = ReadString("Enter your name"); //will get the user input for the name
            int age = ReadInt("Enter your age"); //will get the user input for the age
            Console.WriteLine(UserDetails(name, age)); //will display the name and age
            Console.ReadLine();
        }
        static int ReadInt(string message) //will get the user input for the numbers
        {
            Console.WriteLine($"{message} : "); // will get the message as parameters from the ParametersExample function
            return Convert.ToInt32(Console.ReadLine()); //returns the int from the user input string
        }
        static string ReadString(string message) //will get the user input for the strings
        {
            Console.WriteLine($"{message} : "); // will get the message as parameters from the ParametersExample function
            return Console.ReadLine(); //returns the string from the user input string
        }
        // this is a function that takes two int parameters and returns the int sum of them
        static int Add(int a, int b = 10) // 'b = 10' is the default value for the second parameter
        {
            return a + b;
        }
        // this is a function that takes two int parameters and returns the int product of them
        static int Multiply(int a, [Optional] int b) // 'Optional' is used to make the second parameter optional(default value)
        {
            return a * b;
        }
        static string UserDetails (string name, int age) //this is a function that takes a string and an int and returns a string
        {
            return "Hello, my name is " + name + ". I am " + age + " years old.";
        }

        static void optionalParamsExample() 
        {
            int result = Add(5);
            Console.WriteLine(result);
        }
        
        static void namedParamsExample()
        {
            
        }
        
    }
}