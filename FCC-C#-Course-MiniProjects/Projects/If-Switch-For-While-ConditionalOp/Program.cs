namespace CourseraGoogleFCC
{
    class Program
    {
        //last examples were very disordered, seperating each one into it's own part
        //then just calling from the main function, I don't want a new project 
        //for each example, so I'll just add them all to the same project
        static void Main(string[] args)
        {
            //IfStatementExample();
            //SwitchStatementExample();
            //ForLoopExample();
            //WhileLoopExample();
            ConditionalOperatorsExample();
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
            Console.Write("Enter a day of the week(#):");
            int day = Convert.ToInt32(Console.ReadLine());
            switch (day)
            {
                case 1:
                    Console.WriteLine("Monday");
                    break;
                case 2:
                    Console.WriteLine("Tuesday");
                    break;
                case 3:
                    Console.WriteLine("Wednesday");
                    break;
                case 4:
                    Console.WriteLine("Thursday");
                    break;
                case 5:
                    Console.WriteLine("Friday");
                    break;
                case 6:
                    Console.WriteLine("Saturday");
                    break;
                case 7:
                    Console.WriteLine("Sunday");
                    break;
                default:
                    Console.WriteLine("Invalid day");
                    break;
            }
        }

        // Boilerplate for 4 for loops
        static void ForLoopExample()
        {
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine(i);
            }
            //for loop with a different increment
            Console.Write("How many times do you want to loop?");
            int loop = Convert.ToInt32(Console.ReadLine());
            if (loop <= 0)
            {
                Console.WriteLine("Invalid number.");
                return;
            }
            else {
            for (int i = 0; i < loop; i++)
            {
                Console.WriteLine(i);
            }
            }
        }

        // Boilerplate for while loops
        static void WhileLoopExample()
        {
            int i = 0;
            while (i<10)
            {
                Console.WriteLine(i);
                i++;
            }

        }

        // Boilerplate for conditional operators
        static void ConditionalOperatorsExample()
        {
            int ageTest = -1;
            //string result = ageTest >= 0 ? "Valid age" : "Invalid age";
            //Console.WriteLine(result);
            Console.WriteLine(ageTest >= 0 ? "Valid age" : "Invalid age");
        }
    }
}