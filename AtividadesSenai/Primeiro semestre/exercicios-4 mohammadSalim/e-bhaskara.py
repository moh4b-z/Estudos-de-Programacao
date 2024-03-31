
A = float(input('digite o número de A: '))
B = float(input('digite o número de B: '))
C = float(input('digite o número de C: '))
Delta = ((B ** (2))- 4*A*C)

Xmais = (-B + Delta ** (1/2))/(2 * A)

Xmenos = (-B - Delta ** (1/2))/(2 * A)

print (Xmais,Xmenos)