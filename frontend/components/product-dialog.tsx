"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProdutoService, Produto } from "@/lib/services/produto.service"
import { CategoriaService, Categoria } from "@/lib/services/categoria.service"
import { FornecedorService, Fornecedor } from "@/lib/services/fornecedor.service"
import { useToast } from "@/components/ui/use-toast"

interface ProductDialogProps {
  children: React.ReactNode
  product?: Produto
  onSuccess?: () => void
}

export function ProductDialog({ children, product, onSuccess }: ProductDialogProps) {
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState(product?.nome || "")
  const [descricao, setDescricao] = useState(product?.descricao || "")
  const [preco, setPreco] = useState(product?.preco?.toString() || "")
  const [quantidade, setQuantidade] = useState(product?.quantidade?.toString() || "")
  const [categoriaId, setCategoriaId] = useState(product?.categoriaId?.toString() || "")
  const [fornecedorId, setFornecedorId] = useState(product?.fornecedorId?.toString() || "")
  const [isLoading, setIsLoading] = useState(false)
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([])
  const { toast } = useToast()
  const produtoService = new ProdutoService()
  const categoriaService = new CategoriaService()
  const fornecedorService = new FornecedorService()

  const isEditing = !!product

  useEffect(() => {
    loadCategorias()
    loadFornecedores()
  }, [])

  async function loadCategorias() {
    try {
      const data = await categoriaService.getAll()
      setCategorias(data)
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar as categorias",
        variant: "destructive",
      })
    }
  }

  async function loadFornecedores() {
    try {
      const data = await fornecedorService.getAll()
      setFornecedores(data)
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os fornecedores",
        variant: "destructive",
      })
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const data = {
        nome,
        descricao,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade),
        categoriaId: parseInt(categoriaId),
        fornecedorId: parseInt(fornecedorId),
      }

      if (isEditing && product) {
        await produtoService.update(product.id, data)
        toast({
          title: "Sucesso",
          description: "Produto atualizado com sucesso",
        })
      } else {
        await produtoService.create(data)
        toast({
          title: "Sucesso",
          description: "Produto criado com sucesso",
        })
      }
      setOpen(false)
      onSuccess?.()
    } catch (error) {
      toast({
        title: "Erro",
        description: isEditing 
          ? "Não foi possível atualizar o produto"
          : "Não foi possível criar o produto",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Editar Produto" : "Novo Produto"}</DialogTitle>
            <DialogDescription>
              {isEditing
                ? "Edite os detalhes do produto abaixo."
                : "Preencha os detalhes para criar um novo produto."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nome" className="text-right">
                Nome
              </Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="descricao" className="text-right">
                Descrição
              </Label>
              <Textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="preco" className="text-right">
                Preço
              </Label>
              <Input
                id="preco"
                type="number"
                step="0.01"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantidade" className="text-right">
                Quantidade
              </Label>
              <Input
                id="quantidade"
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoria" className="text-right">
                Categoria
              </Label>
              <Select value={categoriaId} onValueChange={setCategoriaId} required>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map((categoria) => (
                    <SelectItem key={categoria.id} value={categoria.id.toString()}>
                      {categoria.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fornecedor" className="text-right">
                Fornecedor
              </Label>
              <Select value={fornecedorId} onValueChange={setFornecedorId} required>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecione um fornecedor" />
                </SelectTrigger>
                <SelectContent>
                  {fornecedores.map((fornecedor) => (
                    <SelectItem key={fornecedor.id} value={fornecedor.id.toString()}>
                      {fornecedor.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Salvando..." : isEditing ? "Salvar alterações" : "Criar produto"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
