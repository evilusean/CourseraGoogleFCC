﻿// See https://aka.ms/new-console-template for more information
namespace DataTypes
{
    class Program
    {
        static void Main(string[] args)
        {
            //int x = 10;
            //int y = 20;
            //int z = 30;
            int x=10, y=20, z=30; //multiple variable declaration

            int age = 23; //integer
            Console.WriteLine(age); //print int variable to consolde
            Console.WriteLine(int.MaxValue); // print max value of int
            Console.WriteLine(int.MinValue); // print min value of int

            long bigNumber = 1234567890123456789L; //int 32(4 bytes) long 64(8 bytes)
            Console.WriteLine(bigNumber); //print long variable to console
            Console.WriteLine(long.MaxValue); //print max value of long
            Console.WriteLine(long.MinValue); //print min value of long

            double negative = -123.456; //double / float
            Console.WriteLine(negative); //print double variable to console
            Console.WriteLine(double.MaxValue); //print max value of double
            Console.WriteLine(double.MinValue); //print min value of double

            float negatismo = 0.1234567F; //float
            Console.WriteLine(negatismo); //print float variable to console
            Console.WriteLine(float.MaxValue); //print max value of float
            Console.WriteLine(float.MinValue); //print min value of float

            decimal money = 3.50M; //decimal
            Console.WriteLine(money); //print decimal variable to console
            Console.WriteLine(decimal.MaxValue); //print max value of decimal
            Console.WriteLine(decimal.MinValue); //print min value of decimal

            //string and char
            string name = "Sean"; //string - use double quotes for strings
            char letter = 'Z'; //char - use single quotes for characters
            Console.Write("My name is ");
            Console.Write(name);
            Console.WriteLine(letter);
            name += " is brogramming"; //concatenate strings
            Console.WriteLine(name);

            //Convert text to a number, can be done with any number datatype
            string textAge = "33"; //string number
            int convertedAge = Convert.ToInt32(textAge); //convert string to int
            Console.WriteLine(convertedAge);

            //Basic Operators :
            int currentYear = 2024;
            currentYear++; //increment by 1 (++)
            age = age + 1; //increment by 1
            age += 1; //increment by 1
            currentYear--; //decrement by 1 (--)
            Console.WriteLine(currentYear);

            //Float Operators :
            //int * int = int, float * int = float, int / int = int, float / int = float
            float floatNumber = 10.5F; 
            floatNumber *= 3; //multiply by 3
            Console.WriteLine(floatNumber); //will return 31.5
            int intNumber = 23;
            intNumber /= 10;
            Console.WriteLine(intNumber); //this will return '2' instead of 2.3


            bool isTrue = true; //boolean

            //remainder operator %
            int firstNum = 10;
            int secondNum = 3;
            Console.WriteLine(firstNum % secondNum); //will return the remainder
            Console.WriteLine(firstNum % 2); //will return 0 if firstNum is even

            //Var keyword 
            //compiler will figure out what type it is based on the value initialized with it
            var myName = "Sean";
            var myAge = 33;
            var bigNumber2 = 123456789L; //notice the 'L' this explicit tells compiler it is a long
            var myFloat = 3.14F; //notice the 'F' this explicit tells compiler it is a float

            //Const Keyword = constant value that cannot be changed
            const int myConst = 10;

            //Console Input/Output
            System.Console.Write("Enter your name: "); 
            string userName = Console.ReadLine(); //use this to write on same line
            Console.WriteLine("Hello " + userName);
            System.Console.WriteLine(); //adds a new line space/break
            System.Console.Write("Enter your age: ");
            string ageInput = Console.ReadLine(); //will be read in as a string
            //store variables correctly, to store a string to int, convert the string
            int userAge = Convert.ToInt32(ageInput);
            Console.WriteLine("You are " + userAge + " years old.");
            //blank Console.Readline to pause the code, so it doesn't run and close
            Console.ReadLine();
        }
    }
}
