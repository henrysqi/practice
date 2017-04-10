// class name must be the same as the java file name
// public - this should be available to all other classes
// class - blueprint
// main - required in every java program. function that always executes first
// static - only a class can call for this function to execute
// void - doesnt return any values after executing
// main - name of our function


// public class HelloWorld1 {
//   static String randomString = "String to print";
//   static final double PINUM = 3.1415926; // final - unchanging, CAPS for constants
//   public static void main(String[] args) {
//     System.out.println(PINUM);
//   }
// }

// public class HelloWorld1 {
//   public static void main(String[] args) {
//     int integerOne = 22; 
//     int integerTwo = integerOne + 1; // java doesnt care about whitespace
//     System.out.println(integerTwo);
//   }
// }

public class HelloWorld1 {
  public static void main(String[] args) {
    // primitive types
    byte bigByte = 127;
    short bigShort = 32767;
    int bigInt = 2100000000;
    long bigLong = 9220000000000000000L;
    float bigFloat = 3.14F;
    double bigDouble = 3.18129319283123123123; //default if decimals

    System.out.println(Float.MAX_VALUE);
    System.out.println(Double.MAX_VALUE);

    boolean trueOrFalse = true;

    char randomChar = 65;
    char anotherChar = 'A'; // must use single quote

    char escapedChars = '\\';

    String randomString = "I'm a random string";
    String anotherString = "String";

    String andAnotherString = randomString + ' ' + anotherString;

    String byteString = Byte.toString(bigByte);
    String shortString = Short.toString(bigByte);
    String intString = Integer.toString(bigByte);
    // String longString = Long.toString(bigByte);
    // String floatString = Float.toString(bigByte);
    // String doubleString = Double.toString(bigByte);
    // String booleanString = Boolean.toString(bigByte);

    // information is lost if ur casting from really high to lo
    double aDoubleValue = 3.1234132;
    int doubleToInt = (int) aDoubleValue;
    // (byte) (short) (long) (double)

    int stringToInt = Integer.parseInt(intString);
    // parseShort, parseLong, ParseByte, parseFloat, parseDouble, parseBoolean

    System.out.println(stringToInt);
  }
}


