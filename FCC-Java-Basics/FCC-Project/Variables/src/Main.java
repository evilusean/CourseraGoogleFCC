public class Main {
    public static void main(String[] args) {
        String name = "Sean";
        int age = 33;
        int max = Integer.MAX_VALUE;
        int min = Integer.MIN_VALUE;
        byte maxByteValue = Byte.MAX_VALUE;
        byte minByteValue = Byte.MIN_VALUE;
        long maxLongValue = Long.MAX_VALUE;
        long minLongValue = Long.MIN_VALUE;
        long myNumber = 2147483648L;
        // notice the 'L' at the end, you will default be considred an integer even with the 'long' prefix before the name 'myNumber' - you need to add 'l'
        System.out.println("Hello " + name + ". Your age is " + age);
        System.out.println("The Maximum Value is " + max);
        System.out.println("The minimum value is " + min);
        System.out.println("The minimum byte value is " + minByteValue);
        System.out.println("The maximum byte value is " + maxByteValue);
        System.out.println("The minimum long value is " + minLongValue);
        System.out.println("The maximum long value is " + maxLongValue);
    }
}
