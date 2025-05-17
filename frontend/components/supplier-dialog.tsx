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

type Supplier = {
  id: number
  name: string
  contact: string
  email: string
  phone: string
  address: string
}

interface SupplierDialogProps {
  children: React.ReactNode
  supplier?: Supplier
}

export function SupplierDialog({ children, supplier }: SupplierDialogProps) {
  const [open, setOpen] = useState(false)

  const isEditing = !!supplier

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
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
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue={supplier?.name || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              Contato
            </Label>
            <Input id="contact" defaultValue={supplier?.contact || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              E-mail
            </Label>
            <Input id="email" type="email" defaultValue={supplier?.email || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Telefone
            </Label>
            <Input id="phone" defaultValue={supplier?.phone || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Endereço
            </Label>
            <Input id="address" defaultValue={supplier?.address || ""} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            {isEditing ? "Salvar alterações" : "Criar fornecedor"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
