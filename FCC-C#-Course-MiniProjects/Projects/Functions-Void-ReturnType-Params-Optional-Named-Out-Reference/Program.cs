using System;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

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
            //OptionalParamsExample();
            //NamedParamsExample();
            //OutParamsExample();
            ReferenceParamsExample();
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

        static void OptionalParamsExample() 
        {
            int result = Add(5);
            Console.WriteLine(result);
        }
        
        static void NamedParamsExample()
        {
            string nameInput = "Sean";
            int ageInput = 25;
            string addressInput = "Sorry, eh, CA";
            //notice how the parameters are named and out of order but still work, this is the power of named parameters
            PrintDetails(address: addressInput,
                        name: nameInput, 
                         age: ageInput);
        }
        //this is a function that takes three named parameters out of order and prints them
        static void PrintDetails (string name, int age, string address)
        {
            Console.WriteLine("Name: " + name);
            Console.WriteLine("Age: " + age);
            Console.WriteLine("Address: " + address);
        }

        static void OutParamsExample () {
            int num = 0; //initialize num with 0
            bool success = ScopeTest(out num); //will run it through the function below and change it to 5, new keyword 'out' is used to change the value of num
            Console.WriteLine(num); //will print the new num
            Console.WriteLine(success); //will print the success boolean

            Console.WriteLine("Enter a name: "); //will ask the user for a name
            string search = Console.ReadLine(); //will get the user input, use it for search
            List<string> names = new List<string> { "Sean", "John", "Doe" }; //initialize a list of names
            int index = -1; //initialize the index with -1
            Console.WriteLine(names.IndexOf("John")); //will print the index of the string in the list, built in method
            bool found = FindInList(search, names, out index); //will run search names list through the function below and find the index of the string
            Console.WriteLine(found ? "Found" : "Not Found"); //will print if the string is found(true) or not(false)
            Console.WriteLine(index); //will print the index of the string, if found
            if (found) //if the string is found
            {
                Console.WriteLine($"Found {search} at index: {index}"); //will print the index of the string
            }
            else //if the string is not found
            {
                Console.WriteLine($"{search} Not Found"); //will print that the string is not found
            }
        }
        static bool ScopeTest(out int num) //the out keyword will return 2 values, a boolean and change an int
        {
            num = 5; //will change the value of num to 5
            return true; // will return true,
        }
        
        static bool FindInList(string s, List<string> list, out int index) //will find a string in a list and return a boolean and the index of the string
        {
            index = -1; //will find the index of the string in the list
            for (int i = 0; i < list.Count; i++) //will loop through the list
            {
                if (list[i].ToLower().Equals(s.ToLower())) //will check if the string is in the list
                {
                    index = i; //will return the index of the string
                    break; //will break the loop
                }
            }
            return index > -1; // will be true if the index is greater than -1(found something)
        }

        static void ReferenceParamsExample() {
            int num = 10;
            string name = "Sean";
            Assign(ref num, ref name);
            Console.WriteLine(num);
            Console.WriteLine(name);
        }
        static void Assign(ref int num, ref string name) // you can output multiple values using the 'ref' keyword
        { // pass by reference, will change the value of num and name by reference
            num = 20;
            name = "Shawn";
        }
    }
}