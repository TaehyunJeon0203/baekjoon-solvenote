import java.util.*;
import java.io.*;

public class Main {
    public static void solution() throws IOException {
        Scanner sc = new Scanner(System.in);
        
        long A = sc.nextLong();
        long B = sc.nextLong();
        long C = sc.nextLong();

        System.out.println(A + B + C);
        
        sc.close();
    }

    public static void main(String[] args) throws IOException {
        solution();
    }
}