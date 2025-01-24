namespace Functions
{
    class Program
    {
        static void Main(string[] args)
        {
            //FunctionExample();
            VoidExample();
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
    }
}