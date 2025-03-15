
import dotenv from "dotenv";
dotenv.config();
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD
const STRIPE_SECRET_KEY ="sk_test_51QwpCPDAqyOG2MYRH4oBus4bzxaJyd8L30XQVoFMCs6TM2s28KDboqKdfUcwvAQEoPwUaIANsI570p8WawP110a400KNFe0azH"
export default {
   JWT_USER_PASSWORD,
   JWT_ADMIN_PASSWORD,
   STRIPE_SECRET_KEY
};

