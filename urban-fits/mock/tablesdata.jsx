import Image from "next/image";

import tableAvatarMan1 from "@/public/tableAvatarMan1.png";
import tableAvatarMan2 from "@/public/tableAvatarMan2.png";
import tableAvatarMan3 from "@/public/tableAvatarMan3.png";
import tableAvatarGirl1 from "@/public/tableAvatarGirl1.png";
import tableAvatarGirl2 from "@/public/tableAvatarGirl2.png";
import smartWatch from "@/public/smartWatch.png";
import sneakers from "@/public/sneakers.png";

import ActionButton from "@/components/GenericTables/ActionButton";
import StatusBadge from "@/components/GenericTables/StatusBadge";
import { VisaIcon } from "@/public/icons/VisaIcon";
import { AmexIcon } from "@/public/icons/AmexIcon";
import { MastercardIcon } from "@/public/icons/MastercardIcon";
import { Dots3Icon } from "@/public/icons/Dots3Icon";

export const userListTableColumns = [
  {
    accessor: "profile",
    Header: "Profile",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "name",
    Header: "Name",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "email",
    Header: "Email",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "phone",
    Header: "Phone",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "totalbuy",
    Header: "Total Buy",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "joinon",
    Header: "Join On",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const userListTableData = [
  {
    profile: <Image src={tableAvatarMan1} />,
    name: "John",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl1} />,
    name: "Artur",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl2} />,
    name: "Arthur",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan2} />,
    name: "Doe John",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan3} />,
    name: "Willson",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan1} />,
    name: "Dikra Willson",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl1} />,
    name: "Sara Khan",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarGirl2} />,
    name: "Natellie",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
  {
    profile: <Image src={tableAvatarMan2} />,
    name: "Mark Gomis",
    email: "Bilawalashraf@gmail.com",
    phone: "+91-989-325-8652",
    totalbuy: "1845",
    status: "Active",
    joinon: "Active",
    action: <ActionButton />,
  },
];

export const newOrderTableColumns = [
  {
    accessor: "id",
    Header: "ID",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "item",
    Header: "Item",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "customer",
    Header: "Customer",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "quantity",
    Header: "Quantity",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "price",
    Header: "Price",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "payment",
    Header: "Payment",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "date",
    Header: "Date",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const newOrderTableData = [
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton infoLink="orderdetails" />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Ali </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Ali </p>
        <p className="font-[300]"> Ali@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ontheway" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="pending" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    item: (
      <span className="flex gap-[10px] items-center text-[14px] font-[400] ">
        <Image src={smartWatch} /> <p className=" ">Smart Watch </p>{" "}
        <p> </p>
      </span>
    ),
    customer: (
      <span className="text-[14px] ">
        <p className="font-[400] "> Bilawal Ashraf </p>
        <p className="font-[300]"> Bilawalashraf@gmail.com</p>
      </span>
    ),
    quantity: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] ">PAID</p>,
    status: <StatusBadge status="ready" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
];

