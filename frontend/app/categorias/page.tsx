import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash } from "lucide-react"
import { CategoryDialog } from "@/components/category-dialog"

const categories = [
  { id: 1, name: "Eletrônicos", description: "Produtos eletrônicos em geral", active: true },
  { id: 2, name: "Periféricos", description: "Periféricos para computadores", active: true },
  { id: 3, name: "Áudio", description: "Equipamentos de áudio", active: true },
  { id: 4, name: "Armazenamento", description: "Dispositivos de armazenamento", active: true },
  { id: 5, name: "Cabos", description: "Cabos e adaptadores", active: false },
]

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Categorias</h1>
        <CategoryDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Categoria
          </Button>
        </CategoryDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar categorias..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Todos os status</option>
                <option value="active">Ativas</option>
                <option value="inactive">Inativas</option>
              </select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell>
                      {category.active ? (
                        <Badge className="bg-[#10B981]">Ativa</Badge>
                      ) : (
                        <Badge variant="secondary">Inativa</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CategoryDialog category={category}>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                        </CategoryDialog>
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
