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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Product = {
  id: number
  code: string
  name: string
  price: number
  quantity: number
  category: string
  supplier: string
}

interface ProductDialogProps {
  children: React.ReactNode
  product?: Product
}

export function ProductDialog({ children, product }: ProductDialogProps) {
  const [open, setOpen] = useState(false)

  const isEditing = !!product

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar Produto" : "Novo Produto"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Edite os detalhes do produto abaixo." : "Preencha os detalhes para criar um novo produto."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="code" className="text-right">
              Código
            </Label>
            <Input id="code" defaultValue={product?.code || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue={product?.name || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Preço (R$)
            </Label>
            <Input id="price" type="number" step="0.01" defaultValue={product?.price || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantidade
            </Label>
            <Input id="quantity" type="number" defaultValue={product?.quantity || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Categoria
            </Label>
            <Select defaultValue={product?.category || ""}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Eletrônicos">Eletrônicos</SelectItem>
                <SelectItem value="Periféricos">Periféricos</SelectItem>
                <SelectItem value="Áudio">Áudio</SelectItem>
                <SelectItem value="Armazenamento">Armazenamento</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="supplier" className="text-right">
              Fornecedor
            </Label>
            <Select defaultValue={product?.supplier || ""}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecione o fornecedor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TechSupply">TechSupply</SelectItem>
                <SelectItem value="GamerGear">GamerGear</SelectItem>
                <SelectItem value="SoundMaster">SoundMaster</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            {isEditing ? "Salvar alterações" : "Criar produto"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
