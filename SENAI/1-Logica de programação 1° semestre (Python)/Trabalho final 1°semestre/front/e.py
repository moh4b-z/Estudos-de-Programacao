import customtkinter as ctk
from tkinter import Tk, Toplevel

# Inicializa a janela principal
root = Tk()
root.title("Estoque")
root.geometry("800x600")

# Cria o frame principal
frame = ctk.CTkFrame(root)
frame.pack(pady=20, padx=20, fill="both", expand=True)

# Frame para a barra de pesquisa, logo e botão
top_frame = ctk.CTkFrame(frame)
top_frame.pack(fill="x", pady=10)

# Adiciona um espaço reservado para o logo
logo_label = ctk.CTkLabel(top_frame, text="LOGO", width=50, height=50)
logo_label.pack(side="left", padx=10)

# Adiciona uma barra de pesquisa no topo
search_bar = ctk.CTkEntry(top_frame, placeholder_text="Procurar funcionalidades", width=300)
search_bar.pack(side="left", fill="x", padx=10, expand=True)

# Função para abrir uma nova página
def open_new_page():
    new_page = Toplevel(root)
    new_page.title("Nova Página")
    new_page.geometry("300x200")
    page_label = ctk.CTkLabel(new_page, text="Esta é uma nova página")
    page_label.pack(pady=20)

# Botão para abrir uma nova página
open_page_button = ctk.CTkButton(top_frame, text="Abrir Nova Página", command=open_new_page)
open_page_button.pack(side="left", padx=10)

# Frame para as abas
tabs_frame = ctk.CTkFrame(frame)
tabs_frame.pack(fill="x", pady=20)

# Função para alternar entre abas e criar tabelas
def show_liquids():
    solid_frame.pack_forget()
    create_table(liquid_frame, liquids_data)
    liquid_frame.pack(fill="both", expand=True)

def show_solids():
    liquid_frame.pack_forget()
    create_table(solid_frame, solids_data)
    solid_frame.pack(fill="both", expand=True)

# Botões de abas
liquids_button = ctk.CTkButton(tabs_frame, text="LÍQUIDOS", command=show_liquids)
liquids_button.pack(side="left", padx=5)

solids_button = ctk.CTkButton(tabs_frame, text="FÍSICOS", command=show_solids)
solids_button.pack(side="left", padx=5)

# Frame para líquidos e sólidos
liquid_frame = ctk.CTkFrame(frame)
solid_frame = ctk.CTkFrame(frame)

# Dados das tabelas
liquids_data = [
    ("MOLHO DE TOMATE", "30", "03/02/2024", "03/05"),
    ("MUSSARELA", "20", "08/02/2024", "08/03"),
    ("AZEITONA", "10", "18/02/2024", "10/05"),
]

solids_data = [
    ("ARROZ", "50", "15/01/2024", "15/04"),
    ("FEIJÃO", "40", "20/01/2024", "20/04"),
    ("MACARRÃO", "60", "25/01/2024", "25/04"),
]

# Função para criar tabelas dinâmicas
def create_table(parent, data):
    for widget in parent.winfo_children():
        widget.destroy()
        
    headers = ["PRODUTOS", "QUANTIDADE EM ESTOQUE", "ÚLTIMA COMPRA", "PREVISÃO DE FIM"]
    
    # Adiciona padding ao redor da tabela para centralização
    table_frame = ctk.CTkFrame(parent)
    table_frame.pack(pady=20, padx=20)
    
    for i, header in enumerate(headers):
        ctk.CTkLabel(table_frame, text=header, width=20).grid(row=0, column=i, padx=5, pady=5, sticky="w")

    for i, (produto, quantidade, ultima_compra, previsao_fim) in enumerate(data):
        ctk.CTkLabel(table_frame, text=produto, width=20).grid(row=i + 1, column=0, padx=5, pady=5, sticky="w")
        ctk.CTkLabel(table_frame, text=quantidade, width=20).grid(row=i + 1, column=1, padx=5, pady=5, sticky="w")
        ctk.CTkLabel(table_frame, text=ultima_compra, width=20).grid(row=i + 1, column=2, padx=5, pady=5, sticky="w")
        ctk.CTkLabel(table_frame, text=previsao_fim, width=20).grid(row=i + 1, column=3, padx=5, pady=5, sticky="w")

# Exibe a aba de líquidos por padrão
show_liquids()

# Executa a aplicação
root.mainloop()
