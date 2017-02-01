import java.util.Scanner;
// import java.util.*;

public class JavaLessonTwo {
  static Scanner userInput = new Scanner(System.in);
  public static void main(String[] args) {
    // print doesnt newline, println does
    System.out.print("Your favorite number: ");
    // if the next thing user types is an integer
    if (userInput.hasNextInt()) {
      // hasNextDouble,Float,Boolean,Byte,Long,Short

      // expect user to enter integer
      int numberEntered = userInput.nextInt(); 
      // nextDouble(), nextFloat(), nextLine() - string

      numberEntered += 2;
      numberEntered--;

      int numberABS = Math.abs(numberEntered);
      int whichIsBigger = Math.max(5,7);
      int whichIsSmaller = Math.min(5,7);
      double numSqrt = Math.sqrt(5.23);
      int numCeiling = (int) Math.ceil(5.23);
      int numFloor = (int) Math.floor(5.23);
      int numRound = (int) Math.round(5.23);
      int randomNumber = (int) (Math.random()); // 0 - .9999
      int randomNumber2 = (int) (Math.random()*11); // 1 - 10
      System.out.println(randomNumber2);

      System.out.println("You entered" + numberEntered);
      
    } else {
      System.out.println("Enter an integer next time");
    }
  }
}