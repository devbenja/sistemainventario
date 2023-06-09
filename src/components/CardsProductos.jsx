import React from 'react'
import { Link } from 'react-router-dom';

export const CardsProductos = ({nombre, descripcion, stock, id}) => {
    return (
        <div className="w-60 m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <h2 className="mt-8 text-md font-medium text-gray-900 dark:text-white">Id: {id}</h2>
                <h2 className="mb-1 text-md font-medium text-gray-900 dark:text-white">Producto: {nombre}</h2>
                <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Stock: {stock}</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{descripcion}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</Link>
                    <Link  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Eliminar</Link>
                </div>
            </div>
        </div>
    )
}