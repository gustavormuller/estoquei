"use client"

import type React from "react"
import { useState } from "react"
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
import { FornecedorService, Fornecedor } from "@/lib/services/fornecedor.service"
import { useToast } from "@/components/ui/use-toast"

interface SupplierDialogProps {
  children: React.ReactNode
  supplier?: Fornecedor
  onSuccess?: () => void
}

export function SupplierDialog({ children, supplier, onSuccess }: SupplierDialogProps) {
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState(supplier?.nome || "")
  const [email, setEmail] = useState(supplier?.email || "")
  const [telefone, setTelefone] = useState(supplier?.telefone || "")
  const [endereco, setEndereco] = useState(supplier?.endereco || "")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const fornecedorService = new FornecedorService()

  const isEditing = !!supplier

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const data = { nome, email, telefone, endereco }

      if (isEditing && supplier) {
        await fornecedorService.update(supplier.id, data)
        toast({
          title: "Sucesso",
          description: "Fornecedor atualizado com sucesso",
        })
      } else {
        await fornecedorService.create(data)
        toast({
          title: "Sucesso",
          description: "Fornecedor criado com sucesso",
        })
      }
      setOpen(false)
      onSuccess?.()
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 
        (isEditing 
          ? "Não foi possível atualizar o fornecedor"
          : "Não foi possível criar o fornecedor")
      
      toast({
        title: "Erro",
        description: errorMessage,
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
            <DialogTitle>{isEditing ? "Editar Fornecedor" : "Novo Fornecedor"}</DialogTitle>
            <DialogDescription>
              {isEditing
                ? "Edite os detalhes do fornecedor abaixo."
                : "Preencha os detalhes para criar um novo fornecedor."}
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
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="telefone" className="text-right">
                Telefone
              </Label>
              <Input
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="endereco" className="text-right">
                Endereço
              </Label>
              <Textarea
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Salvando..." : isEditing ? "Salvar alterações" : "Criar fornecedor"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
