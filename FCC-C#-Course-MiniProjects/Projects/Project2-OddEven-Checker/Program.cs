namespace Exercise2
{
    class Program
    {
        static void Main(string[] args)
        {
            var var1 = 11;
            var var2 = 15;
            var checkEm = var1 % 2;
            Console.WriteLine(checkEm);
            var1 = 12;
            checkEm = var1 % 2; //need to recalculater after change
            Console.WriteLine(checkEm);
        }
    }
}