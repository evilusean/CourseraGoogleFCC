namespace Strings
{
    class Program
    {

        static void Main(string[] args)
        {
            VerbatimStringLiteral();
        }

        static void VerbatimStringLiteral() {
            // '/' is the escape character, use 2 backslashes for a single backslash
            string path = "C:\\Program Files\\Microsoft";
            Console.WriteLine(path);
            // Verbatim string literal, use '@' to ignore escape characters
            string path2 = @"C:\Program Files\Microhard";
            Console.WriteLine(path2);
        }
    }
}