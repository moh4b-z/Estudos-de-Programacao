import customtkinter as ctk
from tkinter import Tk, Toplevel
from tkinter import filedialog
from PIL import Image, ImageTk

# Inicializa a janela principal
root = Tk()
root.title("Exemplo CustomTkinter")
root.geometry("800x400")

# Cria o frame principal
frame = ctk.CTkFrame(root)
frame.pack(pady=20, padx=20, fill="both", expand=True)

# Função para carregar uma imagem
def load_image():
    file_path = filedialog.askopenfilename(filetypes=[("Image Files", "*.png;*.jpg;*.jpeg;*.gif")])
    if file_path:
        image = Image.open(file_path)
        image = image.resize((150, 150), Image.ANTIALIAS)
        photo = ImageTk.PhotoImage(image)
        image_label.configure(image=photo)
        image_label.image = photo

# Frame para a barra de pesquisa, logo e botão
top_frame = ctk.CTkFrame(frame)
top_frame.pack(fill="x", pady=10)

# Adiciona um espaço reservado para o logo
logo_label = ctk.CTkLabel(top_frame, text="LOGO", width=50, height=50)
logo_label.pack(side="left", padx=10)

# Adiciona uma barra de pesquisa no topo
search_bar = ctk.CTkEntry(top_frame, placeholder_text="Procurar funcionalidades", width=300)
search_bar.pack(side="left", fill="x", padx=10, expand=True)

# Botão para abrir uma nova página
open_page_button = ctk.CTkButton(top_frame, text="Abrir Nova Página", command=lambda: open_new_page())
open_page_button.pack(side="left", padx=10)

# Frame do lado direito para os campos de entrada
right_frame = ctk.CTkFrame(frame)
right_frame.pack(side="right", fill="y", padx=20, pady=10)

# Frame do lado esquerdo para a imagem
left_frame = ctk.CTkFrame(frame)
left_frame.pack(side="left", fill="y", padx=20, pady=10)

# Espaço para a imagem
image_label = ctk.CTkLabel(left_frame, text="Adicione uma Imagem", width=150, height=150)
image_label.pack(pady=10)

# Botão para carregar a imagem
load_image_button = ctk.CTkButton(left_frame, text="Carregar Imagem", command=load_image)
load_image_button.pack(pady=10)

# Dicionário para armazenar os campos de entrada
entry_fields = {}

# Função para habilitar a edição de um campo específico
def enable_editing(label):
    entry_fields[label].configure(state="normal")

# Cria campos de entrada com rótulos e botões de edição no frame do lado direito
labels = ["NOME", "INGREDIENTES", "VÍDEO", "PREÇO", "POSSÍVEL DESCONTO"]
for label in labels:
    item_frame = ctk.CTkFrame(right_frame)
    item_frame.pack(fill="x", pady=5)
    
    entry_label = ctk.CTkLabel(item_frame, text=label)
    entry_label.pack(side="left", anchor="w", pady=(5, 0))
    
    entry = ctk.CTkEntry(item_frame, state="readonly")  # Inicialmente, os campos são somente leitura
    entry.pack(side="left", fill="x", padx=10, expand=True)
    entry_fields[label] = entry
    
    edit_button = ctk.CTkButton(item_frame, text="✏️", width=30, command=lambda l=label: enable_editing(l))
    edit_button.pack(side="left", padx=10)

# Botão de salvar
save_button = ctk.CTkButton(right_frame, text="SALVAR")
save_button.pack(pady=10)

# Executa a aplicação
root.mainloop()

