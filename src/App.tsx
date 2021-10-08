import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'

const App = () =>{
  
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  
  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(()=>{
    let incomeSum = 0;
    let expenseSum = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense)
        expenseSum += filteredList[i].value;
      else
        incomeSum += filteredList[i].value;
    }

    setIncome(incomeSum);
    setExpense(expenseSum);

  }, [filteredList])

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item)=>{
    let newList = [...list]
    newList.push(item);
    setList(newList);
  }

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

          {/* Área de informações */}
          <InfoArea 
            currentMonth={currentMonth} 
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />

          {/* Área de iserção */}
          <InputArea onAdd={handleAddItem} />

          {/* Tabela de itens */}
          <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;