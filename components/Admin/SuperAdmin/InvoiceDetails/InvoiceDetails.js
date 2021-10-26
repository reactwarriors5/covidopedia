import React from "react";

const InvoiceInfo = [
    {
        "name": "Richard Wilson",
        "InvoiceNo": "#ptoo1",
        "Amount": "$460",
        "Date": "14 Nov 2019"
    },
    {
        "name": "Richard Wilson",
        "InvoiceNo": "#ptoo1",
        "Amount": "$460",
        "Date": "14 Nov 2019"
    },
    {
        "name": "Richard Wilson",
        "InvoiceNo": "#ptoo1",
        "Amount": "$460",
        "Date": "14 Nov 2019"
    },
    {
        "name": "Richard Wilson",
        "InvoiceNo": "#ptoo1",
        "Amount": "$460",
        "Date": "14 Nov 2019"
    },
    {
        "name": "Richard Wilson",
        "InvoiceNo": "#ptoo1",
        "Amount": "$460",
        "Date": "14 Nov 2019"
    },
]

const InvoiceDetails = () => {

    return (
        <>
            <section>
                <div className="items-center">

                    <div
                        className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto"
                    >
                        <table
                            className="w-full whitespace-nowrap"
                        >
                            <thead>
                                <tr
                                    className="h-16 w-full text-sm leading-none text-gray-800"
                                >
                                    <th className=" text-left font-bold ">Invoice No</th>
                                    <th className=" text-left 2 font-bold">Patient</th>
                                    <th className=" text-left 2 font-bold">Amount</th>
                                    <th className=" text-left pl-20 font-bold">Paid on</th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                {
                                    InvoiceInfo.map((invoice) => {
                                        return (
                                            <>
                                                <tr
                                                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                                                >
                                                    
                                                    <td className="2">
                                                        <p
                                                            className="text-sm font-medium leading-none text-gray-800"
                                                        >{invoice.InvoiceNo}
                                                        </p>
                                                    </td>
                                                    <td className=" cursor-pointer">
                                                        <div className="flex items-center">
                                                            <div className="">
                                                                <p className="font-medium">{invoice.name}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="2">
                                                        <p className="font-medium">{invoice.Amount}</p>

                                                    </td>
                                                    <td className="pl-20">
                                                        <p className="font-medium">{invoice.Date}</p>
                                                    </td>
                                                    <td className="px-7 2xl:px-0">
                                                        <button
                                                      
                                                            class=" mr-2 bg-green-100 hover:bg-grey  font-normal py-2 px-1 rounded inline-flex items-center"
                                                        >
                                                            <svg
                                                                className="mr-2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                class="bi bi-eye"
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                                />
                                                                <path
                                                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                                />
                                                            </svg>
                                                            <span>View</span>
                                                        </button>
                                                        <button
                                                       
                                                            class="bg-blue-200 hover:bg-grey  font-normal py-2 px-1 rounded inline-flex items-center"
                                                        >
                                                            <svg
                                                                className="mr-2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                class="bi bi-printer"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                                                />
                                                                <path
                                                                    d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"
                                                                />
                                                            </svg>
                                                            <span>Print</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InvoiceDetails;