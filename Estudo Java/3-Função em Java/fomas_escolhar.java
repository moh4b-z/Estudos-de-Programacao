import java.util.Scanner;

public class fomas_escolhar {

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

                float perimetro = lado1 + lado2 + lado3;

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
                    double altura = (Math.sqrt(3) / 2) * lado1;
                    double area = altura * lado1 / 2;
                    System.out.println("Triângulo equilatero");
                    System.out.println("A área aproximadamente é "+area+"² e o perimetro aproximadamente "+perimetro);
                }

                else if (lado1 == lado2 && lado3 != lado1 || lado1 == lado3 && lado2 != lado1 || lado3 == lado2 && lado3 != lado1) {
                    double altura = (Math.sqrt(Math.pow(maximo, 2) - Math.pow(minimo, 2) / 4));
                    double area = altura * minimo / 2;
                    System.out.println("Triângulo isósceles");
                    System.out.println("A área aproximadamente é "+area+"² e o perimetro aproximadamente "+perimetro);
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

                float perimetro = lado1 + lado2 + lado3 + lado4;

                if (lado1 == lado2 && lado2 == lado3 && lado3 == lado4) {
                    double area = lado2 * lado1;
                    System.out.println("É um quadrado");
                    System.out.println("A área é "+area+"² e o perimetro "+perimetro);
                }
                else if (lado1 == lado3 && lado2 == lado4 || lado3 == lado2 && lado1 == lado4) {
                    double area = lado2 * lado1;
                    System.out.println("É um rentagulo");
                    System.out.println("A área é "+area+"² e o perimetro "+perimetro);
                }
                else if (lado1 == lado2 && lado3 == lado4) {
                    double area = lado2 * lado3;
                    System.out.println("É um rentagulo");
                    System.out.println("A área é "+area+"² e o perimetro "+perimetro);
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
