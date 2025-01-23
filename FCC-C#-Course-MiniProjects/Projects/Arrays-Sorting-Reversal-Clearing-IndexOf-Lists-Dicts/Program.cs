using System;

using System.Collections.Generic;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            //ArraysExample();
            //TriAngles();
            //ArraySorting();
            //ArrayReversal();
            //ArrayClearing();
            //ArrayIndexOf();
            //ListsExample();
            DictionaryExample();
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
            int[] numbers = new int[] //new array, no size given, will adjust to size of values
            {
                1, 5, 3, 7, 2, 9, 8, 4, 6
            }; //don't need to declare size of array, can just initialize it with values

            string test= ""; //initialize an empty string
            test.Replace(" ", ""); //removes all spaces from a string

            Array.Sort(numbers); //sorts the array in ascending order - not saved to a variable

            foreach (int num in numbers)
            {
                Console.Write($"{num} "); // add a space
            }
            
        }

        static void ArrayReversal() 
        {
            // Array Reversal = Sort an array in descending order
            int[] numbers = new int[] //new array, no size given, will adjust to size of values
            {
                1, 5, 3, 7, 2, 9, 8, 4, 6
            }; //don't need to declare size of array, can just initialize it with values

            Array.Reverse(numbers); //reverses the array - not saved to a variable

            foreach (int num in numbers)
            {
                Console.Write($"{num} "); // add a space
            }
            Console.WriteLine();

            //will store new reversed array in a new array, I heard you liked reversed arrays
            int[] sortedNumbers = new int[numbers.Length]; //new array to save the reversed array
            int x = 0; // initialize a variable to save the reversed array

            for (int i = numbers.Length - 1; i >= 0 ; i--) //manually reverse the array
            {
                sortedNumbers[x] = numbers[i]; //saves the variables to int x
                x++; 
            }
            Console.WriteLine();
            foreach (int num in sortedNumbers)
            {
                Console.Write($"{num} "); // add a space
            }
        }
        static void ArrayClearing() {
            int[] numbers = new int[] //new array, no size given, will adjust to size of values
            {
                1, 5, 3, 7, 2, 9, 8, 4, 6
            }; //don't need to declare size of array, can just initialize it with values

            //clear a part
            Array.Clear(numbers, 3, 5); //clears the array from index [3] for 5 - not saved to a variable
            foreach (int num in numbers) //prints the cleared array
            {
                Console.Write($"{num} "); // add a space
            }

            Console.WriteLine();

            //clear the whole array
            Array.Clear(numbers, 0, numbers.Length); //clears the array [0]- not saved to a variable
            foreach (int num in numbers) //prints the cleared array
            {
                Console.Write($"{num} "); // add a space
            }
        }

        static void ArrayIndexOf()
     {
            int[] numbers = new int[] //new array, no size given, will adjust to size of values
            {
                1, 5, 3, 7, 2, 9, 8, 4, 6
            }; //don't need to declare size of array, can just initialize it with values

            int index = Array.IndexOf(numbers, 7); //finds the index of the value 7 in the array
            Console.WriteLine(index); //prints the index of the value 7

            index = Array.IndexOf(numbers, 9); //finds the index of the value 10 in the array
            Console.WriteLine(index); //prints the index of the value 10

            Console.Write("Enter a number to search: ");
            int search = Convert.ToInt32(Console.ReadLine()); //user input to search for a value in the array
            int position = Array.IndexOf(numbers, search); //finds the index of the value in the array

            if (position > -1) //if the value is found, -1 is returned if the value is not found
            {
                Console.WriteLine($"The number {search} is found at position {position + 1}.");
            } // +1 to make it human readable not [0] based
            else //if the value is not found
            {
                Console.WriteLine($"The number {search} is not found.");
        }
    }
    static void ListsExample() {
        // Lists
        // Lists are a collection of elements of the same type
        // Lists are dynamic in size
        // Lists are zero-based
        // Lists are reference types

        // Below syntax: List<type> name = new List<type>();
        List<int> numbers = new List<int>() //new list, no size given, will adjust to size of values
        {
            1, 2, 3, 4 //don't need to declare size of list, can just initialize it with values
        };

        numbers.Add(5); //add a value to the list manually, can add as many as you want
        numbers.Add(10);
        numbers.Add(15);

        foreach (int number in numbers) //print the list
        {
            Console.WriteLine(number);
        }

        Console.WriteLine("Enter a number: ");
        numbers.Add(Convert.ToInt32(Console.ReadLine())); //add a user input value to the list

        foreach (int number in numbers) //print the list
        {
            Console.WriteLine(number);
        }

        Console.WriteLine("Enter a number to remove: ");
        numbers.Remove(Convert.ToInt32(Console.ReadLine())); //remove a user input value from the list
        // .RemoveAll() removes all instances of a value, or a specific positon with .RemoveAt()

        foreach (int number in numbers) //print the list
        {
            Console.WriteLine(number);
        }

        Console.WriteLine("Enter a number to search: ");
        int search = Convert.ToInt32(Console.ReadLine()); //user input to search for a value in the list
        int position = numbers.IndexOf(search); //finds the index of the value in the list

        if (position > -1) //if the value is found, -1 is returned if the value is not found
        {
            Console.WriteLine($"The number {search} is found at position {position + 1}.");
        } // +1 to make it human readable not [0] based
        else //if the value is not found
        {
            Console.WriteLine($"The number {search} is not found.");
        }

        foreach (int number in numbers) //print the list
    {
        Console.Write($"{number} ");
}
    }
    static void DictionaryExample() {
        // Dictionaries
        // Dictionaries are a collection of key-value pairs
        // Dictionaries are dynamic in size
        // Dictionaries are zero-based
        // Dictionaries are reference types

        Dictionary<int, string> names = new Dictionary<int, string> // how to create a new dictionary
        {
            { 1, "Sean" }, // how to add a key-value pair to a dictionary
            { 2, "Shawn" },
            { 3, "Shaun" }
        };
        names.Add(4, "Sean"); // how to add a key-value pair to a dictionary manually
        names.Add(5, "Shawn");
        names.Add(6, "Shaun");

        //will loop through each key-value pair in the dictionary based on KEY not [index]
        for (int i = 1; i <= names.Count; i++) // how to loop through a dictionary
        {
            Console.WriteLine(names[i]); // how to access a value in a dictionary
        }

        //will loop through each key-value pair based on [INDEX] not key
        for (int i = 0; i < names.Count; i++) // how to loop through a dictionary
        {
            KeyValuePair<int, string> pair = names.ElementAt(i); // how to access a key-value pair in a dictionary
            Console.WriteLine($"{pair.Key} = {pair.Value}"); // how to access a value in a dictionary
        }

        foreach (var item in names)
        {
            Console.WriteLine($"{item.Key} = {item.Value}"); 
        }

        //New Example for dictionaries :
        Dictionary<string, string> teachers = new Dictionary<string, string> 
        {
            { "Math", "Mr. Smith" },
            { "Science", "Mrs. Johnson" },
            { "History", "Mr. Brown" }
        }

}
    }
}
