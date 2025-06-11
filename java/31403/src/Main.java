import java.util.*;
import java.io.*;

public class Main {
    public static void solution() throws IOException {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();

        System.out.println(A + B - C);

        String SA = String.valueOf(A);
        String SB = String.valueOf(B);
        
        String SAB = SA + SB;

        int ISAB = Integer.parseInt(SAB);
        int ans = ISAB - C;

        System.out.println(ans);
        
        sc.close();
    }

    public static void main(String[] args) throws IOException {
        solution();
    }
}