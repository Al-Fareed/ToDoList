import { useRef } from "react"
import { FaPlus } from "react-icons/fa"
const AddItem=({newItem,setNewItem,handleSubmit})=>{
    const inputRef=useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit} >
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Add Items" 
                id="addItem" 
                required 
                value={newItem}
                autoFocus
                onChange={(e)=>setNewItem(e.target.value)}
            />
            <button 
                type="submit" 
                aria-label="Add Item"
                onClick={()=>inputRef.current.focus()}
                ><FaPlus/> 
            </button>
        </form>
    )
} 
export default AddItem