namespace Exercise
{
    class Program
    {
        /*
        create a for loop from 1 to X(15)
        3 and 5 = FizzBuzz
        3 = Fizz
        5 = Buzz
        else = Number
        */
        static void Main(string[] args)
        {
            for (int i = 1; i <= 15; i++)
            {
                if (i % 3 == 0 && i % 5 == 0)
                {
                    System.Console.WriteLine("FizzBuzz");
                }
                else if (i % 3 == 0)
                {
                    System.Console.WriteLine("Fizz");
                }
                else if (i % 5 == 0)
                {
                    System.Console.WriteLine("Buzz");
                }
                else
                {
                    System.Console.WriteLine(i);
                }
            }
        }
    }
}