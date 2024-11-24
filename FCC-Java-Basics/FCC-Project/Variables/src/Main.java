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
        short maxShort = Short.MAX_VALUE;
        short minShort = Short.MIN_VALUE;
        float maxFloat = Float.MAX_VALUE;
        float minFloat = Float.MIN_VALUE;
        float myFloat = 3.14F;
        double maxDouble = Double.MAX_VALUE;
        double minDouble = Double.MIN_VALUE;
        double myDouble = 12.12;
        char myChar = 'A';
        boolean isActive = true;


        System.out.println("Hello " + name + ". Your age is " + age);
        System.out.println("The Maximum Value is " + max);
        System.out.println("The minimum value is " + min);
        System.out.println("The minimum byte value is " + minByteValue);
        System.out.println("The maximum byte value is " + maxByteValue);
        System.out.println("The minimum long value is " + minLongValue);
        System.out.println("The maximum long value is " + maxLongValue);
        System.out.println("The maximum short value is " + maxShort);
        System.out.println("The minimum short value is " + minShort);
        System.out.println("The maximum float value is " + maxFloat);
        System.out.println("The minimum float value is " + minFloat);
        System.out.println("The maximum double value is " + maxDouble);
        System.out.println("The minimum double value is " + minDouble);

    }
}
