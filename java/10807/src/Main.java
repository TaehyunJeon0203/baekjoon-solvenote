import java.util.*;
import java.io.*;

public class Main {
    public static void solution() throws IOException {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int[] arr = new int[N];
        for (int i=0; i<arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        int v = sc.nextInt();

        int count = 0;
        for (int i=0; i<arr.length; i++) {
            if (arr[i] == v) {
                count++;
            }
        }
        
        System.out.println(count);
        
        sc.close();
    }

    public static void main(String[] args) throws IOException {
        solution();
    }
}