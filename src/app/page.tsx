import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from "next/image";
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";

function createData(
  id: number,
  name: string,
  refinement: number,
  price: number,
) {
  return { id, name, refinement, price };
}

const rows = [
  createData(6608, 'Mana Coagulada', 0, 5),
  createData(38070, '[Normal] Cristal de Bio 5', 0, 1),
  createData(4392, 'Carta Dama da Guarda', 0, 2000),
  createData(50086, '[1000] Moeda de Pontos MvP', 0, 4000),
  createData(27361, 'Contaminated Wanderer Card', 0, 2500),
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#121212' }}>
            <TableRow>
              <TableCell className="text-white">ID</TableCell>
              <TableCell className="text-white">Nome</TableCell>
              <TableCell className="text-white">Refino</TableCell>
              <TableCell className="text-white">Preço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="bg-[#2f2f2f]"
              >
                <TableCell component="th" scope="row" className="text-gray-300">
                  <a 
                    href={`https://historyreborn.net/?module=item&action=view&id=${row.id}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {row.id}
                  </a>
                </TableCell>
                <TableCell className="text-gray-300">{row.name}</TableCell>
                <TableCell className="text-gray-300">
                  <TextField
                    variant="standard"
                    style={{ color: "#fff" }}
                    defaultValue={row.refinement}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </TableCell>
                <TableCell className="text-white">
                  <TextField
                    variant="standard"
                    style={{ color: "#fff" }}
                    defaultValue={row.price}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        <div className="flex gap-4 items-center flex-col sm:flex-row self-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            /> */}
            Salvar
            <CheckIcon />
          </a>
        </div>
      </main>
    </div>
  );
}
