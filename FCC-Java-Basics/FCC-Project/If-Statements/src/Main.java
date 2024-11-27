//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int age = 18;
        //If Else statement
        if (age >= 18) {
            System.out.println("You can VOOOOOOOOOOTTTEEEEEEEE");
            System.out.println("Do you want the PP or the turdeau");
            System.out.println("Do you want the red puppet or the blue one");
        } else {
            System.out.println("If voting mattered would they let you do it?");
        }
        //Else If Statement
        int year = 2023;
        if(year == 2023) {
            System.out.println("It is the current year -1 = " + year);
        } else if (year == 2024) {
            System.out.println("It is the current year : " + year);
        } else {
            System.out.println("All conditions failed");
        }
        //Boolean if statement
        boolean isActive = true;
        if (isActive) {
            System.out.println("The user is active.");
        } else {
            System.out.println("The user is not active");
        }
        // '&&' and operator - both must be true to run
        if (year == 2024 && age >= 18) {
            System.out.println("It is the current year and voting doesn't matter");
        } else {
            System.out.println("so called representative democracy is a sham");
        }
        // '||' OR operator
        boolean VOOOOOOTE = false;
        boolean brainwashed_public = true;
        if (VOOOOOOTE == true || brainwashed_public == true) {
            System.out.println("Even if voting mattered(it doesn't). \nThe majority are brainwashed and beleive whatever garbage they are fed, without question.");
        } else {
            System.out.println("Lol, Lmao");
        }
        // SWITCH statement
        int time = 12;
        switch (time) {
            case 10:
                System.out.println("The time is " + time + "\nTime for a change.(more of the same)");
                break;
            case 12:
                System.out.println("The time is " + time + "\nTime for some hope(cope)");
                break;
            default:
                System.out.println("Time to : Step 1) Escape");
                break;
        }
    }
}