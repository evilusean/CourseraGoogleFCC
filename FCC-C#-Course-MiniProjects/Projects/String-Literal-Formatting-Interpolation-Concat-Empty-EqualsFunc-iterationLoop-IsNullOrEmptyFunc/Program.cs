using System.Threading;
namespace Strings
{
    class Program
    {

        static void Main(string[] args)
        {
            //VerbatimStringLiteral();
            //StringFormatting();
            //StringInterpolation();
            //StringConcatenation();
            //StringEmpty();
            //EqualsFunc();
            //StringIteration();
            StringIsNullOrEmpty();
        }

        static void VerbatimStringLiteral()
        {
            // '/' is the escape character, use 2 backslashes for a single backslash
            string path = "C:\\Program Files\\Microsoft";
            Console.WriteLine(path);
            // Verbatim string literal, use '@' to ignore escape characters
            string path2 = @"C:\Program Files\Microhard";
            Console.WriteLine(path2);
        }
        static void StringFormatting()
        {
            // String formatting
            string name = "Sean";
            int age = 30;
            Console.WriteLine("Hello, my name is " + name + " and I am " + age + " years old.");
            // String interpolation
            Console.WriteLine($"Hello, my name is {name} and I am {age} years old.");
            //same way as above, but with a format string, name replaces {0}, age replaces {1}
            Console.WriteLine("Hello, my name is {0} and I am {1} years old.", name, age);
        }

        static void StringInterpolation()
        {
            string name = "Sean";
            int age = 30;
            // String interpolation
            Console.WriteLine($"Hello, my name is {name} and I am {age} years old.");
        }
        static void StringConcatenation()
        {
            string firstName = "Sean";
            int age = 33;
            //yet another way to concatenate strings with ',' instead of '+'
            string test = string.Concat("Hello, my name is ", firstName, " and I am ", age, " years old.");
            Console.WriteLine(test);
        }
        static void StringEmpty()
        {
            string name = ""; //initialize with an empty string
            string name2 = string.Empty; //initialize with an empty string
            Console.WriteLine(string.IsNullOrEmpty(name)); //true
            Console.WriteLine(string.IsNullOrEmpty(name2)); //true

            Console.Write("Enter your name: ");
            string input = Console.ReadLine();

            //if (input != "") { //if string is empty, return false'!=' not equal, run code
            if (input != string.Empty) { // easier to read/understand same as above
                Console.WriteLine($"Hello, {input}!");
        } else {
                Console.WriteLine("You did not enter a name.");
            }
        }

        static void EqualsFunc()
        {
            string name = "Sean";
            string name2 = "Sean";
            string name3 = "Bob";
            Console.WriteLine(name == name2); //'==' comparison easy way to compare strings, true
            Console.WriteLine(name == name3); //false
            Console.WriteLine(name.Equals(name2)); //'.Equals()' new function to compare strings for equlas, true
            Console.WriteLine(name.Equals(name3)); //false

            Console.Write("Enter your name: ");
            string name4 = Console.ReadLine();
            
            //if (name != "")
            if (!name4.Equals("")) { //same as above commented out '!' = not operator compares to empty string ""
                Console.WriteLine($"Hello, {name4}!");
            }
            else {
                Console.WriteLine("You did not enter a name.");
            }
        }
        static void StringIteration() {
            string message = "C#? More like SEAn SHARP!";
            for (int i = 0; i < message.Length; i++) {
                Console.Write(message[i]); //Will write out each letter in the string
                Thread.Sleep(100); //typewriter aeffect, 1000MS = 1 second, 100MS=0.1 second
            }
        }
        static void StringIsNullOrEmpty() { //used to check if a string is valid before processing
            string name = "Sean";
            string name2 = "";
            string name3 = null;
            Console.WriteLine(string.IsNullOrEmpty(name)); //false
            Console.WriteLine(string.IsNullOrEmpty(name2)); //true
            Console.WriteLine(string.IsNullOrEmpty(name3)); //true

            if (!string.IsNullOrEmpty(name)) { //if name is not empty, run code
                Console.WriteLine($"Hello, {name}!");
            }
            else {
                Console.WriteLine("You did not enter a name.");
            }

            if (!string.IsNullOrEmpty(name2)) { //if name is not empty, run code
                Console.WriteLine($"Hello, {name}!");
            }
            else {
                Console.WriteLine("You did not enter a name.");
            }

            if (!string.IsNullOrEmpty(name3)) { //if name is not empty, run code
                Console.WriteLine($"Hello, {name}!");
            }
            else {
                Console.WriteLine("You did not enter a name.");
            }
        }
    }
}