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

            numbers[0] = 5;
            numbers[1] = 10;
            numbers[2] = 15;
            Console.WriteLine($"{numbers[0]}, {numbers[1]}, {numbers[2]}");
        }
    }
}
