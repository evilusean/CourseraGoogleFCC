class Program
{
    static void Main(string[] args)
    {
        for (int i = 1; i <= 15; i++)
        {
            bool threeDiv = i % 3 == 0;
            bool fiveDiv = i % 5 == 0;
            if (threeDiv && fiveDiv)
            {
                Console.WriteLine("FizzBuzz");
            }
            else if (threeDiv)
            {
                Console.WriteLine("Fizz");
            }
            else if (fiveDiv)
            {
                Console.WriteLine("Buzz");
            }
            else
            {
                Console.WriteLine(i);
            }
        }
    }
}