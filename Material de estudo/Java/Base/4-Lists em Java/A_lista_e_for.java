import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

public class A_lista_e_for {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int contador = 1;

        // Criar uma lista para armazenar números inteiros
        List<String> nomes = new ArrayList<>();

        while (contador <= 10) {

            System.out.print("Digite o nome: ");
            String nome = scanner.next();

            nomes.add(nome);

            contador++;
            
        }

        for (String nome : nomes) {
            System.out.println("Nome: " + nome);
        }

        /*
         * System.out.println():

        Este método é usado para imprimir no console e adiciona automaticamente uma nova linha ao final da saída.
        Ele imprime os dados fornecidos e move o cursor para a próxima linha após a impressão.
         */

    }  
}
