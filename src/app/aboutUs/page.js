'use client'
import Link from "next/link"



export default function page() {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ];
    return (
        <div>
            <h1>Our Team</h1>
            <ul>
            {
                details.map((dev) => {
                    return (
                        <li>
                            <Link href={`/aboutUs/${dev.id}`}>{dev.role}</Link>
                        </li>
                    )

                })
            }
            </ul>
        </div>
    )
}
