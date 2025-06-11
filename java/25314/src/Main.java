import java.util.*;
import java.io.*;

public class Main {
    public static void solution() throws IOException {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();

        for (int i=0; i<N; i+=4) {
            System.out.print("long ");
        }
        System.out.println("int");
        
        sc.close();
    }

    public static void main(String[] args) throws IOException {
        solution();
    }
}