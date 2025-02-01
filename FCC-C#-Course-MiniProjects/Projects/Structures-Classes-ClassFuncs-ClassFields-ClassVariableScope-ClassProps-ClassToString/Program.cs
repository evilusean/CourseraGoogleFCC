using System;
using System.Collections.Generic;
//using System.Ling;
using System.Text;
using System.Threading.Tasks;

namespace StructuresExample
{
    class Program
    {
        static void Main(string[] args)
        {
            StructuresExample();
        }

        // Structures allow you to store different datatypes inside one datatype, a group of datatypes
        struct Person
        {
            public string name; // new keyword = public = access modifier, so we can use below
            public int age;
        }

        static void StructuresExample()
        {
            Person person; // will create the person structure variable
            person.name = "Sean"; // how to add data to the 'person.name' structure variable above
            person.age = 33;
            Console.WriteLine($"{person.name} - {person.age}");
        }
    }
}