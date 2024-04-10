import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;


public class Formas {

    static void mostra_menu() {
        System.out.println("Escolha uma opção:");
        System.out.println("1 - Triángulo");
        System.out.println("2 - Quadrilatero");
        System.out.println("3 - Circulo");
        System.out.println("0 - sair");
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
            else if (opcao == 1) {
                float[] lados = new float[3];

                System.out.print("Digite o lado 1: ");
                float lado1 = scanner.nextFloat();
                lados[0] = lado1;

                System.out.print("Digite o lado 2: ");
                float lado2 = scanner.nextFloat();
                lados[1] = lado2;

                System.out.print("Digite o lado 3: ");
                float lado3 = scanner.nextFloat();
                lados[2] = lado3;

                //vai começa a locora para mim que só tava progamando em Python

                // Inicialize o máximo e o mínimo com o primeiro elemento do array
                float maximo = lados[0];
                float minimo = lados[0];

                // Percorra o array para encontrar o máximo e o mínimo
                for (int i = 1; i < lados.length; i++) {
                    if (lados[i] > maximo) {
                        maximo = lados[i]; // Atualiza o máximo se o elemento atual for maior
                    }
                    if (lados[i] < minimo) {
                        minimo = lados[i]; // Atualiza o mínimo se o elemento atual for menor
                    }
                }

                // Calcular o valor restante da lista
                float Sobrou = 0;
                for (float lado : lados) {
                    if (lado != maximo && lado != minimo || lado != maximo && lado == minimo || lado == maximo && lado != minimo) {
                        Sobrou = lado;
                        break;
                    }
                }

                if (maximo > Sobrou + minimo) {
                    System.out.println("Não é um triangulo");
                    
                }

                else if (lado1 == lado2 && lado3 == lado2) {
                    System.out.println("Triângulo equilatero");
                }

                else if (lado1 == lado2 && lado3 != lado1) {
                    System.out.println("Triângulo isósceles");
                }
                else if (lado1 == lado3 && lado2 != lado1) {
                    System.out.println("Triângulo isósceles");
                }
                else if (lado3 == lado2 && lado3 != lado1) {
                    System.out.println("Triângulo isósceles");
                }

                else{
                    System.out.println("Triângulo escaleno");
                }

            }

            else if (opcao == 2) {
                System.out.print("Digite o lado 1: ");
                float lado1 = scanner.nextFloat();

                System.out.print("Digite o lado 2: ");
                float lado2 = scanner.nextFloat();

                System.out.print("Digite o lado 3: ");
                float lado3 = scanner.nextFloat();

                System.out.print("Digite o lado 4: ");
                float lado4 = scanner.nextFloat();

                if (lado1 == lado2 && lado2 == lado3 && lado3 == lado4) {
                    System.out.println("É um quadrado");
                }
                else if (lado1 == lado2 && lado3 == lado4) {
                    System.out.println("É um rentagulo");
                }
                else if (lado1 == lado3 && lado2 == lado4) {
                    System.out.println("É um rentagulo");
                }
                else if (lado3 == lado2 && lado1 == lado4) {
                    System.out.println("É um rentagulo");
                }
                else {
                    System.out.println("Não é um quadrado e rentagulo");
                }

            }

            else if (opcao == 3) {
                System.out.print("Digite o raio: ");
                float raio = scanner.nextFloat();

                double area = Math.pow(raio, 2) * 3.14;
                double perimetro = (raio * 2) * 3.14;

                System.out.println("A área é "+ area + " e o perimetro " + perimetro);

            }
        }
    }
    
}
