import {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CreateOrder from '../screens/CreateOrder';
import Orders from '../screens/Orders';
import { destroyOrder, getAllOrders, postOrder, putOrder } from '../services/orders';

export default function MainContainer(props) {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      const orderData = await getAllOrders();
      setOrders(orderData);
    }
    fetchOrders();
  }, [])

  const handleCreate = async (orderData) => {
    const newOrder = await postOrder(orderData);
    setOrders(prevState => [...prevState, newOrder]);
    history.push('/orders');
  }

  const handleUpdate = async (id, orderData) => {
    const updatedOrder = await putOrder(id, orderData);
    setOrders(prevState => prevState.map(order => {
      return order.id === Number(id) ? updatedOrder : order
    }))
    history.push('/orders');
  }

  const handleDelete = async (id) => {
    await destroyOrder(id);
    setOrders(prevState => prevState.filter(order => order.id !== id))
  }

  return (
    <div>
      <Switch>
        {/* <Route>
          {/*Edit Order*/}
        {/* </Route> */} 
        <Route path='/orders/new'>
          {/*Create Order*/}
          <CreateOrder handleCreate={handleCreate} meals={props.meals} />
        </Route>
        <Route path='/orders'>
          <Orders orders={orders} handleDelete={handleDelete} />
        </Route>
      </Switch>
    </div>
  )
}