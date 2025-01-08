import {IState} from "../interfaces/interfaces.ts";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent} from "react";
import {setFilterForm} from "../actions/actionCreators.ts";

function FilterForm() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: IState) => state.filterTasks)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterForm(event.target.value));
  }

  return (
    <div className="filter-form">
      <h2>Поиск по названию</h2>
      <input className="input" onChange={onChange} type="search" name="filterTasks" value={inputValue} />
    </div>
  )
}

export default FilterForm;