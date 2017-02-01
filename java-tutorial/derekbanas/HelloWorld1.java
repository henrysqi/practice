// public - this should be available to all other classes
// class - blueprint
// main - required in every java program. function that always executes first
// static - only a class can call for this function to execute
// void - doesnt return any values after executing
// main - name of our function


public class HelloWorld1 {
  static String randomString = "String to print";
  static final double PINUM = 3.1415926;
  public static void main(String[] args) {
    System.out.println(PINUM);
  }
}