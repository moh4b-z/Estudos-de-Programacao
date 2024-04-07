public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("oi seus malucos");
        System.out.println("aaaaaaaaa");

        // variaves para numeros inteiros esse limite serve para positivo e negativo
        byte numroPequno = 127;
        short numeroMedio = 32767; 
        int numeroGrande = 2147483647;
        long numeroMuitoGrande = 922337203685477000l; // precisa colocar um 'l' no final para ele não ler como int

        System.out.println("Limite negativo e positivo" + numroPequno);
        System.out.println("Limite negativo e positivo" + numeroMedio);
        System.out.println("Limite negativo e positivo" + numeroGrande);
        System.out.println("Limite negativo e positivo" + numeroMuitoGrande);


        // variaves para numeros decimas

        float numeroQuaquer = 2.98f; // precisa colocar um 'f' no final para ele não ler como int
        double numeroGrandeDecimal = 3.14283234373873875773;

        System.out.println(numeroQuaquer);
        System.out.println(numeroGrandeDecimal);


        // variavel cractere
        char Letra = 'c'; // só garda um unico elemento podendo ir de um espaço até um cractere especial

        System.out.println(Letra);

        // só tem dois valores possiveis verdadeiro ou falso (true, false)
        boolean estouComsono= true;

        System.out.println(estouComsono);


        // variavel para texto, ao contrario das outra que são variaveis primitiva,
        // essa guarda o valor depedendo do tamanho do texto que você colocar,
        // por isso ela deve começa com letra maiuscula
        // também deve colocar "" não colocar ''

        String nome = "Mohammad";

        System.out.println(nome);
        
    }
}
