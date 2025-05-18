"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MovimentacaoService, Movimentacao } from "@/lib/services/movimentacao.service"
import { useToast } from "@/components/ui/use-toast"
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react"

export default function MovementsPage() {
  const [movements, setMovements] = useState<Movimentacao[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  const movimentacaoService = new MovimentacaoService()

  async function loadMovements() {
    try {
      setIsLoading(true)
      const data = await movimentacaoService.getAll()
      setMovements(data)
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os movimentos",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadMovements()
  }, [])

  const filteredMovements = movements.filter((movement) =>
    movement.produtoId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Movimentações</h1>
      </div>

      <div className="mb-4">
        <Input
          placeholder="Buscar por produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Observação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Carregando...
                </TableCell>
              </TableRow>
            ) : filteredMovements.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Nenhum movimento encontrado
                </TableCell>
              </TableRow>
            ) : (
              filteredMovements.map((movement) => (
                <TableRow key={movement.id}>
                  <TableCell>
                    {new Date(movement.data).toLocaleString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                        {movement.tipo === "ENTRADA" ? (
                        <ArrowUpCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDownCircle className="h-4 w-4 text-orange-600" />
                      )}
                      <span className="capitalize">{movement.tipo}</span>
                    </div>
                  </TableCell>
                  <TableCell>{movement.produtoId}</TableCell>
                  <TableCell>{movement.quantidade}</TableCell>
                  <TableCell>{movement.observacao}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 