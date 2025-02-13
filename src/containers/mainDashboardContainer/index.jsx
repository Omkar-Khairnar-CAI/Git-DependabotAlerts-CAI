import React from 'react'
import {ChartContainer} from '../index'
import {DashboardTable} from '../../components'

const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
  ]
  
export const MainDashboardContainer = () => {
  return (
    <div>
        <ChartContainer/>
        <DashboardTable data={items} />
    </div>
  )
}

