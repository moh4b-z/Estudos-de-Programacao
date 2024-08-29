import customtkinter as ctk
from tkinter import messagebox

# Função para exibir a caixa de diálogo de confirmação
def confirmar_exclusao(pizza):
    resposta = messagebox.askyesno("Deseja excluir?", f"Tem certeza que deseja excluir a {pizza}?")
    if resposta:
        print(f"{pizza} excluída!")
    else:
        print(f"{pizza} não foi excluída.")

# Função para abrir uma nova tela
def abrir_nova_tela():
    nova_tela = ctk.CTkToplevel(root)
    nova_tela.title("Nova Tela")
    ctk.CTkLabel(nova_tela, text="Esta é uma nova tela!").pack(pady=20, padx=20)

# Inicializando a janela principal
root = ctk.CTk()
root.title("Menu de Pizzas")
root.geometry("500x400")

# Frame para o cabeçalho
header_frame = ctk.CTkFrame(master=root)
header_frame.pack(pady=10, padx=10, fill="x")

# Logo (usando um Label como exemplo)
logo_label = ctk.CTkLabel(master=header_frame, text="LOGO", width=50)
logo_label.pack(side="left", padx=10)

# Barra de pesquisa
search_entry = ctk.CTkEntry(master=header_frame, placeholder_text="Procurar funcionalidades")
search_entry.pack(side="left", fill="x", expand=True, padx=10)

# Botão para abrir nova tela
botao_nova_tela = ctk.CTkButton(master=header_frame, text="Abrir Nova Tela", command=abrir_nova_tela)
botao_nova_tela.pack(side="left", padx=10)

# Função para criar o layout dos itens de pizza
def criar_item_pizza(nome_pizza):
    frame = ctk.CTkFrame(master=menu_frame)
    frame.pack(pady=5, padx=10, fill="x")

    label = ctk.CTkLabel(master=frame, text=nome_pizza)
    label.pack(side="left", padx=10)

    botao_excluir = ctk.CTkButton(master=frame, text="🗑", width=30, command=lambda: confirmar_exclusao(nome_pizza))
    botao_excluir.pack(side="right", padx=10)

# Frame do menu
menu_frame = ctk.CTkFrame(master=root)
menu_frame.pack(pady=20, padx=20, fill="both", expand=True)

# Lista de pizzas
pizzas = ["Pizza Calabresa", "Pizza de Queijo", "Pizza Doce", "Pizza Barueri"]

# Criando itens do menu
for pizza in pizzas:
    criar_item_pizza(pizza)

# Executando a interface
root.mainloop()
