import {useState, useEffect} from 'react';
import { Switch } from 'react-router-dom';
import Orders from '../screens/Orders';
import { getAllOrders } from '../services/orders';

export default function MainContainer(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orderData = await getAllOrders();
      setOrders(orderData);
    }
    fetchOrders();
  }, [])
  return (
    <div>
      <Orders orders={orders} />
      <Switch>
        
      </Switch>
    </div>
  )
}