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
            PasswordChecker passwordChecker = new PasswordChecker();
            passwordChecker.Run();
        }
    }
}