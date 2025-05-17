import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash, Phone, Mail, MapPin } from "lucide-react"
import { SupplierDialog } from "@/components/supplier-dialog"

const suppliers = [
  {
    id: 1,
    name: "TechSupply",
    contact: "João Silva",
    email: "contato@techsupply.com",
    phone: "(11) 98765-4321",
    address: "Av. Paulista, 1000, São Paulo - SP",
  },
  {
    id: 2,
    name: "GamerGear",
    contact: "Maria Oliveira",
    email: "contato@gamergear.com",
    phone: "(11) 91234-5678",
    address: "Rua Augusta, 500, São Paulo - SP",
  },
  {
    id: 3,
    name: "SoundMaster",
    contact: "Pedro Santos",
    email: "contato@soundmaster.com",
    phone: "(11) 95555-9999",
    address: "Av. Rebouças, 200, São Paulo - SP",
  },
  {
    id: 4,
    name: "InfoTech",
    contact: "Ana Costa",
    email: "contato@infotech.com",
    phone: "(11) 93333-7777",
    address: "Rua Vergueiro, 800, São Paulo - SP",
  },
]

export default function SuppliersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Fornecedores</h1>
        <SupplierDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Fornecedor
          </Button>
        </SupplierDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Fornecedores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar fornecedores..." className="pl-8" />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead className="hidden md:table-cell">E-mail</TableHead>
                  <TableHead className="hidden md:table-cell">Telefone</TableHead>
                  <TableHead className="hidden lg:table-cell">Endereço</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell className="font-medium">{supplier.name}</TableCell>
                    <TableCell>{supplier.contact}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        {supplier.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        {supplier.phone}
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        {supplier.address}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <SupplierDialog supplier={supplier}>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                        </SupplierDialog>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Excluir</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
