import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Tag, Truck, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InventoryChart } from "@/components/inventory-chart"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
            <Package className="h-4 w-4 text-[#1D4ED8]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categorias</CardTitle>
            <Tag className="h-4 w-4 text-[#F59E0B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+2 novas categorias este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fornecedores</CardTitle>
            <Truck className="h-4 w-4 text-[#1D4ED8]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+3 novos fornecedores este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos com Estoque Baixo</CardTitle>
            <AlertTriangle className="h-4 w-4 text-[#EF4444]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Necessitam reposição urgente</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-5">
          <CardHeader>
            <CardTitle>Movimentações Recentes</CardTitle>
            <CardDescription>Entradas e saídas de produtos nos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <InventoryChart />
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Entradas Recentes</CardTitle>
              <TrendingUp className="h-4 w-4 text-[#10B981]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">Produtos adicionados nos últimos 30 dias</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Saídas Recentes</CardTitle>
              <TrendingDown className="h-4 w-4 text-[#F59E0B]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96</div>
              <p className="text-xs text-muted-foreground">Produtos retirados nos últimos 30 dias</p>
            </CardContent>
          </Card>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Atenção!</AlertTitle>
            <AlertDescription>8 produtos estão com estoque abaixo do mínimo recomendado.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
