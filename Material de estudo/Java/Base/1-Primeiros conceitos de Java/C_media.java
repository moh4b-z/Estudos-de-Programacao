import java.util.Scanner;

public class C_media {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o número 1: ");
        float N1 = scanner.nextFloat();

        System.out.print("Digite o número 2: ");
        float N2 = scanner.nextFloat();

        System.out.print("Digite o número 3: ");
        float N3 = scanner.nextFloat();

        System.out.print("Digite o número 4: ");
        float N4 = scanner.nextFloat(); 

        float media = (N1 + N2 + N3 + N4)/4;

        if (media >= 7) {
            System.out.print("Media é "+ media +" Aprovado");
        }
        else {
            System.out.print("Media é "+ media +" Reprovado");
        }
    }
}
