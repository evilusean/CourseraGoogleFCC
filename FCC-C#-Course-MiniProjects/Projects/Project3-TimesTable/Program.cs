namespace Exercise
{
    class Program
    {
        /* Ask the user for a numer for the table
        Write a for loop to print x time table */
        static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            int number = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine($"{number} x {i} = {number * i}");
            }
            Console.ReadLine();
        }
    }
}