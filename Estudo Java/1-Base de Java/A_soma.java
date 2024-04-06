import java.util.Scanner;  // Importa a classe Scanner para ler entrada do teclado

public class A_soma {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Cria um objeto Scanner para ler entrada do teclado

        System.out.print("Digite o número A: ");
        float A = scanner.nextFloat();  // Lê o número A como um float

        System.out.print("Digite o número B: ");
        float B = scanner.nextFloat();  // Lê o número B como um float

        if (A > B) {
            System.out.println(A - B);  // Se A é maior que B, imprime a diferença A - B
        } else {
            System.out.println(B - A);  // Se B é maior ou igual a A, imprime a diferença B - A
        }

        scanner.close();  // Fecha o Scanner para liberar os recursos
    }
}