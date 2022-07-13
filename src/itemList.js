import {FaTrashAlt} from 'react-icons/fa';
import LineItems from './LineItems';
const ItemList=({items,handleCheck,handleDelete})=>{
    return(
        <ul>
            {items.map((item)=>(
              <LineItems
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              />
            ))}
          </ul>
    )
}

export default ItemList