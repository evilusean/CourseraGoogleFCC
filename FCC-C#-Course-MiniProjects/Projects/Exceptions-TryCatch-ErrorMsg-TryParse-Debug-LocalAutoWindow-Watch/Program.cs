namespace Exceptions
{
    class Program
    {

        static void Main(string[] args)
        {
            //ExceptionsExample();
            //TryCatchExample();
            //PrintErrorExample();
            //CustomTryParse();
            //DebuggingExample();
            //LocalAutoWindowExample();
            //WatchWindowExample();
            FixLogicError();
        }
        static void ExceptionsExample()
        {
            Console.Write("Enter a number :"); //enter in a wrong format or too large number, not much here
            int num = Convert.ToInt32(Console.ReadLine());
        }
        static void TryCatchExample()
        { // wrapping your code in a try catch block will allow it to continue, even if an exception is raised
            bool looping = true; // best practice for scope is to wrap it in a while loop, until user entered a correct num
            while (looping) {//while looping is true, keep asking for a number
                try 
                {
                    Console.Write("Enter a number :"); 
                    int num = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine(num);

                    looping = false;//add this so that it doesn't create an infinite loop
                }
                catch (OverflowException) 
                {
                    Console.WriteLine("Please enter a number less than 2 billion.");
                }
                catch (FormatException) //will throw an exception if input data is the wrong format
                {
                    Console.WriteLine("Please only enter numbers!");
                }
                catch (Exception) //this is a general exception, will be thrown if the last 2 aren't
                {
                    Console.WriteLine("Something has went wrong!"); 
                    // no matter what exception, will always print, all exceptions, with no exception
                }
            }
        }
        static void PrintErrorExample() //how to output different messages to catch block
        {
            bool looping = true; // best practice for scope is to wrap it in a while loop, until user entered a correct num
            while (looping) {//while looping is true, keep asking for a number
                try 
                {
                    Console.Write("Enter a number :"); 
                    int num = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine(num);

                    looping = false;//add this so that it doesn't create an infinite loop
                }
                catch (Exception e) //added a new parameter 'e', which allows us to do more with the exception
                {
                    Console.WriteLine($"Error: {e.Message}"); //will print error message depending on the exception
                }
            }
        }
        static void CustomTryParse()
        {
            /*
            Create an int and try convert any string to an int
            notice the error, write a Try... catch handler around it
            Catch the error and output the erro message
            */
            /* first method
            bool success = false;
            try 
            {
                Console.Write("Enter a number: ");
                int num = Convert.ToInt32(Console.ReadLine());
                success = true;
            }
            catch (FormatException e)
            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine(success ? "Success." : "You Fail.") */
            Console.Write("Enter a number: ");
            string input = Console.ReadLine();
            if (CustomTryParse(input, out int result))
            {
                Console.WriteLine($"Success. Parsed number: {result}");
            }
            else
            {
                Console.WriteLine("Failed.");
            }
        }
        static bool CustomTryParse(string input, out int result)
        {
            result = -1;
            try
            {
                result = Convert.ToInt32(input); //if it can convert it, it will
                return true;
            }
            catch (Exception) //if it raises exception, return false
            {
                result = -1;
                return false;
            }
        }
        static void DebuggingExample()
        {
            // this code is intentionally buggy so you can debug it, add breakpoints and go over line by line
            int age = 35;
            if (age > 18) //this is true, so it will automatically end the code, first hit skips rest of code
            {
                Console.WriteLine("18+"); 
            }
            else if (age > 30) //this is also true, but the code already ended on >18
            {
                Console.WriteLine("30+");
            }
        }
        static void LocalAutoWindowExample()
        {
            //more debugging 'F5' to start debugging, 'locals' are your local variables and their values
            //'autos' are the functions/parameters you need to be displayed, based on the section code you are currently on
            //basically just displayed variables in debugging mode, which I can't demonstrate here, since it's a mode
        }
        static void WatchWindowExample()
        {
            //you can add an item to watch, if you have a lot of variables in your code, you can look at a specific one 
            //(F5) Debug mode -> doubleclick + right click an item -> 'Add Watch'
            //after you are in the window, you can just type it into the watch window(the variable to watch or conditions)
            //watchlists aren't just for glowies
        }
        static void FixLogicError()
        {
            //yet another walkthrough of debugging - goes through intentionally bad code to fix errors
        }
    }   
}