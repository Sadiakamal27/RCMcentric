"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AutoPlayVideo from "./AutoPlayVideo"
import { useFormSubmit } from "@/hook/useFormSubmit"

function ExpertiseSection() {
  const { handleSubmit, loading } = useFormSubmit()

  return (
    <div className="min-h-screen py-10 sm:py-16 px-2 sm:px-4 bg-white flex items-center mt-10 sm:mt-20 justify-center">
      <div className="text-center w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Expertise in Software
        </h1>
        <div className="mt-2">
          <hr className="w-16 mx-auto border-t-2 border-red-500" />
          <div className="w-full relative mb-8">
            <div className="w-full aspect-video flex items-center justify-center">
              <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <AutoPlayVideo
                    src="/rcm-billing-software-animation.mp4"
                    wrapperClassName="flex flex-col items-center"
                    videoClassName="w-full rounded-lg"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        <Card className="w-full grid grid-cols-1 lg:grid-cols-2 bg-blue-100 max-w-3xl mx-auto overflow-hidden mt-6">
          <CardHeader className="bg-gradient-to-r to-white/50 p-1 text-left">
            <CardTitle className="text-base sm:text-xl font-semibold ">
              Unite your healthcare workflows and save 40+ hours every week.
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-1">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 w-full"
            >
              {/* Hidden field to identify this form */}
              <input type="hidden" name="formName" value="Get Started Form" />

              <div className="flex-1 w-full mb-2 sm:mb-0">
                <Input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  required
                  className="w-full border border-gray-400 focus:border-gray-300 focus:ring-0 focus:outline-none text-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 sm:px-6 py-2 w-full sm:w-auto flex items-center justify-center"
              >
                {loading ? (
                   <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                 Sending...
                 </>
                ) : (
                  "GET STARTED"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ExpertiseSection
