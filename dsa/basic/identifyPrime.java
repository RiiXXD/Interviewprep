package MyPersonal.Interviewprep.dsa.basic;

public class identifyPrime {
    public static void identifyPrime(int num) {
        if (num < 2) {
            System.out.println("No");
            return;
        }
        if (num == 2) {
            System.out.println("Yes");
            return;
        }
        if (num % 2 == 0) {
            System.out.println("No");
            return;
        }

        // Prime can be 2, otherwise any odd number beside 2
        int sqrt = (int) Math.sqrt(num);
        // incrementing by 2 as iteration starts with 3+2=5+2=7....
        // only checking with odd number
        for (int i = 3; i <= sqrt; i += 2) {
            if (num % i == 0) {
                System.out.println("No");
                return;
            }
        }
        System.out.println("Yes");
    }

}
