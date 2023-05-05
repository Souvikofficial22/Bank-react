import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Bank from './Components/Bank/Bank';
import UpdateForm from './Components/Bank/ListOfBanks/UpdateForm/UpdateForm';
import AddBank from './Components/Bank/BankAddButton/AddBank/AddBank';
import Customer from './Components/AdminDashboard/Customer/Customer';
import UpdateCustomer from './Components/AdminDashboard/Customer/ListOfCustomer/UpdateCustomer/UpdateCustomer';
import AddCustomer from './Components/AdminDashboard/Customer/ButtonComponent/AddCustomer/AddCustomer';
import Account from './Components/AdminDashboard/Account/Account';
import AddAccount from './Components/AdminDashboard/Account/ButtonComponent/AddAccount/AddAccount';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Accounts from './Components/UserDashboard/Accounts/Accounts';
import Passbook from './Components/UserDashboard/Accounts/ListOfAccount/Passbook/Passbook';
import Transaction from './Components/UserDashboard/Transaction/Transaction';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/admindashboard/:username/:role" element={<AdminDashboard />} />
        <Route exact path="/bank/:username/:role" element={<Bank />} />
        <Route exact path="/bank/update/:username/:role/:bankid" element = {<UpdateForm />} />
        <Route exact path="/bank/add/:username/:role" element = {<AddBank />} />
        <Route exact path="/customer/:username/:role" element = {<Customer />} />
        <Route exact path="/customer/update/:username/:role/:custid" element = {<UpdateCustomer />} />
        <Route exact path="/customer/add/:username/:role" element = {<AddCustomer />} />
        <Route exact path="/account/:username/:role" element = {<Account />} />
        <Route exact path="/account/add/:username/:role" element = {<AddAccount />} />
        <Route exact path="/userdashboard/:userid/:username/:role" element={<UserDashboard />} />
        <Route exact path="/account/:userid/:username/:role" element = {<Accounts />} />
        <Route exact path="/passbook/:userid/:username/:role/:accnum" element = {<Passbook />} />
        <Route exact path="/transaction/:userid/:username/:role/:accnum" element = {<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
