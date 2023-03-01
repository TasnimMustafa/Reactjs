import {React,useState} from 'react'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import {FilterMatchMode} from "primereact/api";
import {InputText} from "primereact/inputtext";

function App() {
  const data = [
      {
    id:1,
    name:'tasnim',
    age:"24",
    city:"mansoura"
    },
    {
      id:2,
      name:'reem',
      age:"24",
      city:"mansoura"
    },
    {
      id:3,
      name:'rana',
      age:"24",
      city:"mansoura"
    },
    {
      id:4,
      name:'MERNA',
      age:"22",
      city:"mansoura"
    },
    {
      id:5,
      name:'ali',
      age:"24",
      city:"mansoura"
    },
    {
      id:6,
      name:'mohammed',
      age:"24",
      city:"mansoura"
    },
  ];

  const [filters,setFilters] = useState({
      global: {value:null, matchMode:FilterMatchMode.CONTAINS}
  });


  return (
    <div className="App">

        <InputText onInput={(e)=>
        setFilters({
            global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
        })
        }/>
      <DataTable value={data} sortMode={"multiple"} filters={filters} paginator rows={2} rowsPerPageOptions={[1,2,3]} totalRecords={6}>
        <Column field='id' header='ID' sortable/>
        <Column field='name' header='Name' sortable/>
        <Column field='age' header='Age' sortable/>
        <Column field='city' header='City' sortable/>
      </DataTable>
    </div>
  );
}

export default App;
