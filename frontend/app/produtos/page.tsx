import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash, ArrowUpCircle, ArrowDownCircle } from "lucide-react"
import { ProductDialog } from "@/components/product-dialog"
import { MovementDialog } from "@/components/movement-dialog"

const products = [
  {
    id: 1,
    code: "P001",
    name: 'Monitor LED 24"',
    price: 899.9,
    quantity: 15,
    category: "Eletrônicos",
    supplier: "TechSupply",
  },
  {
    id: 2,
    code: "P002",
    name: "Teclado Mecânico",
    price: 349.9,
    quantity: 8,
    category: "Periféricos",
    supplier: "GamerGear",
  },
  {
    id: 3,
    code: "P003",
    name: "Mouse Sem Fio",
    price: 129.9,
    quantity: 3,
    category: "Periféricos",
    supplier: "GamerGear",
  },
  {
    id: 4,
    code: "P004",
    name: "Headset Gamer",
    price: 299.9,
    quantity: 12,
    category: "Áudio",
    supplier: "SoundMaster",
  },
  {
    id: 5,
    code: "P005",
    name: "SSD 500GB",
    price: 449.9,
    quantity: 20,
    category: "Armazenamento",
    supplier: "TechSupply",
  },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Produtos</h1>
        <ProductDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </ProductDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar produtos..." className="pl-8" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Todas as categorias</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="perifericos">Periféricos</option>
                <option value="audio">Áudio</option>
                <option value="armazenamento">Armazenamento</option>
              </select>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Todos os fornecedores</option>
                <option value="techsupply">TechSupply</option>
                <option value="gamergear">GamerGear</option>
                <option value="soundmaster">SoundMaster</option>
              </select>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Estoque</option>
                <option value="low">Estoque baixo</option>
                <option value="normal">Estoque normal</option>
                <option value="high">Estoque alto</option>
              </select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Fornecedor</TableHead>
                  <TableHead className="w-[180px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.code}</TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {product.quantity}
                        {product.quantity <= 5 && <Badge variant="destructive">Baixo</Badge>}
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.supplier}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <ProductDialog product={product}>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                        </ProductDialog>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Excluir</span>
                        </Button>
                        <MovementDialog product={product} type="entrada">
                          <Button variant="ghost" size="icon" className="text-[#10B981]">
                            <ArrowUpCircle className="h-4 w-4" />
                            <span className="sr-only">Entrada</span>
                          </Button>
                        </MovementDialog>
                        <MovementDialog product={product} type="saida">
                          <Button variant="ghost" size="icon" className="text-[#F59E0B]">
                            <ArrowDownCircle className="h-4 w-4" />
                            <span className="sr-only">Saída</span>
                          </Button>
                        </MovementDialog>
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
