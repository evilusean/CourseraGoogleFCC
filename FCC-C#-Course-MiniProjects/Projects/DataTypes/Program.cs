// See https://aka.ms/new-console-template for more information
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






            Console.ReadLine();
        }
    }
}
