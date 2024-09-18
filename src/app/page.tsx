"use client";

import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, Button, TableContainer } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import api from './services/api';
import 'react-toastify/dist/ReactToastify.css';
import ItemForm from './components/itemForm';

interface Item {
  id: number,
  item_id: number,
  name: string,
  refinement: number,
  price: number,
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([])
  const [editableItems, setEditableItems] = useState(items);
  const [newItem, setNewItem] = useState({
    item_id: '',
    name: '',
    refinement: '',
    price: ''
  });
  

  const getItems = async () => {
    try {
      const response = await api.get<Item[]>('/items');
      setItems(response.data);
      setEditableItems(response.data);
    } catch (err) {
      console.error('Erro:', err);
    }
  };

    // Atualiza o estado com os novos valores dos campos de entrada
    const handleInputChange = (id: number, item_id: number, field: string, value: string) => {
      setEditableItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, [field]: value } : item
        )
      );
    };
    
    // Manipulador de submissão do formulário
    const handleSubmitSave = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();

      try {
        await api.post('/items', newItem);

        toast.success('Criado com sucesso!');

        setNewItem({
          item_id: '',
          name: '',
          refinement: '',
          price: ''
        })

        getItems();
        
      } catch (error) {
        toast.error(error.response.data ?? 'Erro ao criar dados.');
      }
    };

    // Manipulador de submissão do formulário
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();

      try {
        // Substitua pela URL do seu backend
        await api.put('/items', editableItems);
        console.log('sucesso')
        toast.success('Dados atualizados com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        toast.error('Erro ao atualizar dados.');
      }
    };

    const handleDeleteClick = (id: number) => {
      // Exibe o prompt de confirmação
      const confirmed = window.confirm('Você tem certeza que deseja deletar este item?');
  
      // Se o usuário confirmar, chama a função de deletar
      if (confirmed) {
        onDelete(id);
      }
    };

    const onDelete  = async (id: string | number) => {
      try {
        await api.delete('/items/'+id);
        toast.success('Deletado com sucesso!')
        
        getItems();
      } catch (err) {
        toast.success('Ocorreu um erro!')
        console.error('Erro:', err);
      }
    }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="gritem_id grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ToastContainer />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ItemForm
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmitSave={handleSubmitSave}
        />
        <TableContainer component={Paper}>
          <form onSubmit={handleSubmit}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="bg-[#393939]">
              <TableHead sx={{ backgroundColor: '#121212' }}>
                <TableRow>
                  <TableCell className="text-white">ID</TableCell>
                  <TableCell className="text-white">Nome</TableCell>
                  <TableCell className="text-white">Refino</TableCell>
                  <TableCell className="text-white">Preço</TableCell>
                  <TableCell className="text-white"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className="bg-[#2f2f2f]"
                  >
                    <TableCell component="th" scope="row" className="text-[#aeaeff] font-bold">
                      <a 
                        href={`https://historyreborn.net/?module=item&action=view&id=${row.item_id}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {row.item_id}
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
                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#fff',
                          },
                          '& .MuiInput-underline:hover:before': {
                            borderBottomColor: '#f00',
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#aeaeff',
                          },
                        }}
                        onChange={(e) => handleInputChange(row.id, row.item_id, 'refinement', e.target.value)}
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
                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#fff',
                          },
                          '& .MuiInput-underline:hover:before': {
                            borderBottomColor: '#f00',
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#aeaeff',
                          },
                        }}
                        onChange={(e) => handleInputChange(row.id, row.item_id, 'price', e.target.value)}
                      />
                    </TableCell>
                    <TableCell className="text-gray-300">
                      <Button onClick={() => handleDeleteClick(row.id)}>
                        <DeleteIcon sx={{ color: '#f86b6b' }}/>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </form>
        </TableContainer>
        <Button
          onClick={handleSubmit}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 self-center"
        >
          Salvar
          <CheckIcon />
        </Button>
      </main>
    </div>
  );
}
