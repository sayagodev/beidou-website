import { cn } from '@/lib/utils'
import './doc-table.css'

interface Column {
  key: string
  header: string
}

interface DocTableProps {
  columns: Column[]
  rows: Record<string, React.ReactNode>[]
  className?: string
}

export function DocTable({ columns, rows, className }: DocTableProps) {
  return (
    <div className={cn('doc-table-wrap', className)}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
