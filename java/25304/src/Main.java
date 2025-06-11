import java.util.*;
import java.io.*;

public class Main {
    public static void solution() throws IOException {
        Scanner sc = new Scanner(System.in);
        
        long totalPrice = sc.nextLong();
        int numOfItems = sc.nextInt();

        long getTotalPrice = 0;
        for (int i=0; i<numOfItems; i++) {
            int price = sc.nextInt();
            int count = sc.nextInt();
            getTotalPrice += price * count;
        }
        if (totalPrice == getTotalPrice) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        
        sc.close();
    }

    public static void main(String[] args) throws IOException {
        solution();
    }
}