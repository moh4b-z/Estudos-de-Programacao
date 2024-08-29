import customtkinter as ctk

# Configuração inicial
ctk.set_appearance_mode("System")  # Modo de aparência (System, Dark, Light)
ctk.set_default_color_theme("blue")  # Tema de cor (blue, dark-blue, green)

# Criação da janela principal
app = ctk.CTk()
app.geometry("800x600")
app.title("Adicionar Produtos")

# Função de placeholder para os botões
def func_placeholder():
    print("Botão clicado")

def abrir_outra_pagina():
    new_window = ctk.CTkToplevel(app)
    new_window.geometry("400x300")
    new_window.title("Outra Página")
    label = ctk.CTkLabel(new_window, text="Bem-vindo à outra página!")
    label.pack(pady=20)

# Frame principal
main_frame = ctk.CTkFrame(app)
main_frame.pack(pady=20, padx=20, fill="both", expand=True)

# Frame da barra de pesquisa, botão e logo
top_frame = ctk.CTkFrame(main_frame)
top_frame.pack(pady=10, padx=10, fill="x")

# Barra de pesquisa
search_bar = ctk.CTkEntry(top_frame, placeholder_text="Procurar funcionalidades")
search_bar.pack(side="left", pady=10, padx=10, fill="x", expand=True)

# Botão para abrir outra página
open_page_button = ctk.CTkButton(top_frame, text="?", command=abrir_outra_pagina)
open_page_button.pack(side="right", padx=10)

# Espaço para logo
logo_label = ctk.CTkLabel(top_frame, text="LOGO", width=50, height=50)
logo_label.pack(side="right", padx=10)

# Título da seção
title_label = ctk.CTkLabel(main_frame, text="ADICIONAR PRODUTOS", font=("Arial", 24))
title_label.pack(pady=10)

# Frame para os produtos
products_frame = ctk.CTkFrame(main_frame)
products_frame.pack(pady=20, padx=10, expand=True, fill="both")

# Seção de produtos físicos
fisicos_frame = ctk.CTkFrame(products_frame, width=200, height=300)
fisicos_frame.pack(side="left", padx=20, pady=10, expand=True, fill="both")

fisicos_label = ctk.CTkLabel(fisicos_frame, text="FÍSICOS", font=("Arial", 18))
fisicos_label.pack(pady=10)

fisicos_content = ctk.CTkLabel(fisicos_frame, text="Lista de produtos físicos")
fisicos_content.pack(pady=10, expand=True, fill="both")

# Seção de produtos líquidos
liquidos_frame = ctk.CTkFrame(products_frame, width=200, height=300)
liquidos_frame.pack(side="left", padx=20, pady=10, expand=True, fill="both")

liquidos_label = ctk.CTkLabel(liquidos_frame, text="LÍQUIDOS", font=("Arial", 18))
liquidos_label.pack(pady=10)

liquidos_content = ctk.CTkLabel(liquidos_frame, text="Lista de produtos líquidos")
liquidos_content.pack(pady=10, expand=True, fill="both")

# Execução da interface
app.mainloop()
