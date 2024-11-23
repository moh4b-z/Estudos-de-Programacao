
public class A_while {
    public static void main(String[] args) {
        int contador = 15;
        int finall = 200;
        while (contador <= finall) {

            double contador2= (Math.pow(contador,2));

            System.out.print(contador2);

            contador++;
            
        }

        /*
         * do {
         * 
         *  double contador2= (Math.pow(contador,2));

            System.out.print(contador2);

            contador++;
         * }while (contador <= finall)
          a verificação é no final então ele pelo menos vai executar uma vez*/
    }
}
