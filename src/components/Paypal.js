import React, { useRef, useEffect, useContext,useState } from "react";
import {useNavigate} from 'react-router-dom'
import {DataContext} from './DataProvider';


export default function Paypal() {
    const navigate = useNavigate();
    const value = useContext(DataContext);
    const [payorders,setPayorders] = value.payorders;
    const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `name: ${payorders.name},  address: ${payorders.address}`,
                amount: {
                  currency_code: "USD",
                  value: payorders.total,
                },
                shipping: {
                    address : {
                        address_line_1: payorders.address,
                        admin_area_1: 'Da Nang',
                        admin_area_2: 'Viet Nam',
                        country_code: 'US',
                        postal_code: '95131'

                    },
                    name: {
                        full_name : payorders.name
                    }
                }
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          if(order.status ==="COMPLETED") {
              navigate('/buyer/info/manageorder/all')
          }
         
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}