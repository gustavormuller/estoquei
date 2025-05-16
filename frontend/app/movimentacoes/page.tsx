import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowUpCircle, ArrowDownCircle, Calendar } from "lucide-react"

const movements = [
  {
    id: 1,
    date: "2023-05-01",
    product: 'Monitor LED 24"',
    type: "entrada",
    quantity: 5,
    user: "Ana Silva",
    notes: "Reposição de estoque",
  },
  {
    id: 2,
    date: "2023-05-02",
    product: "Teclado Mecânico",
    type: "saida",
    quantity: 2,
    user: "Carlos Oliveira",
    notes: "Venda para cliente",
  },
  {
    id: 3,
    date: "2023-05-03",
    product: "Mouse Sem Fio",
    type: "saida",
    quantity: 3,
    user: "Mariana Santos",
    notes: "Venda para cliente",
  },
  {
    id: 4,
    date: "2023-05-04",
    product: "SSD 500GB",
    type: "entrada",
    quantity: 10,
    user: "Rafael Costa",
    notes: "Compra de fornecedor",
  },
  {
    id: 5,
    date: "2023-05-05",
    product: "Headset Gamer",
    type: "saida",
    quantity: 1,
    user: "Juliana Lima",
    notes: "Venda para cliente",
  },
]

export default function MovementsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Movimentações</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Movimentações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar movimentações..." className="pl-8" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Todos os tipos</option>
                <option value="entrada">Entradas</option>
                <option value="saida">Saídas</option>
              </select>
              <div className="flex items-center gap-2 h-10 rounded-md border border-input bg-background px-3 py-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Input type="date" className="border-0 p-0 shadow-none focus-visible:ring-0" />
              </div>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead className="hidden md:table-cell">Usuário</TableHead>
                  <TableHead className="hidden md:table-cell">Observações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {movements.map((movement) => (
                  <TableRow key={movement.id}>
                    <TableCell>{new Date(movement.date).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell className="font-medium">{movement.product}</TableCell>
                    <TableCell>
                      {movement.type === "entrada" ? (
                        <Badge className="bg-[#10B981] flex items-center gap-1 w-fit">
                          <ArrowUpCircle className="h-3 w-3" />
                          Entrada
                        </Badge>
                      ) : (
                        <Badge className="bg-[#F59E0B] flex items-center gap-1 w-fit">
                          <ArrowDownCircle className="h-3 w-3" />
                          Saída
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{movement.quantity}</TableCell>
                    <TableCell className="hidden md:table-cell">{movement.user}</TableCell>
                    <TableCell className="hidden md:table-cell">{movement.notes}</TableCell>
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
