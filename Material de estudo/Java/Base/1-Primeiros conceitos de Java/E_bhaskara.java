import java.util.Scanner;

public class E_bhaskara {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o número A: ");
        double A = scanner.nextFloat();

        System.out.print("Digite o número B: ");
        double B = scanner.nextFloat();

        System.out.print("Digite o número C: ");
        double C = scanner.nextFloat();

        double Delta = ((Math.pow(B,2))- 4*A*C);

        double Xmais = (-B + Math.pow(Delta,(1/2)) )/(2 * A);

        double Xmenos = (-B - Math.pow(Delta,(1/2)) )/(2 * A);

        System.out.print("X1 = " + Xmais + ", X2 = " + Xmenos);
    }
    
}
