﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StructuresExample
{
    class Program
    {
        static void Main(string[] args)
        {
            //StructuresExample();
            //ClassesExample();
            ClassFieldsExample();
        }

        // Structures allow you to store different datatypes inside one datatype, a group of datatypes
        struct Person
        {
            public string name; // new keyword = public = access modifier, so we can use below
            public int age;
            public int birthmonth;

            //Constructor - all parameters are local(only to constructor, use 'this.' to go to current scope of struct)
            public Person(string name, int age, int birthmonth)
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
        // Class example with multiple constructors and methods
        class PersonClass
        {
            public string name;
            public int age;
            public int birthmonth;

            // You can create multiple constructors in a class
            public PersonClass(string name, int age, int birthmonth) // all 3 values
            {
                this.name = name;
                this.age = age;
                this.birthmonth = birthmonth;
            }

            public PersonClass(string name) // only name constructor
            {
                this.name = name;
                this.age = 0; // default value
                this.birthmonth = 0; // default value
            }

            public string ReturnName()//getter
            {
                return $"Name : {name}";
            }

            public void SetName(string name)//setter
            {
                this.name = !string.IsNullOrEmpty(name) ? name : "Invalid Name";
                /*can be done in one line
                if (!string.IsNullOrEmpty(name)) //if the string isnt null or empty
                { //'!' = logical NOT operator (inverts a statement)
                    this.name = name;
                }
                else
                { //if the string is null or empty, return this instead
                    //this.name = string.Empty; 
                    this.name = "Invalid Name";
                }*/
            }
            public void SetAge(int age)//age setter
            {
                this.age = age >= 0 && age <= 150 ? age : -1;
                /*Can be done in a one liner, above, ternary operator
                if (age >= 0 && age <= 150) //set an age range
                {
                    this.age = age;
                }
                else
                {
                    this.age = -1; //if a bad value, set to -1
                }
                */
            }
            public string GetName() //getter for just name
            {
                return name;
            }
            /*can be done as an arrow function
            public int GetAge()
            {
                return age;
            }*/
            public int GetAge() => age; //arrow function returns age
        }

        static void ClassExample()
        {
            PersonClass person = new PersonClass("Sean", 33, 5);
            Console.WriteLine(person.ReturnName());
            person.SetName("John");
            Console.WriteLine(person.ReturnName());

            PersonClass personNameOnly = new PersonClass("Shawn"); // create a new class instance with second constructor
            Console.WriteLine(personNameOnly.name);
            Console.WriteLine(ReturnDetails(person)); // will return our first person class as a function below
            Console.WriteLine(personNameOnly.ReturnName()); // will get name from class function above
        }

        static string ReturnDetails(PersonClass person) // new function to return details of instantiated class
        {
            return $"Name: {person.name} \nAge : {person.age}"; // formats to make return pretty
        }
        static void ClassFieldsExample()
        {
            PersonClass person = new PersonClass("Sean", 24, 4);
            Console.WriteLine(ReturnDetails(person));
            person.SetName("Shawn"); //setter
            Console.WriteLine(ReturnDetails(person));//getter funcSean
            Console.WriteLine($"Your name is {person.GetName()}");
            Console.WriteLine($"Your age is {person.GetAge()}");
        }
    }
}