export const orderHistoryTableColumns = [
  {
    accessor: "id",
    Header: "ID",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "customer",
    Header: "Customer",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "email",
    Header: "Email",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "item",
    Header: "Item",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "price",
    Header: "Price",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "payment",
    Header: "Payment",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "date",
    Header: "Date",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const orderHistoryTableData = [
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  {
    id: <p className="text-[14px] "> 354 </p>,
    customer: <p className="font-[400] "> Bilawal Ashraf </p>,
    email: <p className=" ">Bilawalashraf@gmail.com</p>,
    item: <p className="text-[14px] "> 0 </p>,
    price: <p className="text-[14px] "> $845 </p>,
    payment: <p className="text-[14px] font-[400] ">PAID</p>,
    status: <StatusBadge status="delivered" />,
    date: <p className="text-[14px] "> 2021-10-30</p>,
    action: <ActionButton />,
  },
  
];

export const orderProductDetailTableColumns = [
  {
    accessor: "id",
    Header: "#",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "image",
    Header: "Image",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "product",
    Header: "Product",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "quantity",
    Header: "Quantity",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "price",
    Header: "Price/Unit",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "subtotal",
    Header: "Subtotal",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
];

export const orderProductDetailTableData = [
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={sneakers} /> ,
    product:  <span className="flex flex-col text-[14px] " >
      <p className="font-[400] " >  Baby Pink Shoes</p>
      <p className="font-[300]"> A very smooth and comfort shoes ever for baby </p>
    </span> ,
    quantity: <p className="text-[14px] font-[400]"> 4 </p>   ,
    price:  <p className="text-[14px] font-[400]">$50.00 </p>  ,
    subtotal: <p className="text-[14px] font-[400]"> $200.00</p> 
  },

];



export const transactionTableColumns = [
  {
    accessor: "transid",
    Header: "Trans-ID",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "paid",
    Header: "Paid",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "method",
    Header: "Method",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "date",
    Header: "Date",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "date2",
    Header: "Date",
    Cell: ({ cell: { value }, row }) => <span  > {value} </span>,
  },
]

export const transactionTableData = [
  {
    transid:   "#1" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:   "#2" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <AmexIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:   "#3" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <MastercardIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:  "#4" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:  " #5" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:  " #6" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:   "#7" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:  "#8", 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:  "#9" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:  "#10" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  {
    transid:   "#11" , 
    paid:  <p className="text-[14px] font-[400]"> $354.00 </p>, 
    method:  <p className="text-[14px] font-[400] flex items-center gap-[7px]"> <VisaIcon/> <p> Visa </p></p>, 
    date:  <p className="text-[14px] font-[400]"> 16.12.2018, 14:21 </p>, 
    date2:  <span className="w-[80px] h-[25px] rounded-[5px] border-[1px]
     flex justify-center items-center cursor-pointer " >
    <p className="text-[14px] font-[400]"> Details </p>
    </span>
  },
  
]




export const invoiceTableColumns = [
  {
    accessor: "id",
    Header: "#",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "image",
    Header: "Image",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "item",
    Header: "Item",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "description",
    Header: "Description",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "quantity",
    Header: "Quantity",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "unicost",
    Header: "Uni-Const",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "total",
    Header: "Total",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
]

export const invoiceTableData = [
  {
    id:  <p className="text-[14px] font-[400]"> 1 </p>, 
    image:  <Image src={smartWatch} /> , 
    item:  <p className="text-[14px] font-[400]"> Digital Watch </p>, 
    description:  <p className="text-[14px] font-[400]"> Amazing Watch with 10 days replacement warranty </p>, 
    quantity:  <p className="text-[14px] font-[400]"> 4 </p>, 
    unicost:  <p className="text-[14px] font-[400]"> $50.00 </p>, 
    total:  <p className="text-[14px] font-[400]"> $200.00 </p>, 
   
  },
  {
    id:  <p className="text-[14px] font-[400]"> 2</p>, 
    image:  <Image src={smartWatch} /> , 
    item:  <p className="text-[14px] font-[400]"> Digital Watch </p>, 
    description:  <p className="text-[14px] font-[400]"> Amazing Watch with 10 days replacement warranty </p>, 
    quantity:  <p className="text-[14px] font-[400]"> 4 </p>, 
    unicost:  <p className="text-[14px] font-[400]"> $50.00 </p>, 
    total:  <p className="text-[14px] font-[400]"> $200.00 </p>, 
   
  },
  {
    id:  <p className="text-[14px] font-[400]"> 3 </p>, 
    image:  <Image src={smartWatch} /> , 
    item:  <p className="text-[14px] font-[400]"> Digital Watch </p>, 
    description:  <p className="text-[14px] font-[400]"> Amazing Watch with 10 days replacement warranty </p>, 
    quantity:  <p className="text-[14px] font-[400]"> 4 </p>, 
    unicost:  <p className="text-[14px] font-[400]"> $50.00 </p>, 
    total:  <p className="text-[14px] font-[400]"> $200.00 </p>, 
   
  },
  {
    id:  <p className="text-[14px] font-[400]"> 4 </p>, 
    image:  <Image src={smartWatch} /> , 
    item:  <p className="text-[14px] font-[400]"> Digital Watch </p>, 
    description:  <p className="text-[14px] font-[400]"> Amazing Watch with 10 days replacement warranty </p>, 
    quantity:  <p className="text-[14px] font-[400]"> 4 </p>, 
    unicost:  <p className="text-[14px] font-[400]"> $50.00 </p>, 
    total:  <p className="text-[14px] font-[400]"> $200.00 </p>, 
   
  },
  {
    id:  <p className="text-[14px] font-[400]"> 5 </p>, 
    image:  <Image src={smartWatch} /> , 
    item:  <p className="text-[14px] font-[400]"> Digital Watch </p>, 
    description:  <p className="text-[14px] font-[400]"> Amazing Watch with 10 days replacement warranty </p>, 
    quantity:  <p className="text-[14px] font-[400]"> 4 </p>, 
    unicost:  <p className="text-[14px] font-[400]"> $50.00 </p>, 
    total:  <p className="text-[14px] font-[400]"> $200.00 </p>, 
   
  },
  
]

export const recentOrdersTableColumns = [
  {
    accessor: "orderid",
    Header: "Order Id",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "productname",
    Header: "Product Name",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "units",
    Header: "Units",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "orderdate",
    Header: "Order Date",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "ordercost",
    Header: "Order Cost",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
]

export const recentOrdersTableData = [

  {
    orderid:  <p className="text-[14px] font-[400]"> 24541 </p>, 
    productname: " Coach Swagger ", 
    units: <p className="text-[14px] font-[400]"> 1 Units </p>, 
    orderdate: <p className="text-[14px] font-[400]"> Oct 20, 2018 </p>, 
    ordercost: <p className="text-[14px] font-[400]"> $230 </p>, 
    status: <StatusBadge status="delivered" />,
    action: <p className="text-[14px] font-[400]"> <Dots3Icon/> </p>, 

  },
  {
    orderid:  <p className="text-[14px] font-[400]"> 24541 </p>, 
    productname: " Coach Swagger ", 
    units: <p className="text-[14px] font-[400]"> 1 Units </p>, 
    orderdate: <p className="text-[14px] font-[400]"> Oct 20, 2018 </p>, 
    ordercost: <p className="text-[14px] font-[400]"> $230 </p>, 
    status: <StatusBadge status="delivered" />,
    action: <p className="text-[14px] font-[400]"> <Dots3Icon/> </p>, 

  },
  {
    orderid:  <p className="text-[14px] font-[400]"> 24541 </p>, 
    productname: " Coach Swagger ", 
    units: <p className="text-[14px] font-[400]"> 1 Units </p>, 
    orderdate: <p className="text-[14px] font-[400]"> Oct 20, 2018 </p>, 
    ordercost: <p className="text-[14px] font-[400]"> $230 </p>, 
    status: <StatusBadge status="delivered" />,
    action: <p className="text-[14px] font-[400]"> <Dots3Icon/> </p>, 

  },
  {
    orderid:  <p className="text-[14px] font-[400]"> 24541 </p>, 
    productname: " Coach Swagger ", 
    units: <p className="text-[14px] font-[400]"> 1 Units </p>, 
    orderdate: <p className="text-[14px] font-[400]"> Oct 20, 2018 </p>, 
    ordercost: <p className="text-[14px] font-[400]"> $230 </p>, 
    status: <StatusBadge status="delivered" />,
    action: <p className="text-[14px] font-[400]"> <Dots3Icon/> </p>, 

  },
  {
    orderid:  <p className="text-[14px] font-[400]"> 22 </p>, 
    productname: "  kali swagger  ", 
    units: <p className="text-[14px] font-[400]"> 1 Units </p>, 
    orderdate: <p className="text-[14px] font-[400]"> Oct 20, 2018 </p>, 
    ordercost: <p className="text-[14px] font-[400]"> $230 </p>, 
    status: <StatusBadge status="delivered" />,
    action: <p className="text-[14px] font-[400]"> <Dots3Icon/> </p>, 

  },
  {
    orderid:  <p className="text-[14px] font-[400]"> 24541 </p>, 
    productname: " Coach Swagger ", 
    units: <p className="text-[14px] font-[400]"> 1 Units </p>, 
    orderdate: <p className="text-[14px] font-[400]"> Oct 20, 2018 </p>, 
    ordercost: <p className="text-[14px] font-[400]"> $230 </p>, 
    status: <StatusBadge status="delivered" />,
    action: <p className="text-[14px] font-[400]"> <Dots3Icon/> </p>, 

  },
    
]



export const productListTableColumns = [
  {
    accessor: "product",
    Header: "Product",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "name",
    Header: "Name",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "price",
    Header: "Price",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "offer",
    Header: "Offer",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "purchased",
    Header: "Purchased",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "stock",
    Header: "Stock",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "status",
    Header: "Status",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "date",
    Header: "Date",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "Action",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
]



export const productListTableData = [

  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " smart watch", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  {
    product: <Image src={smartWatch} /> , 
    name: " Baby shoes Bayhdahakd", 
    price:  "$ 20",
    offer:  "25% off", 
    purchased: "16", 
    stock: "1845",
    status: "Active", 
    date: "2021-10-30", 
    action: <ActionButton/> , 

  },
  
 ]


 export const productCategoriesTableColumns = [
  {
    accessor: "id",
    Header: "ID",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "name",
    Header: "Name",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "description",
    Header: "Description",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "slug",
    Header: "Slug",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "order",
    Header: "Order",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
  {
    accessor: "action",
    Header: "ID",
    Cell: ({ cell: { value }, row }) => <span> {value} </span>,
  },
]

export const productCategoriesTableData = [
  {
    id: <div className="flex gap-[10px]" > <input type="checkbox"  /> <p>12</p> </div> ,
    name: "Men Cloth" ,
    description: "Men Cloth",
    slug: "/men",
    order: "1",
    action: <Dots3Icon/> 
  },
  {
    id: <div className="flex gap-[10px]" > <input type="checkbox"  /> <p>12</p> </div> ,
    name: "Men Cloth" ,
    description: "Men Cloth",
    slug: "/men",
    order: "1",
    action: <Dots3Icon/> 
  },
  {
    id: <div className="flex gap-[10px]" > <input type="checkbox"  /> <p>12</p> </div> ,
    name: "Men Cloth" ,
    description: "Men Cloth",
    slug: "/men",
    order: "1",
    action: <Dots3Icon/> 
  },
  {
    id: <div className="flex gap-[10px]" > <input type="checkbox"  /> <p>12</p> </div> ,
    name: "Men Cloth" ,
    description: "Men Cloth",
    slug: "/men",
    order: "1",
    action: <Dots3Icon/> 
  },
  {
    id: <div className="flex gap-[10px]" > <input type="checkbox"  /> <p>12</p> </div> ,
    name: "Men Cloth" ,
    description: "Men Cloth",
    slug: "/men",
    order: "1",
    action: <Dots3Icon/> 
  },
  {
    id: <div className="flex gap-[10px]" > <input type="checkbox"  /> <p>12</p> </div> ,
    name: "Men Cloth" ,
    description: "Men Cloth",
    slug: "/men",
    order: "1",
    action: <Dots3Icon/> 
  },
  {
    id: <div className="flex gap-[10px]" > <input type="checkbox"  /> <p>12</p> </div> ,
    name: "Men Cloth" ,
    description: "Men Cloth",
    slug: "/men",
    order: "1",
    action: <Dots3Icon/> 
  },
  
]