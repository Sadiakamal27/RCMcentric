"use client"

import { useState } from "react"

export function useFormSubmit() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    // ✅ Extra validation for Select fields
        // if (!data.jobRole || !data.numProviders || !data.serviceInterest || !data.monthlyCollection) {
        //     alert("Please select all required fields.")
        //     return}

        if (!form.checkValidity()) {
            form.reportValidity()
            return
          }

    try {
      setLoading(true)
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        alert("✅ Request submitted successfully!")
        form.reset()
      } else {
        alert("❌ Failed to send. Please try again.")
      }
    } catch (err) {
      console.error(err)
      alert("❌ Something went wrong. Try again later.")
    } finally {
      setLoading(false)
    }
  }

  return { handleSubmit, loading }
}
