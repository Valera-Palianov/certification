import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IRootReducer } from '@/types/rootReducer'
import { locationsSortChange } from '@redux/locations/actions'
import Radio from '@components/Radio'

const Sort: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className}) => {

  const locations = useSelector((state: IRootReducer) => state.locations)
  const dispath = useDispatch()

  const sortChangeHandler = (index: number) => {
    dispath(locationsSortChange(index))
  }

  const buttons = locations.sortings.map((button, i) => {
    const isChecked = locations.currentSort === i
    return (
      <label key={i}>
        <input name="sort" type="radio" value={i} checked={isChecked} onChange={() => sortChangeHandler(i)}/>
        <span>{button}</span>
      </label>
    )
  })

  return <Radio className={className}>{buttons}</Radio>
}

export default Sort