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
            StringEmpty();
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
            if (input != string.Empty) {// easier to read/understand same as above
                Console.WriteLine($"Hello, {input}!");
        } else {
                Console.WriteLine("You did not enter a name.");
            }
}
    }
}