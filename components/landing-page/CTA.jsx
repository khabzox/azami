import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function CTA() {
    return (
        <div className="text-center mt-16 bg-secondary max-w-6xl mx-auto rounded-md py-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Interested in Our Projects?</h2>
            <p className="text-lg mb-6 text-white/65">Get in touch with us to learn more about our services and how we can work together on your next project.</p>
            <Link
                href="/contact"
            >
                <Button
                    className="h-10 w-32"
                >
                    Contact Us
                </Button>
            </Link>
        </div>
    )
}
