using System;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            //ArraysExample();
            //TriAngles();
            ArraySorting();
        }

        static void ArraysExample()
        {
            // Arrays
            // Arrays are a collection of elements of the same type
            // Arrays are fixed in size
            // Arrays are zero-based
            // Arrays are reference types

            // Below syntax: type[] name = new type[size];
            int[] numbers = new int[3];

            numbers[0] = 5; // Assigning to the first element
            numbers[1] = 10;
            numbers[2] = 15;
            Console.WriteLine($"{numbers[0]}, {numbers[1]}, {numbers[2]}");//how to print each element in an array

            Console.WriteLine("Enter a number: "); //old slow method of user inputting for each element
            numbers[0] = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter a number: ");
            numbers[1] = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter a number: ");
            numbers[2] = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine($"{numbers[0]}, {numbers[1]}, {numbers[2]}"); 
            Console.WriteLine();

            for (int i = 0; i < numbers.Length; i++) 
            { //dynamic loop, will adjust to whatever size the array is, and ask for correct amount of inputs
                Console.WriteLine("Enter a number: ");
                numbers[i] = Convert.ToInt32(Console.ReadLine());
            } //just change the size of the array at top of code to adjust how many inputs are needed

            for (int i = 0; i < numbers.Length; i++) //for loop to print an array line by line
            {
                Console.WriteLine(numbers[i]);
            }

            foreach (int number in numbers) //foreach loop to print an array line by line
            {
                Console.WriteLine(number);
            }
        }
        static void TriAngles()
        {
            // TriAngles
            // A triangle is a polygon with three edges and three vertices
            // The three angles of a triangle always add up to 180 degrees
            // The sum of the lengths of any two sides of a triangle is always greater than the length of the third side

            // Below syntax: type[] name = new type[size];
            const int angleCount = 3; //use a variable to set the size of the array
            int[] angles = new int[angleCount]; //array of 3 angles

            for (int i = 0; i < angles.Length; i++)
            {
                Console.WriteLine($"Enter angle {i + 1}: ");
                angles[i] = Convert.ToInt32(Console.ReadLine());
            }

            int sum = 0;
            foreach (int angle in angles)
            {
                sum += angle;
            }

            if (sum == 180)
            {
                Console.WriteLine("The angles form a triangle.");
            }
            else
            {
                Console.WriteLine("The angles do not form a triangle.");
            }
        }
        static void ArraySorting() {
            int[] numbers = new int[]
            {
                1, 5, 3, 7, 2, 9, 8, 4, 6
            };
            foreach (int num in numbers)
            {
                Console.Write($"{num} ");
            }
        }
    }
}
