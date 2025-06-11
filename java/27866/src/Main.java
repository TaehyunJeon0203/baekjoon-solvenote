import java.util.*;
import java.io.*;

public class Main {
    public static void solution() throws IOException {
        Scanner sc = new Scanner(System.in);
        
        String S = sc.nextLine();
        int i = sc.nextInt();

        System.out.println(S.charAt(i-1));
        
        sc.close();
    }

    public static void main(String[] args) throws IOException {
        solution();
    }
}