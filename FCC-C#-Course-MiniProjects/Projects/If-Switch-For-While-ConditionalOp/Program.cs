// Boilerplate for for loops
namespace CourseraGoogleFCC
{
    class Program
    {
        //last examples were very disordered, seperating each one into it's own part
        //then just calling from the main function, I don't want a new project 
        //for each example, so I'll just add them all to the same project
        static void Main(string[] args)
        {
            IfStatementExample();
        }

        // Boilerplate for if statements
        static void IfStatementExample()
        {
            System.Console.Write("Enter your age: ");
            string ageInput = Console.ReadLine(); //will be read in as a string
            //store variables correctly, to store a string to int, convert the string
            int userAge = Convert.ToInt32(ageInput);
            Console.WriteLine("You are " + userAge + " years old.");

            if (userAge <= 0 || userAge > 120) {
                Console.WriteLine("Invalid age.");
            }
            else 
            {
            if (userAge >= 65) {
                Console.WriteLine("You are a senior citizen.");
            }
            else if (userAge >= 18) {
                Console.WriteLine("You are an adult.");
            } else if (userAge >= 13 && userAge <= 17) {
                Console.WriteLine("You are a teenager.");
            } else {
                Console.WriteLine("You are a child.");
            }
            }
        }

        // Boilerplate for switch statements
        static void SwitchStatementExample()
        {
            // Add your switch statement code here
        }

        // Boilerplate for for loops
        static void ForLoopExample()
        {
            // Add your for loop code here
        }

        // Boilerplate for while loops
        static void WhileLoopExample()
        {
            // Add your while loop code here
        }

        // Boilerplate for conditional operators
        static void ConditionalOperatorsExample()
        {
            // Add your conditional operators code here
        }
    }
}