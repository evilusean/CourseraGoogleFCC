using System;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            ArraysExample();
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
    }
}
