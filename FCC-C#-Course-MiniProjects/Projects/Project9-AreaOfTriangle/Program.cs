namespace Triangle
{
    class Program {
        /*
        ask user for width and height, store them
        create a function to calculate the area
        function should calculate the area using: (width * height) / 2
        call in main and print out the area of the triangle
        */
        static void Main(string[] args)
        {
            int width = ReadInt("Enter a Width :");
            Console.WriteLine();

            int height = ReadInt("Enter a Height: ");
            //area = Multiply(width, height) / 2;

        }
        static int ReadInt(string message) {
            Console.Write(message);
            return Convert.ToInt32(Console.ReadLine());
        }
        static int Multiply (int height, int width) {
            return height * width;
        }
    }
}