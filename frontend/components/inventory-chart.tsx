"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "01/05", entradas: 12, saidas: 8 },
  { name: "02/05", entradas: 19, saidas: 14 },
  { name: "03/05", entradas: 5, saidas: 10 },
  { name: "04/05", entradas: 8, saidas: 7 },
  { name: "05/05", entradas: 15, saidas: 12 },
  { name: "06/05", entradas: 6, saidas: 9 },
  { name: "07/05", entradas: 11, saidas: 8 },
  { name: "08/05", entradas: 14, saidas: 11 },
  { name: "09/05", entradas: 9, saidas: 7 },
  { name: "10/05", entradas: 7, saidas: 5 },
  { name: "11/05", entradas: 13, saidas: 9 },
  { name: "12/05", entradas: 10, saidas: 8 },
  { name: "13/05", entradas: 8, saidas: 6 },
  { name: "14/05", entradas: 12, saidas: 10 },
]

export function InventoryChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="entradas" name="Entradas" fill="#1D4ED8" />
        <Bar dataKey="saidas" name="Saídas" fill="#F59E0B" />
      </BarChart>
    </ResponsiveContainer>
  )
}
