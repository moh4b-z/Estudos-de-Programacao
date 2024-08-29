import customtkinter as ctk

# Configuração inicial
ctk.set_appearance_mode("System")  # Modo de aparência (System, Dark, Light)
ctk.set_default_color_theme("blue")  # Tema de cor (blue, dark-blue, green)

# Criação da janela principal
app = ctk.CTk()
app.geometry("800x600")
app.title("Interface de Pizzaria")

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

# Frame da barra de pesquisa e logo
top_frame = ctk.CTkFrame(main_frame)
top_frame.pack(pady=10, padx=10, fill="x")

# Barra de pesquisa
search_bar = ctk.CTkEntry(top_frame, placeholder_text="Procurar funcionalidades")
search_bar.pack(side="left", pady=10, padx=10, fill="x", expand=True)

# Espaço para logo
logo_label = ctk.CTkLabel(top_frame, text="LOGO", width=50, height=50)
logo_label.pack(side="left", padx=10)

# Botão para abrir outra página
open_page_button = ctk.CTkButton(top_frame, text="Abrir Página", command=abrir_outra_pagina)
open_page_button.pack(side="left", padx=10)

# Frame para as categorias no lado esquerdo, centralizado verticalmente
left_frame = ctk.CTkFrame(main_frame)
left_frame.pack(pady=20, padx=10, side="left", fill="y", anchor="center")

# Seção de Pizzas
pizza_label = ctk.CTkLabel(left_frame, text="PIZZAS", font=("Arial", 18))
pizza_label.pack(pady=(20, 5))

pizza_frame = ctk.CTkFrame(left_frame)
pizza_frame.pack(pady=5, padx=10, fill="x")

for _ in range(3):
    pizza_button = ctk.CTkButton(pizza_frame, image=None, text="Pizza", command=func_placeholder)
    pizza_button.pack(side="left", padx=5, pady=5, expand=True, fill="x")

# Seção de Bebidas
bebida_label = ctk.CTkLabel(left_frame, text="BEBIDAS", font=("Arial", 18))
bebida_label.pack(pady=(20, 5))

bebida_frame = ctk.CTkFrame(left_frame)
bebida_frame.pack(pady=5, padx=10, fill="x")

for _ in range(3):
    bebida_button = ctk.CTkButton(bebida_frame, image=None, text="Bebida", command=func_placeholder)
    bebida_button.pack(side="left", padx=5, pady=5, expand=True, fill="x")

# Seção de Acompanhamentos
acom_label = ctk.CTkLabel(left_frame, text="ACOMPANHAMENTOS", font=("Arial", 18))
acom_label.pack(pady=(20, 5))

acom_frame = ctk.CTkFrame(left_frame)
acom_frame.pack(pady=5, padx=10, fill="x")

for _ in range(3):
    acom_button = ctk.CTkButton(acom_frame, image=None, text="Acompanhamento", command=func_placeholder)
    acom_button.pack(side="left", padx=5, pady=5, expand=True, fill="x")

# Botões de funcionalidades adicionais no lado direito, centralizados verticalmente
button_frame = ctk.CTkFrame(main_frame)
button_frame.pack(pady=20, padx=10, side="right", fill="y", anchor="center")

create_button = ctk.CTkButton(button_frame, text="+ CRIAR", command=func_placeholder)
create_button.pack(pady=5, padx=10, fill="x")

menu_button = ctk.CTkButton(button_frame, text="MENU", command=func_placeholder)
menu_button.pack(pady=5, padx=10, fill="x")

edit_button = ctk.CTkButton(button_frame, text="EDITAR", command=func_placeholder)
edit_button.pack(pady=5, padx=10, fill="x")

stock_button = ctk.CTkButton(button_frame, text="VERIFICAR ESTOQUE", command=func_placeholder)
stock_button.pack(pady=5, padx=10, fill="x")

# Execução da interface
app.mainloop()

