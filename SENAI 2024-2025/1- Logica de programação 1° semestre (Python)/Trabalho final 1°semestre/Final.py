import tkinter as tk
from tkinter import messagebox, simpledialog
import json

class Fisicos:
    def __init__(self, imagem, nome, ingredientes, peso, preco, acompanhamento):
        self.imagem = imagem
        self.nome = nome
        self.ingredientes = ingredientes
        self.peso = peso
        self.preco = preco
        self.acompanhamento = acompanhamento

    def to_dict(self):
        return {
            "tipo": "fisicos",
            "imagem": self.imagem,
            "nome": self.nome,
            "ingredientes": self.ingredientes,
            "peso": self.peso,
            "preco": self.preco,
            "acompanhamento": self.acompanhamento
        }

class Liquidos:
    def __init__(self, imagem, nome, volume, preco, acompanhamento):
        self.imagem = imagem
        self.nome = nome
        self.volume = volume
        self.preco = preco
        self.acompanhamento = acompanhamento

    def to_dict(self):
        return {
            "tipo": "liquidos",
            "imagem": self.imagem,
            "nome": self.nome,
            "volume": self.volume,
            "preco": self.preco,
            "acompanhamento": self.acompanhamento
        }

fisicos = []
liquidos = []
acompanhamentos = []

def salvar_produtos():
    produtos = [p.to_dict() for p in fisicos + liquidos]
    with open('produtos.txt', 'w', encoding='utf-8') as arquivo:
        json.dump(produtos, arquivo, ensure_ascii=False)

def carregar_produtos():
    try:
        with open('produtos.txt', 'r', encoding='utf-8') as arquivo:
            produtos = json.load(arquivo)
            for p in produtos:
                if p["tipo"] == "fisicos":
                    produto = Fisicos(p["imagem"], p["nome"], p["ingredientes"], p["peso"], p["preco"], p["acompanhamento"])
                    fisicos.append(produto)
                elif p["tipo"] == "liquidos":
                    produto = Liquidos(p["imagem"], p["nome"], p["volume"], p["preco"], p["acompanhamento"])
                    liquidos.append(produto)
                if p["acompanhamento"].lower() == "sim":
                    acompanhamentos.append(produto)
    except FileNotFoundError:
        print("Erro: Arquivo não encontrado.")
    except json.JSONDecodeError as e:
        print(f"Erro ao decodificar JSON: {e}")
    except Exception as e:
        print(f"Um erro inesperado ocorreu: {e}")

