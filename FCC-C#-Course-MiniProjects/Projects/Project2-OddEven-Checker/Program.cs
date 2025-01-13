namespace Exercise2
{
    class Program
    {
        /*
        Create and initialize two ints
        make a variable to work out the remainder
        output remainder to screen
        change the first int variable to another number
        and reclaculate the remainder
        output the new remainder to the screen
        */
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