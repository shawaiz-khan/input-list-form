/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        if (firstName && lastName && email) {
            const person = { id: new Date().getTime().toString(), firstName, lastName, email };
            setPeople((people) => {
                return [...people, person];
            });
            setFirstName('');
            setLastName('');
            setEmail('');
        } else {
            console.log('no data');
        }
    };

    return (
        <>
            <article className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={submitForm} className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div className="col-span-2">
                        <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                    </div>
                </form>
                <div className="col-span-2">
                    {people.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-900 text-center">Submitted People</h3>
                            <ul className="mt-4 space-y-2">
                                {people.map((person) => {
                                    const { id, firstName, lastName, email } = person;
                                    return (
                                        <li key={id} className="p-4 bg-gray-100 rounded-md shadow-sm text-center flex justify-between">
                                            <p className="text-sm font-medium text-gray-700">{firstName} {lastName}</p>
                                            <p className="text-sm text-gray-500">{email}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </article>
        </>
    )
}
