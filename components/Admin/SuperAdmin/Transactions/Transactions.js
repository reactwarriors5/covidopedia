import React from 'react';
import {
  faUserGraduate,
  faLayerGroup,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import TransactionData from '../TransactionData/TransactionData';


const TransactionsData = [
  {
    title: "Total Patients",
    totalNumbers: "208",
    icon: faUserGraduate,
  },
  {
    title: "Today's Appointments",
    totalNumbers: "18",
    icon: faLayerGroup,
  },
  {
    title: "Total Revenues",
    totalNumbers: "20K",
    icon: faDollarSign,
  },
];
const Transactions = () => {
    return (
        <div>
            <section className="w-full h-full">
                <div className="grid grid-cols-1 gap-8 p-10 pb-6 mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
                    {TransactionsData.map((transactionInfo) => (
                        <TransactionData
                        transactionInfo={transactionInfo}
                          
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Transactions;