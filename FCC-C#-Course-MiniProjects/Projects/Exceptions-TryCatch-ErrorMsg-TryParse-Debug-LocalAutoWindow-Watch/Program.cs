namespace Exceptions
{
    class Program
    {

        static void Main(string[] args)
        {
            //ExceptionsExample();
            TryCatchExample();
        }
        static void ExceptionsExample()
        {
            Console.Write("Enter a number :"); //enter in a wrong format or too large number, not much here
            int num = Convert.ToInt32(Console.ReadLine());
        }
        static void TryCatchExample()
        {
            try 
            {
                Console.Write("Enter a number :"); 
                int num = Convert.ToInt32(Console.ReadLine());
            }
            catch (Exception)
            {
                Console.WriteLine("Something has went wrong!"); // no matter what exception, will always print, all exceptions
            }
        }
    }
}