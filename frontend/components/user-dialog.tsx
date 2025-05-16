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

type User = {
  id: number
  name: string
  email: string
  type: string
}

interface UserDialogProps {
  children: React.ReactNode
  user?: User
}

export function UserDialog({ children, user }: UserDialogProps) {
  const [open, setOpen] = useState(false)

  const isEditing = !!user

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar Usuário" : "Novo Usuário"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Edite os detalhes do usuário abaixo." : "Preencha os detalhes para criar um novo usuário."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue={user?.name || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              E-mail
            </Label>
            <Input id="email" type="email" defaultValue={user?.email || ""} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Tipo
            </Label>
            <Select defaultValue={user?.type || "operator"}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Administrador">Administrador</SelectItem>
                <SelectItem value="Gerente">Gerente</SelectItem>
                <SelectItem value="Operador">Operador</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {!isEditing && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Senha
              </Label>
              <Input id="password" type="password" className="col-span-3" />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            {isEditing ? "Salvar alterações" : "Criar usuário"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