class Aplicacao(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Sistema de Gerenciamento de Produtos")
        self.geometry("800x600")
        self.nome_usuario = None
        carregar_produtos()
        self.criar_tela_login()

    def criar_tela_login(self):
        self.quadro_login = tk.Frame(self)
        self.quadro_login.pack(pady=20)

        tk.Label(self.quadro_login, text="E-mail").pack()
        self.entrada_email = tk.Entry(self.quadro_login)
        self.entrada_email.pack()

        tk.Label(self.quadro_login, text="Nome").pack()
        self.entrada_nome = tk.Entry(self.quadro_login)
        self.entrada_nome.pack()

        tk.Label(self.quadro_login, text="Senha").pack()
        self.entrada_senha = tk.Entry(self.quadro_login, show="*")
        self.entrada_senha.pack()

        tk.Label(self.quadro_login, text="Confirme a Senha").pack()
        self.entrada_conf_senha = tk.Entry(self.quadro_login, show="*")
        self.entrada_conf_senha.pack()

        tk.Button(self.quadro_login, text="Login", command=self.verificar_credenciais).pack(pady=10)

    def verificar_credenciais(self):
        email = self.entrada_email.get()
        nome = self.entrada_nome.get()
        senha = self.entrada_senha.get()
        confirmar_senha = self.entrada_conf_senha.get()

        if senha == "PizzaBoa" and senha == confirmar_senha:
            self.nome_usuario = nome
            messagebox.showinfo("Login bem-sucedido", f"Bem-vindo, {nome}!")
            self.quadro_login.destroy()
            self.criar_menu_principal()
        else:
            messagebox.showerror("Erro de Login", "Senha incorreta. Tente novamente.")

    def criar_menu_principal(self):
        self.limpar_quadro()

        self.quadro_menu = tk.Frame(self)
        self.quadro_menu.pack(pady=20)

        tk.Label(self.quadro_menu, text=f"{self.nome_usuario} - Menu Principal", font=("Helvetica", 16)).pack(pady=10)

        quadro_pesquisa_e_retorno = tk.Frame(self.quadro_menu)
        quadro_pesquisa_e_retorno.pack(fill=tk.X)

        self.criar_botao_retorno(quadro_pesquisa_e_retorno, self.criar_menu_principal)
        self.criar_barra_pesquisa(quadro_pesquisa_e_retorno)

        quadro_esquerdo = tk.Frame(self.quadro_menu)
        quadro_esquerdo.pack(side=tk.LEFT, fill=tk.Y, padx=10)

        quadro_direito = tk.Frame(self.quadro_menu)
        quadro_direito.pack(side=tk.LEFT, fill=tk.Y, padx=10)

        tk.Button(quadro_direito, text="+Criar", command=self.mostrar_menu_criar).pack(pady=5)
        tk.Button(quadro_direito, text="Estoque", command=self.mostrar_produtos).pack(pady=5)
        tk.Button(quadro_direito, text="Menu", command=self.mostrar_produtos).pack(pady=5)
        tk.Button(quadro_direito, text="Editar", command=self.editar_produtos).pack(pady=5)

        self.criar_exibicao_produtos(quadro_esquerdo, "Pizzas", fisicos)
        self.criar_exibicao_produtos(quadro_esquerdo, "Bebidas", liquidos)
        self.criar_exibicao_produtos(quadro_esquerdo, "Acompanhamentos", acompanhamentos)

    def limpar_quadro(self):
        for widget in self.winfo_children():
            widget.pack_forget()

    def criar_exibicao_produtos(self, parent, titulo, produtos):
        quadro = tk.Frame(parent)
        quadro.pack(pady=10, fill='x')
        tk.Label(quadro, text=titulo, font=("Helvetica", 14)).pack(anchor='w')
        quadro_exibicao = tk.Frame(quadro)
        quadro_exibicao.pack()
        for produto in produtos[-3:]:
            self.exibir_produto(quadro_exibicao, produto)

    def exibir_produto(self, parent, produto):
        quadro_produto = tk.Frame(parent, width=50, height=50, relief=tk.RAISED, borderwidth=1)
        quadro_produto.pack_propagate(False)
        quadro_produto.pack(side=tk.LEFT, padx=5)

        rotulo_imagem = tk.Label(quadro_produto, text=produto.imagem, width=30, height=30)
        rotulo_imagem.pack()
        rotulo_nome = tk.Label(quadro_produto, text=produto.nome, wraplength=50)
        rotulo_nome.pack()
        quadro_produto.bind("<Button-1>", lambda e: self.editar_produto(produto))

    def criar_barra_pesquisa(self, parent):
        quadro_pesquisa = tk.Frame(parent)
        quadro_pesquisa.pack(side=tk.RIGHT)
        tk.Label(quadro_pesquisa, text="Pesquisar: ").pack(side=tk.LEFT)
        self.var_pesquisa = tk.StringVar()
        self.entrada_pesquisa = tk.Entry(quadro_pesquisa, textvariable=self.var_pesquisa)
        self.entrada_pesquisa.pack(side=tk.LEFT)
        self.var_pesquisa.trace("w", self.atualizar_sugestoes_pesquisa)
        self.lista_sugestoes = tk.Listbox(quadro_pesquisa)
        self.lista_sugestoes.pack(side=tk.LEFT)
        self.lista_sugestoes.bind("<<ListboxSelect>>", self.selecionar_sugestao)

    def atualizar_sugestoes_pesquisa(self, *args):
        termo_pesquisa = self.var_pesquisa.get().lower()
        self.lista_sugestoes.delete(0, tk.END)
        sugestoes = [prod.nome for prod in fisicos + liquidos + acompanhamentos if termo_pesquisa in prod.nome.lower()]
        for sugestao in sugestoes:
            self.lista_sugestoes.insert(tk.END, sugestao)

    def selecionar_sugestao(self, event):
        indice_selecionado = self.lista_sugestoes.curselection()
        if indice_selecionado:
            nome_selecionado = self.lista_sugestoes.get(indice_selecionado)
            for produto in fisicos + liquidos + acompanhamentos:
                if produto.nome == nome_selecionado:
                    self.editar_produto(produto)
                    break

    def criar_botao_retorno(self, parent, comando):
        botao_retorno = tk.Button(parent, text="Voltar ao Menu Principal", command=self.criar_menu_principal)
        botao_retorno.pack(side=tk.LEFT, padx=5)

    def mostrar_menu_criar(self):
        self.limpar_quadro()
        self.quadro_criar = tk.Frame(self)
        self.quadro_criar.pack(pady=20)

        tk.Label(self.quadro_criar, text="Criar", font=("Helvetica", 16)).pack(pady=10)
        quadro_pesquisa_e_retorno = tk.Frame(self.quadro_criar)
        quadro_pesquisa_e_retorno.pack(fill=tk.X)
        self.criar_botao_retorno(quadro_pesquisa_e_retorno, self.criar_menu_principal)
        self.criar_barra_pesquisa(quadro_pesquisa_e_retorno)
        
        tk.Button(self.quadro_criar, text="Criar Físicos", command=self.criar_fisicos).pack(pady=5)
        tk.Button(self.quadro_criar, text="Criar Líquidos", command=self.criar_liquidos).pack(pady=5)
    
    def criar_fisicos(self):
        imagem = simpledialog.askstring("Criar Físicos", "Imagem:")
        nome = simpledialog.askstring("Criar Físicos", "Nome:")
        ingredientes = simpledialog.askstring("Criar Físicos", "Ingredientes:")
        peso = float(simpledialog.askstring("Criar Físicos", "Peso:"))
        preco = float(simpledialog.askstring("Criar Físicos", "Preço:"))
        acompanhamento = simpledialog.askstring("Criar Físicos", "Acompanhamento (Sim/Não):")
        
        novo_fisico = Fisicos(imagem, nome, ingredientes, peso, preco, acompanhamento)
        fisicos.append(novo_fisico)
        if acompanhamento.lower() == "sim":
            acompanhamentos.append(novo_fisico)
        messagebox.showinfo("Criar Físicos", "Produto Físico Criado!")
        self.criar_menu_principal()

    def criar_liquidos(self):
        imagem = simpledialog.askstring("Criar Líquidos", "Imagem:")
        nome = simpledialog.askstring("Criar Líquidos", "Nome:")
        volume = float(simpledialog.askstring("Criar Líquidos", "Volume:"))
        preco = float(simpledialog.askstring("Criar Líquidos", "Preço:"))
        acompanhamento = simpledialog.askstring("Criar Líquidos", "Acompanhamento (Sim/Não):")
        
        novo_liquido = Liquidos(imagem, nome, volume, preco, acompanhamento)
        liquidos.append(novo_liquido)
        if acompanhamento.lower() == "sim":
            acompanhamentos.append(novo_liquido)
        messagebox.showinfo("Criar Líquidos", "Produto Líquido Criado!")
        self.criar_menu_principal()

    def mostrar_produtos(self):
        self.limpar_quadro()
        self.quadro_produtos = tk.Frame(self)
        self.quadro_produtos.pack(pady=20)

        tk.Label(self.quadro_produtos, text="Produtos em Estoque", font=("Helvetica", 16)).pack(pady=10)
        quadro_pesquisa_e_retorno = tk.Frame(self.quadro_produtos)
        quadro_pesquisa_e_retorno.pack(fill=tk.X)
        self.criar_botao_retorno(quadro_pesquisa_e_retorno, self.criar_menu_principal)
        self.criar_barra_pesquisa(quadro_pesquisa_e_retorno)

        tk.Label(self.quadro_produtos, text="Produtos Físicos:").pack()
        for f in fisicos:
            tk.Label(self.quadro_produtos, text=f"Nome: {f.nome}, Preço: {f.preco}").pack()

        tk.Label(self.quadro_produtos, text="Produtos Líquidos:").pack()
        for l in liquidos:
            tk.Label(self.quadro_produtos, text=f"Nome: {l.nome}, Preço: {l.preco}").pack()

        tk.Label(self.quadro_produtos, text="Acompanhamentos:").pack()
        for a in acompanhamentos:
            tk.Label(self.quadro_produtos, text=f"Nome: {a.nome}, Preço: {a.preco}").pack()

    def editar_produtos(self):
        self.limpar_quadro()
        self.quadro_editar = tk.Frame(self)
        self.quadro_editar.pack(pady=20)
        
        tk.Label(self.quadro_editar, text="Editar Produtos", font=("Helvetica", 16)).pack(pady=10)
        quadro_pesquisa_e_retorno = tk.Frame(self.quadro_editar)
        quadro_pesquisa_e_retorno.pack(fill=tk.X)
        self.criar_botao_retorno(quadro_pesquisa_e_retorno, self.criar_menu_principal)
        self.criar_barra_pesquisa(quadro_pesquisa_e_retorno)

        tk.Label(self.quadro_editar, text="Produtos Físicos:").pack()
        for f in sorted(fisicos, key=lambda x: x.nome):
            tk.Button(self.quadro_editar, text=f.nome, command=lambda f=f: self.editar_produto(f)).pack()

        tk.Label(self.quadro_editar, text="Produtos Líquidos:").pack()
        for l in sorted(liquidos, key=lambda x: x.nome):
            tk.Button(self.quadro_editar, text=l.nome, command=lambda l=l: self.editar_produto(l)).pack()

        tk.Label(self.quadro_editar, text="Acompanhamentos:").pack()
        for a in sorted(acompanhamentos, key=lambda x: x.nome):
            tk.Button(self.quadro_editar, text=a.nome, command=lambda a=a: self.editar_produto(a)).pack()

    def editar_produto(self, produto):
        self.limpar_quadro()
        self.quadro_editar_produto = tk.Frame(self)
        self.quadro_editar_produto.pack(pady=20)
        
        tk.Label(self.quadro_editar_produto, text=f"Editar {produto.nome}", font=("Helvetica", 16)).pack(pady=10)
        quadro_pesquisa_e_retorno = tk.Frame(self.quadro_editar_produto)
        quadro_pesquisa_e_retorno.pack(fill=tk.X)
        self.criar_botao_retorno(quadro_pesquisa_e_retorno, self.editar_produtos)
        self.criar_barra_pesquisa(quadro_pesquisa_e_retorno)

        rotulo_imagem = tk.Label(self.quadro_editar_produto, text=f"Imagem: {produto.imagem}")
        rotulo_imagem.pack()
        self.entrada_imagem = tk.Entry(self.quadro_editar_produto)
        self.entrada_imagem.insert(0, produto.imagem)
        self.entrada_imagem.pack()

        rotulo_nome = tk.Label(self.quadro_editar_produto, text=f"Nome: {produto.nome}")
        rotulo_nome.pack()
        self.entrada_nome = tk.Entry(self.quadro_editar_produto)
        self.entrada_nome.insert(0, produto.nome)
        self.entrada_nome.pack()

        if isinstance(produto, Fisicos):
            rotulo_ingredientes = tk.Label(self.quadro_editar_produto, text=f"Ingredientes: {produto.ingredientes}")
            rotulo_ingredientes.pack()
            self.entrada_ingredientes = tk.Entry(self.quadro_editar_produto)
            self.entrada_ingredientes.insert(0, produto.ingredientes)
            self.entrada_ingredientes.pack()

            rotulo_peso = tk.Label(self.quadro_editar_produto, text=f"Peso: {produto.peso}")
            rotulo_peso.pack()
            self.entrada_peso = tk.Entry(self.quadro_editar_produto)
            self.entrada_peso.insert(0, produto.peso)
            self.entrada_peso.pack()

        elif isinstance(produto, Liquidos):
            rotulo_volume = tk.Label(self.quadro_editar_produto, text=f"Volume: {produto.volume}")
            rotulo_volume.pack()
            self.entrada_volume = tk.Entry(self.quadro_editar_produto)
            self.entrada_volume.insert(0, produto.volume)
            self.entrada_volume.pack()

        rotulo_preco = tk.Label(self.quadro_editar_produto, text=f"Preço: {produto.preco}")
        rotulo_preco.pack()
        self.entrada_preco = tk.Entry(self.quadro_editar_produto)
        self.entrada_preco.insert(0, produto.preco)
        self.entrada_preco.pack()

        rotulo_acompanhamento = tk.Label(self.quadro_editar_produto, text=f"Acompanhamento: {produto.acompanhamento}")
        rotulo_acompanhamento.pack()
        self.entrada_acompanhamento = tk.Entry(self.quadro_editar_produto)
        self.entrada_acompanhamento.insert(0, produto.acompanhamento)
        self.entrada_acompanhamento.pack()

        tk.Button(self.quadro_editar_produto, text="Salvar", command=lambda: self.salvar_edicao(produto)).pack(pady=5)
        tk.Button(self.quadro_editar_produto, text="Excluir", command=lambda: self.excluir_produto(produto)).pack(pady=5)

    def salvar_edicao(self, produto):
        produto.imagem = self.entrada_imagem.get()
        produto.nome = self.entrada_nome.get()

        if isinstance(produto, Fisicos):
            produto.ingredientes = self.entrada_ingredientes.get()
            produto.peso = float(self.entrada_peso.get())

        elif isinstance(produto, Liquidos):
            produto.volume = float(self.entrada_volume.get())

        produto.preco = float(self.entrada_preco.get())
        acompanhamento = self.entrada_acompanhamento.get()

        if acompanhamento.lower() == "sim" and produto not in acompanhamentos:
            acompanhamentos.append(produto)
        elif acompanhamento.lower() == "não" and produto in acompanhamentos:
            acompanhamentos.remove(produto)
        produto.acompanhamento = acompanhamento

        messagebox.showinfo("Editar Produto", "Produto atualizado!")
        self.criar_menu_principal()

    def excluir_produto(self, produto):
        if isinstance(produto, Fisicos):
            fisicos.remove(produto)
        elif isinstance(produto, Liquidos):
            liquidos.remove(produto)
        if produto in acompanhamentos:
            acompanhamentos.remove(produto)
        messagebox.showinfo("Excluir Produto", "Produto excluído!")
        self.criar_menu_principal()

if __name__ == "__main__":
    app = Aplicacao()
    app.mainloop()