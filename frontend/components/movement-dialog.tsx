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
import { toast } from "@/components/ui/use-toast"

type Product = {
  id: number
  code: string
  name: string
  price: number
  quantity: number
  category: string
  supplier: string
}

interface MovementDialogProps {
  children: React.ReactNode
  product: Product
  type: "entrada" | "saida"
}

export function MovementDialog({ children, product, type }: MovementDialogProps) {
  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = () => {
    if (type === "saida" && quantity > product.quantity) {
      toast({
        variant: "destructive",
        title: "Erro na movimentação",
        description: "A quantidade de saída não pode ser maior que o estoque atual.",
      })
      return
    }

    // Aqui seria feita a lógica para registrar a movimentação
    toast({
      title: "Movimentação registrada",
      description: `${type === "entrada" ? "Entrada" : "Saída"} de ${quantity} unidades de ${product.name} registrada com sucesso.`,
    })

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{type === "entrada" ? "Registrar Entrada" : "Registrar Saída"}</DialogTitle>
          <DialogDescription>
            {type === "entrada"
              ? "Registre a entrada de novos itens no estoque."
              : "Registre a saída de itens do estoque."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Produto</Label>
            <div className="col-span-3 font-medium">
              {product.name} ({product.code})
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Estoque Atual</Label>
            <div className="col-span-3">{product.quantity} unidades</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantidade
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Observações
            </Label>
            <Textarea id="notes" placeholder="Observações sobre a movimentação" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            {type === "entrada" ? "Registrar Entrada" : "Registrar Saída"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
