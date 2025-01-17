namespace Exercise
{
    class Program
    {
        /* 
        Ask user to input message
        print in order
        print in reverse
        character by character
        */
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a message: ");
            string message = Console.ReadLine();

            for (int i = 0; i < message.Length; i++)
            {
                Console.Write(message[i]);
                System.Threading.Thread.Sleep(50);
            }

            Console.Write("-");

            for (int i = message.Length - 1; i >= 0; i--)
            {
                Console.Write(message[i]);
                System.Threading.Thread.Sleep(50);
            }

            Console.ReadLine();
        }
    }
}