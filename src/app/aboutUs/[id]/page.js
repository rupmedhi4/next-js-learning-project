'use client'
import { useParams } from "next/navigation"

export default function page() {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ];
    const params = useParams()

    const dev = details.find((dev)=>dev.id === parseInt(params.id))
    console.log(dev);
    

    return (
        <div>
            <h1>{dev.name}</h1>
            <h2>{dev.role}</h2>
        </div>
    )
}