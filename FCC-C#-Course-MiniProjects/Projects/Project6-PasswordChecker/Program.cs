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

            if (string.IsNullOrEmpty(password1) || string.IsNullOrEmpty(password2))
            {
                System.Console.WriteLine("Please enter a password");
            }
            else if (password1 == password2)
            {
                if (password1.Length >= 6)
                {
                    System.Console.WriteLine("Passwords match and are of sufficient length");
                }
                else
                {
                    System.Console.WriteLine("Passwords match but are too short. >6 characters");
                }
            }
            else
            {
                System.Console.WriteLine("Passwords do not match");
            }
        }
    }
}