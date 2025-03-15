
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom"
const stripePromise = loadStripe("pk_test_51QwpCPDAqyOG2MYRjt3711WBL8UMATXgos97yxxLpkougY0osUw28LgeRs2ZoJHimdUxCOEX79zOEGIN1p7EcuHt00RRCjoSSh");

createRoot(document.getElementById('root')).render(


  <Elements stripe={stripePromise}>
            <BrowserRouter><App/></BrowserRouter>
          </Elements>
)
