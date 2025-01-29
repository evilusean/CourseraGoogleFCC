using System;

namespace Project10_SumOfIntArray
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = { 1, 2, 3, 4, 5 };
            // check return in main and output message
            if (SumOfNumbers(numbers, out int sum))
            {
                Console.WriteLine($"The Total is : {sum}");
            }
            else
            {
                Console.WriteLine("Array is Empty");
            }
            /* Old Check :
            int result = SumOfNumbers(numbers);
            if (result > -1)
            {
                Console.WriteLine($"The Total is: {result});
            }
            else
            {
                Console.WriteLine("Can not add an empty array");
            }
            */
        }

        // return a bool and int, new method
        static bool SumOfNumbers(int[] numbers, out int sum)
        {
            sum = 0; // Initialize sum
            if (numbers.Length > 0)
            {
                foreach (var item in numbers)
                {
                    sum += item;
                }
                return true;
            }
            return false;
        }

        /* easy method, just check length(if 0 return -1) and return sum
        static int SumOfNumbers(int[] numbers)
        {
            if (numbers.Length == 0)
            {
                return -1;
            }
            int sum = 0;
            foreach (var item in numbers)
            {
                sum += item;
            }
            return sum;
        }
        */
    }
}