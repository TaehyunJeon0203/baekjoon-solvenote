import java.util.*;
import java.io.*;

public class Main {
    public static void solution() throws IOException {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int M = sc.nextInt();

        int[] arr = new int[N];

        for (int i=0; i<M; i++) {
            int first = sc.nextInt();
            int last = sc.nextInt();
            int num = sc.nextInt();

            for (int j=first-1; j<=last-1; j++) {
                arr[j] = num;
            }
        }

        for (int i=0; i<N; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        
        sc.close();
    }

    public static void main(String[] args) throws IOException {
        solution();
    }
}