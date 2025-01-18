namespace Project6
{
    class Program
    {
        /*
        Ask user to enter a password, and store it
        ask user to enter password again, and store
        check they both contain something
        check if they are both the same
        if they are print 'passwords' match
        if they are not print 'passwords do not match'
        if the are empty, print "Please enter a password"
        */
        static void Main(string[] args)
        {
            string password1 = "";
            string password2 = "";

            System.Console.WriteLine("Enter a password:");
            password1 = System.Console.ReadLine();

            System.Console.WriteLine("Enter the password again:");
            password2 = System.Console.ReadLine();

            if (password1 == "" || password2 == "")
            {
                System.Console.WriteLine("Please enter a password");
            }
            else if (password1 == password2)
            {
                System.Console.WriteLine("Passwords match");
            }
            else
            {
                System.Console.WriteLine("Passwords do not match");
            }
        }
    }
}