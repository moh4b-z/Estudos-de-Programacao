import java.util.Scanner;

public class TesteDeFuncao {

    static void mostra_menu() {
        System.out.println("Escolha uma opção:");
        System.out.println("1 - adição");
        System.out.println("2 - subtração");
        System.out.println("3 - multiplicação");
        System.out.println("4 - divisão");
        System.out.println("0 - sair");
    }

    static float[] pegar_valor() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o número 1: ");
        float numero1 = scanner.nextFloat();

        System.out.print("Digite o número 2: ");
        float numero2 = scanner.nextFloat();

        float[] valores = {numero1, numero2};
        return valores;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao = 1;

        while (opcao != 0) {
            mostra_menu();
            System.out.print("-> ");
            opcao = scanner.nextInt();

            if (opcao == 0) {
                System.out.println("Saindo");
                break;
            }

            float[] valores = pegar_valor();
            float numero1 = valores[0];
            float numero2 = valores[1];

            if (opcao == 1) {
                float resultado = numero1 + numero2;
                System.out.println("Esse é o resultado: " + resultado);
            } else if (opcao == 2) {
                float resultado = numero1 - numero2;
                System.out.println("Esse é o resultado: " + resultado);
            } else if (opcao == 3) {
                float resultado = numero1 * numero2;
                System.out.println("Esse é o resultado: " + resultado);
            } else if (opcao == 4) {
                if (numero2 != 0) {
                    float resultado = numero1 / numero2;
                    System.out.println("Esse é o resultado: " + resultado);
                } else {
                    System.out.println("Não é possível dividir por zero.");
                }
            }
        }
    }
}
