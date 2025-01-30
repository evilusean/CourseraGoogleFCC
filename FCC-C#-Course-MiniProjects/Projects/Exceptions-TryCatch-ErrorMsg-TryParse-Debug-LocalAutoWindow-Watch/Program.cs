namespace Exceptions
{
    class Program
    {

        static void Main(string[] args)
        {
            //ExceptionsExample();
            //TryCatchExample();
            PrintErrorExample();
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
    }
}