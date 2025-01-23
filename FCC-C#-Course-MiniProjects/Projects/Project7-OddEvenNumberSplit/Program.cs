class Program
{
    /*
    Create two lists with integer data type, one for even number and one for odd number.
    loop from 0-20
    if the number is even, add it to the even list
    if the number is odd, add it to the odd list
    print the even list
    print the odd list
    */
    static void Main(string[] args) {
        List<int> evenList = new List<int>(); // Create a list to store even numbers
        List<int> oddList = new List<int>(); // Create a list to store odd numbers
        for (int i = 0; i <= 20; i++) { // Loop from 0 to 20
            if (i % 2 == 0) { // Check if the number is even
                evenList.Add(i);  // Add the number to the even list
            } else { // If the number is not even, it is odd
                oddList.Add(i); // Add the number to the odd list
            }
        }
        Console.WriteLine("Even List:");
        foreach (int even in evenList) { // Loop through the even list
            Console.Write($"{even} ");
        }
        Console.WriteLine();
        Console.WriteLine("Odd List:");
        foreach (int odd in oddList) {
            Console.Write($"{odd} ");
        }
        Console.ReadLine();
        
    }
}