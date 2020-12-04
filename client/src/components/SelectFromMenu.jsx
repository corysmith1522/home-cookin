import React, { Fragment, useState } from 'react';
import './SelectFromMenu.css'


export default function SelectFromMenu() {
  const checkboxesList = [
    'Hot Honey Chicken',
    'Hawaiian Pork Bowl',
    'Black Bean Enchiladas',
    'Parmesan Chicken Spaghetti',
    'BBQ Chicken Bowl',
    'Steak and Potatoes',
    'Pork a la Balsamic Fig',
    'Pineapple Chicken Tacos',
    'Thai Chili Pork',
    'Chicken Shawarma',
  ];

  const getDefaultCheckboxes = () =>
    checkboxesList.map(checkbox => ({
      name: checkbox,
      checked: false,
    }));
  
    const [checkboxes, setCheckboxes] = useState(
      getDefaultCheckboxes(),
    );

    const setCheckbox = (index, checked) => {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index].checked = checked;
      setCheckboxes(newCheckboxes);
    }

  return (
    <div className='order-menu-checkboxes'>
      {checkboxes.map((checkbox, i) => (
        <Fragment key={checkbox[i]}>
        <div className='selections'>
          <input
          type="checkbox"
          checked={checkbox.checked}
          value={checkboxes || []}
          onChange={e => {
            setCheckbox(i, e.target.checked)
          }}
        />
          <span className='order-menu-item-names'>{checkbox.name}</span>
          </div>
          </Fragment>
      ))}
    </div>
  )
}