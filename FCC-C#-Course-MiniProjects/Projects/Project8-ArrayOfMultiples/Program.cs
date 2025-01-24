namespace Exercise
{
    class Program
    {
        /* 
        Define and intialize two integers (num, length)
        (7, 5) -> [7, 14, 21, 28, 35]
        (17, 6) -> [17, 34, 51, 68, 85, 102]
        (3, 7) -> [3, 6, 9, 12, 15, 18, 21]
        loop through and insert the (loop counter x num) into the array
        print the final array
        */
        static void Main(string[] args)
        {
            int num = 7;
            int length = 5;
            int[] result = new int[length];
            for (int i = 0; i < length; i++)
            {
                result[i] = num * (i + 1);
            }
            foreach (var item in result)
            {
                System.Console.Write(item + " ");
            }
            Console.ReadLine();
        }
    }
}