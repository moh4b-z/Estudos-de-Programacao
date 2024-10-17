import customtkinter as ctk
from tkinter import Tk

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

# Botão de ajuda (?)
help_button = ctk.CTkButton(top_frame, text="?", width=30, height=30)
help_button.pack(side="right", padx=10)

# Título da seção
title_label = ctk.CTkLabel(frame, text="ADICIONAR PRODUTOS", font=("Arial", 20))
title_label.pack(pady=10)

# Frame para os botões de "Físicos" e "Líquidos"
buttons_frame = ctk.CTkFrame(frame)
buttons_frame.pack(pady=20)

# Função para alternar entre frames
def show_frame(frame_to_show):
    physical_frame.pack_forget()
    liquid_frame.pack_forget()
    frame_to_show.pack(pady=20, padx=20, fill="both", expand=True)

# Botão "Físicos"
physical_button = ctk.CTkButton(buttons_frame, text="FÍSICOS", command=lambda: show_frame(physical_frame))
physical_button.grid(row=0, column=0, padx=20)

# Botão "Líquidos"
liquid_button = ctk.CTkButton(buttons_frame, text="LÍQUIDOS", command=lambda: show_frame(liquid_frame))
liquid_button.grid(row=0, column=1, padx=20)

# Frames para os conteúdos de "Físicos" e "Líquidos"
physical_frame = ctk.CTkFrame(frame)
liquid_frame = ctk.CTkFrame(frame)

# Layout do conteúdo "Físicos"
physical_label_frame = ctk.CTkFrame(physical_frame, corner_radius=10, border_width=1)
physical_label_frame.pack(padx=10, pady=10, fill="both", expand=True)

physical_fields = [
    ("Nome", "xxxx"), 
    ("Foto", "⬆️"), 
    ("Vídeo", "⬇️"), 
    ("Ingredientes", "xxxx"), 
    ("Descrição", "xxxx"), 
    ("Preço", "R$"), 
    ("Possível desconto", "%")
]
for field, placeholder in physical_fields:
    field_label = ctk.CTkLabel(physical_label_frame, text=f"{field} →")
    field_label.pack(anchor="w", padx=20, pady=5)
    field_entry = ctk.CTkEntry(physical_label_frame, placeholder_text=placeholder)
    field_entry.pack(anchor="w", padx=20, pady=5)

# Layout do conteúdo "Líquidos"
liquid_label_frame = ctk.CTkFrame(liquid_frame, corner_radius=10, border_width=1)
liquid_label_frame.pack(padx=10, pady=10, fill="both", expand=True)

liquid_fields = [
    ("Nome", "xxxx"), 
    ("Foto", "⬆️"), 
    ("Vídeo", "⬇️"), 
    ("Tamanho", "xxxx"), 
    ("Descrição", "xxxx"), 
    ("Preço", "R$"), 
    ("Possível desconto", "%")
]
for field, placeholder in liquid_fields:
    field_label = ctk.CTkLabel(liquid_label_frame, text=f"{field} →")
    field_label.pack(anchor="w", padx=20, pady=5)
    field_entry = ctk.CTkEntry(liquid_label_frame, placeholder_text=placeholder)
    field_entry.pack(anchor="w", padx=20, pady=5)

# Exibe a aba de "Físicos" por padrão
show_frame(physical_frame)

# Executa a aplicação
root.mainloop()
