import { FaArrowUp } from "react-icons/fa";

function DashboardCard({
    title,
    value,
    color,
}) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

            <div className="flex justify-between">

                <div>

                    <p className="text-gray-500">

                        {title}

                    </p>

                    <h1 className={`text-4xl font-bold mt-3 ${color}`}>

                        {value}

                    </h1>

                </div>

                <FaArrowUp className="text-green-500 text-3xl"/>

            </div>

        </div>

    );

}

export default DashboardCard;