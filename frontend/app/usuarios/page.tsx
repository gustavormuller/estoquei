import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash } from "lucide-react"
import { UserDialog } from "@/components/user-dialog"

const users = [
  { id: 1, name: "Ana Silva", email: "ana.silva@exemplo.com", type: "Administrador" },
  { id: 2, name: "Carlos Oliveira", email: "carlos.oliveira@exemplo.com", type: "Gerente" },
  { id: 3, name: "Mariana Santos", email: "mariana.santos@exemplo.com", type: "Operador" },
  { id: 4, name: "Rafael Costa", email: "rafael.costa@exemplo.com", type: "Operador" },
  { id: 5, name: "Juliana Lima", email: "juliana.lima@exemplo.com", type: "Gerente" },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Usuários</h1>
        <UserDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Usuário
          </Button>
        </UserDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar usuários..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Todos os tipos</option>
                <option value="admin">Administrador</option>
                <option value="manager">Gerente</option>
                <option value="operator">Operador</option>
              </select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.type}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <UserDialog user={user}>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                        </UserDialog>
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
