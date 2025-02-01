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
            public int birthmonth;

            //Constructor - all parameters are local(only to constructor, use 'this.' to go to current scope of struct)
            public Person(string name, int age, int birthMonth)
            {
                this.name = name;
                this.age = age;
                this.birthmonth = birthmonth;
            }
        }

        static void StructuresExample()
        {
            Person person; // will create the person structure variable
            person.name = "Sean"; // how to add data to the 'person.name' structure variable above
            person.age = 33;
            person.birthmonth = 4;;
            Console.WriteLine($"{person.name} - {person.age} - {person.birthmonth}");

            Person person2 = ReturnPerson(); //use below function to 
            Console.WriteLine($"{person2.name} - {person2.age} - {person2.birthmonth}");

        }
        static Person ReturnPerson() // return a person structure
        {
            Console.Write("Enter your name: ");//get user inputs
            string name2 = Console.ReadLine();

            Console.Write("Enter your age: ");
            int age2 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter your birthmonth #: ");
            int birthmonth2 = Convert.ToInt32(Console.ReadLine());

            /* old method of manual inputting each line, used constructor method instead
            Person person2; //create the new structure
            person2.name = name2; //update with user inputs into the newly created structure
            person2.age = age2;
            person2.birthmonth = birthmonth2;
            //will return the manual inputs person - commented out, can only return one
            return person2; */

            return new Person(name2, age2, birthmonth2); //will use the constructor to return values 'new' keyword
        }
    }
}