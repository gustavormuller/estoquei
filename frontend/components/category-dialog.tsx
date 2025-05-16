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
import { Switch } from "@/components/ui/switch"

type Category = {
  id: number
  name: string
  description: string
  active: boolean
}

interface CategoryDialogProps {
  children: React.ReactNode
  category?: Category
}

export function CategoryDialog({ children, category }: CategoryDialogProps) {
  const [open, setOpen] = useState(false)

  const isEditing = !!category

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar Categoria" : "Nova Categoria"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Edite os detalhes da categoria abaixo."
              : "Preencha os detalhes para criar uma nova categoria."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue={category?.name || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>
            <Textarea id="description" defaultValue={category?.description || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="active" className="text-right">
              Ativa
            </Label>
            <div className="col-span-3 flex items-center">
              <Switch id="active" defaultChecked={category?.active ?? true} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            {isEditing ? "Salvar alterações" : "Criar categoria"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
