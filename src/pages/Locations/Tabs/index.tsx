import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IRootReducer } from '@/types/rootReducer'
import { locationsCityChange } from '@redux/locations/actions'
import Radio from '@components/Radio'

const Tabs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className}) => {

  const locations = useSelector((state: IRootReducer) => state.locations)
  const dispath = useDispatch()

  const cityChangeHandler = (index: number) => {
    dispath(locationsCityChange(index))
  }

  const buttons = locations.default.map((button, i) => {
    const isChecked = locations.current === i
    return (
      <label key={button.title}>
        <input name="city" type="radio" value={i} checked={isChecked} disabled={locations.listState.loading} onChange={() => cityChangeHandler(i)}/>
        <span>{button.title}</span>
      </label>
    )
  })

  return <Radio className={className}>{buttons}</Radio>
}

export default Tabs