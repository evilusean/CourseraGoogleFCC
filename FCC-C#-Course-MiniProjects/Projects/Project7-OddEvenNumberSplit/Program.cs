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
        List<int> evenList = new List<int>();
        List<int> oddList = new List<int>();
        for (int i = 0; i <= 20; i++) {
            if (i % 2 == 0) {
                evenList.Add(i);
            } else {
                oddList.Add(i);
            }
        }
        Console.WriteLine("Even List:");
        foreach (int even in evenList) {
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